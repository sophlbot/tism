import { Pet } from '../types/pet';
import { canvasToBlob } from '../utils/pixelArt';

/**
 * Pump.fun Token Launch Service
 * 
 * This service handles uploading metadata and launching tokens on Pump.fun.
 * For full functionality, you need:
 * 1. A Solana wallet with SOL for transaction fees
 * 2. The @pump-fun/pump-sdk package
 * 3. Connection to Solana RPC
 */

// Pump.fun IPFS endpoint
// Always use proxy endpoint (Vite proxy in dev, Vercel serverless function in prod)
const PUMP_FUN_IPFS = '/api/pump-fun/ipfs';

// Website URL for pet pages (update this when deployed)
const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL || 'http://localhost:5173';

const RPC_URLS = [
  import.meta.env.VITE_RPC_URL,
  'https://api.mainnet-beta.solana.com',
  'https://solana-mainnet.g.alchemy.com/v2/demo',
].filter(Boolean) as string[];

interface TokenMetadata {
  name: string;
  symbol: string;
  description: string;
  image?: string;
  showName: boolean;
  createdOn: string;
  website?: string;
}

/**
 * Upload image and metadata to IPFS via Pump.fun
 */
async function uploadToPumpFunIPFS(
  imageBlob: Blob,
  metadata: TokenMetadata
): Promise<string> {
  const formData = new FormData();
  
  // Add image file
  formData.append('file', imageBlob, 'pet.png');
  
  // Add metadata fields
  formData.append('name', metadata.name);
  formData.append('symbol', metadata.symbol);
  formData.append('description', metadata.description);
  formData.append('showName', 'true');
  
  if (metadata.website) {
    formData.append('website', metadata.website);
  }
  
  console.log('📤 Uploading to Pump.fun IPFS...');
  
  const response = await fetch(PUMP_FUN_IPFS, {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Pump.fun IPFS error:', errorText);
    throw new Error(`Failed to upload to IPFS: ${response.status}`);
  }
  
  const data = await response.json() as { metadataUri?: string };
  console.log('✅ Uploaded to IPFS:', data);
  
  if (!data.metadataUri) {
    throw new Error('No metadata URI returned from IPFS');
  }
  
  return data.metadataUri;
}

/**
 * Generate token symbol from pet name
 */
function generateSymbol(name: string): string {
  return name
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 6) || 'PET';
}

/**
 * Generate token description from pet personality
 */
function generateDescription(pet: Pet): string {
  const { personality, appearance } = pet;
  
  let desc = `Meet ${personality.name}, a ${personality.temperament} ${appearance.type}`;
  
  if (personality.bio) {
    desc += `. ${personality.bio}`;
  } else {
    const traits = [];
    if (personality.lovesHumans) traits.push('loves humans');
    if (personality.playful) traits.push('playful');
    const activityLabel = personality.activityLevel <= 25 ? 'lazy' : personality.activityLevel <= 50 ? 'chill' : personality.activityLevel <= 75 ? 'active' : 'energetic';
    traits.push(activityLabel);
    
    desc += ` who ${traits.slice(0, 2).join(' and ')}.`;
    desc += ` Favorite food: ${personality.favoriteFood}.`;
  }
  
  return desc.slice(0, 200); // Pump.fun description limit
}

/**
 * Get wallet keypair from private key in environment variable
 */
async function getWalletKeypair() {
  const { Keypair } = await import('@solana/web3.js');
  const bs58 = (await import('bs58')).default;
  
  const privateKey = import.meta.env.VITE_WALLET_PRIVATE_KEY;
  
  if (!privateKey) {
    throw new Error('VITE_WALLET_PRIVATE_KEY is not set in environment variables. Please check your .env file.');
  }
  
  console.log('   Private key length:', privateKey.length);
  
  try {
    // Try to parse as base58 string first
    const privateKeyBytes = bs58.decode(privateKey);
    console.log('   Private key decoded as base58, length:', privateKeyBytes.length);
    
    if (privateKeyBytes.length !== 64) {
      throw new Error(`Invalid private key length: expected 64 bytes, got ${privateKeyBytes.length}`);
    }
    
    const keypair = Keypair.fromSecretKey(privateKeyBytes);
    console.log('   Wallet keypair created successfully');
    return keypair;
  } catch (base58Error: any) {
    console.log('   Base58 decode failed, trying JSON array...', base58Error.message);
    try {
      // Try to parse as JSON array
      const privateKeyArray = JSON.parse(privateKey);
      if (!Array.isArray(privateKeyArray)) {
        throw new Error('JSON is not an array');
      }
      console.log('   Private key parsed as JSON array, length:', privateKeyArray.length);
      
      const keypair = Keypair.fromSecretKey(Uint8Array.from(privateKeyArray));
      console.log('   Wallet keypair created successfully from JSON');
      return keypair;
    } catch (jsonError: any) {
      throw new Error(`Invalid private key format. Tried base58 and JSON array. Base58 error: ${base58Error.message}, JSON error: ${jsonError.message}`);
    }
  }
}

/**
 * Launch a token on Pump.fun for a pet
 * 
 * @param pet - The pet to tokenize
 * @param canvas - Canvas element with the pet image
 * @returns Token mint address
 */
export async function launchToken(
  pet: Pet,
  canvas: HTMLCanvasElement
): Promise<string> {
  console.log('\n=== LAUNCHING PET TOKEN ===');
  console.log('Pet:', pet.personality.name);
  
  // Step 1: Get image blob from canvas
  console.log('1. Converting canvas to image...');
  const imageBlob = await canvasToBlob(canvas);
  console.log(`   Image size: ${imageBlob.size} bytes`);
  
  // Step 2: Prepare metadata
  const metadata: TokenMetadata = {
    name: pet.personality.name,
    symbol: generateSymbol(pet.personality.name),
    description: generateDescription(pet),
    showName: true,
    createdOn: 'Project Pets',
    website: `${WEBSITE_URL}/pet/${pet.id}`,
  };
  
  console.log('2. Token metadata:', metadata);
  
  // Validate metadata
  if (!metadata.name || metadata.name.trim().length === 0) {
    throw new Error('Token name is required');
  }
  if (!metadata.symbol || metadata.symbol.trim().length === 0) {
    throw new Error('Token symbol is required');
  }
  if (metadata.name.length > 32) {
    throw new Error('Token name is too long (max 32 characters)');
  }
  if (metadata.symbol.length > 10) {
    throw new Error('Token symbol is too long (max 10 characters)');
  }
  
  // Step 3: Upload to IPFS
  console.log('3. Uploading to IPFS...');
  const metadataUri = await uploadToPumpFunIPFS(imageBlob, metadata);
  console.log('   Metadata URI:', metadataUri);
  
  if (!metadataUri || metadataUri.trim().length === 0) {
    throw new Error('Metadata URI is empty');
  }
  
  // Step 4: Create token transaction
  console.log('4. Creating token transaction...');
  
  try {
    // Lazy load Solana libraries to avoid breaking the app on load
    const { Connection, Keypair, Transaction } = await import('@solana/web3.js');
    const { PUMP_SDK } = await import('@pump-fun/pump-sdk');
    
    console.log('   Libraries loaded successfully');
    
    // Get wallet from private key
    const wallet = await getWalletKeypair();
    console.log('   Wallet address:', wallet.publicKey.toBase58());
    
    // Try each RPC until one works
    let connection = new Connection(RPC_URLS[0], { commitment: 'confirmed', confirmTransactionInitialTimeout: 30000 });
    console.log('   Connected to RPC:', RPC_URLS[0]);
    
    try {
      const balance = await connection.getBalance(wallet.publicKey);
      console.log('   Wallet balance:', balance / 1e9, 'SOL');
      if (balance < 0.01 * 1e9) {
        throw new Error(`Insufficient balance. Need at least 0.01 SOL, have ${balance / 1e9} SOL`);
      }
    } catch (balanceError: any) {
      console.warn('   Could not check balance:', balanceError.message);
      if (balanceError.message?.includes('429') || balanceError.message?.includes('rate')) {
        for (let i = 1; i < RPC_URLS.length; i++) {
          console.log('   Trying fallback RPC:', RPC_URLS[i]);
          connection = new Connection(RPC_URLS[i], { commitment: 'confirmed', confirmTransactionInitialTimeout: 30000 });
          try {
            await connection.getBalance(wallet.publicKey);
            console.log('   Fallback RPC works:', RPC_URLS[i]);
            break;
          } catch { /* try next */ }
        }
      }
    }
    
    // Generate new mint keypair
    const mint = Keypair.generate();
    console.log('   Mint address:', mint.publicKey.toBase58());
    
    // Create token creation instructions
    console.log('   Creating instructions...');
    console.log('   Parameters:', {
      mint: mint.publicKey.toBase58(),
      name: metadata.name,
      symbol: metadata.symbol,
      uri: metadataUri,
      creator: wallet.publicKey.toBase58(),
      user: wallet.publicKey.toBase58(),
    });
    
    let instructions;
    try {
      instructions = await PUMP_SDK.createV2Instruction({
        mint: mint.publicKey,
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadataUri,
        creator: wallet.publicKey,
        user: wallet.publicKey,
        mayhemMode: false,
      });
      console.log('   Instructions created successfully');
      console.log('   Instructions type:', typeof instructions);
      console.log('   Is array:', Array.isArray(instructions));
    } catch (instructionError: any) {
      console.error('   Failed to create instructions:', instructionError);
      throw new Error(`Failed to create instructions: ${instructionError?.message || 'Unknown error'}`);
    }
    
    // Build and send transaction - FAST, without waiting for confirmation
    // Ensure instructions is an array
    const instructionsArray = Array.isArray(instructions) ? instructions : [instructions];
    console.log('   Instructions array length:', instructionsArray.length);
    
    if (instructionsArray.length === 0) {
      throw new Error('No instructions generated');
    }
    
    // Build transaction
    const transaction = new Transaction();
    
    // Add instructions
    for (const instruction of instructionsArray) {
      transaction.add(instruction);
    }
    console.log('   Transaction built with', instructionsArray.length, 'instructions');
    
    // Get FRESH blockhash with retry across RPCs
    console.log('   Getting fresh blockhash...');
    let blockhash: string = '';
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        const result = await connection.getLatestBlockhash('finalized');
        blockhash = result.blockhash;
        console.log('   Blockhash obtained on attempt', attempt + 1);
        break;
      } catch (bhError: any) {
        console.warn(`   Blockhash attempt ${attempt + 1} failed:`, bhError.message);
        if (attempt < 4) {
          const fallbackIdx = (attempt + 1) % RPC_URLS.length;
          connection = new Connection(RPC_URLS[fallbackIdx], { commitment: 'confirmed', confirmTransactionInitialTimeout: 30000 });
          console.log('   Switching to RPC:', RPC_URLS[fallbackIdx]);
          await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
        } else {
          throw new Error(`Failed to get blockhash after 5 attempts: ${bhError.message}`);
        }
      }
    }
    
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = wallet.publicKey;
    
    // Sign transaction
    console.log('   Signing transaction...');
    transaction.sign(wallet, mint);
    console.log('   Transaction signed');
    
    // Send transaction with retry across RPCs
    console.log('5. Sending transaction...');
    let signature: string = '';
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        signature = await connection.sendRawTransaction(transaction.serialize(), {
          skipPreflight: true,
          maxRetries: 3,
        });
        break;
      } catch (sendError: any) {
        console.warn(`   Send attempt ${attempt + 1} failed:`, sendError.message);
        if (attempt < 2) {
          const fallbackIdx = (attempt + 1) % RPC_URLS.length;
          connection = new Connection(RPC_URLS[fallbackIdx], { commitment: 'confirmed', confirmTransactionInitialTimeout: 30000 });
          await new Promise(r => setTimeout(r, 1000));
        } else {
          throw sendError;
        }
      }
    }
    
    console.log('✅ Transaction sent successfully!');
    console.log('   Signature:', signature);
    console.log('   Token address:', mint.publicKey.toBase58());
    console.log('   View on Pump.fun: https://pump.fun/' + mint.publicKey.toBase58());
    console.log('   View on Solscan: https://solscan.io/tx/' + signature);
    
    // Return immediately - transaction is sent, confirmation will happen in background
    // Pump.fun will pick it up once confirmed
    return mint.publicKey.toBase58();
  } catch (error: any) {
    console.error('❌ Error in token creation:', error);
    console.error('   Error name:', error?.name);
    console.error('   Error message:', error?.message);
    console.error('   Error stack:', error?.stack);
    throw new Error(`Token creation failed: ${error?.message || 'Unknown error'}`);
  }
}

/**
 * Check if wallet is available (Phantom, Solflare, etc.)
 */
export function isWalletAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  
  const solana = (window as any).solana;
  return solana?.isPhantom || solana?.isSolflare || false;
}

/**
 * Get connected wallet address
 */
export async function getWalletAddress(): Promise<string | null> {
  if (!isWalletAvailable()) return null;
  
  const solana = (window as any).solana;
  
  try {
    const response = await solana.connect({ onlyIfTrusted: true });
    return response.publicKey.toString();
  } catch {
    return null;
  }
}

/**
 * Connect wallet
 */
export async function connectWallet(): Promise<string> {
  if (!isWalletAvailable()) {
    throw new Error('No Solana wallet found. Please install Phantom or Solflare.');
  }
  
  const solana = (window as any).solana;
  const response = await solana.connect();
  return response.publicKey.toString();
}




