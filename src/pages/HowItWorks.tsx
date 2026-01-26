import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className="page how-it-works-page">
      <div className="document-container">
        {/* Abstract Section */}
        <section className="document-section abstract-section">
          <div className="section-header">
            <div className="section-icon">▲</div>
            <h1 className="document-title">ABSTRACT</h1>
          </div>
          <div className="content-box">
            <div className="document-content">
              <p>
                "Metal RWA" is a Real-World Asset (RWA) tokenization platform that transforms precious metals into unique digital tokens on the Solana blockchain. This platform combines pixel art generation, metal property customization, and blockchain technology to create a new form of metal-backed digital asset. Users can design custom pixel art representations of gold, silver, platinum, and other precious metals, configure physical properties like purity and weight, and launch their metal tokens on Pump.fun—a decentralized token launchpad. The central innovation lies in bridging physical metal ownership with the emerging world of tokenized assets, creating a novel intersection between precious metals and decentralized finance.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="document-section toc-section">
          <div className="section-header">
            <div className="section-icon">▲</div>
            <h1 className="document-title">TABLE OF CONTENTS</h1>
          </div>
          <div className="content-box">
            <div className="document-content">
              <ul className="toc-list">
                <li>Introduction & Core Concept</li>
                <li>System Architecture</li>
                <li>Metal Types & Properties</li>
                <li>Pixel Art Generation System</li>
                <li>Token Creation Process</li>
                <li>Blockchain Integration</li>
                <li>Vault & Storage System</li>
                <li>Technical Implementation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">▲</div>
            <h2 className="section-title">1. INTRODUCTION & CORE CONCEPT</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">1.1 Background</h3>
              <p>
                Metal RWA enables users to create, customize, and tokenize digital representations of precious metals. The platform operates on three fundamental layers, bridging the gap between physical metal ownership and the emerging world of tokenized assets.
              </p>
              
              <div className="info-box blue">
                <div className="box-title">CORE PLATFORM LAYERS</div>
                <ul>
                  <li><strong>Visual Layer:</strong> Custom pixel art generation for metal representations</li>
                  <li><strong>Property Layer:</strong> Configurable metal properties including purity, weight, and finish</li>
                  <li><strong>Token Layer:</strong> Blockchain tokenization on Solana via Pump.fun integration</li>
                </ul>
              </div>

              <h3 className="subsection-title">1.2 Core Innovation</h3>
              <p>
                Each metal token becomes a unique, tradeable digital asset that represents physical metal ownership, creating a new category of RWA tokens that maintain intrinsic value while gaining DeFi utility.
              </p>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">2. SYSTEM ARCHITECTURE</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">2.1 The Engine Core</h3>
              <p>
                The platform operates on a <strong>client-side architecture</strong>, decoupling user interface from blockchain operations. This architecture ensures fast, responsive interactions while maintaining secure blockchain connectivity.
              </p>
              
              <div className="info-box dark-box">
                <div className="box-title">CORE ENGINE PARAMETERS</div>
                <ul>
                  <li><code>Frontend: React + TypeScript UI</code></li>
                  <li><code>Rendering: Canvas-based pixel art renderer</code></li>
                  <li><code>Storage: LocalStorage for token data persistence</code></li>
                  <li><code>Blockchain: Solana Web3.js integration</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">2.2 Multi-Layer Architecture</h3>
              <p>
                The system is structured in three distinct layers, each handling specific responsibilities while maintaining clear separation of concerns.
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box blue">
                  <div className="box-title">FRONTEND LAYER</div>
                  <ul>
                    <li>React + TypeScript UI</li>
                    <li>Canvas-based metal renderer</li>
                    <li>LocalStorage for data persistence</li>
                    <li>Real-time price display</li>
                  </ul>
                </div>
                <div className="side-box teal">
                  <div className="box-title">SERVICE LAYER</div>
                  <ul>
                    <li>Pump.fun API integration</li>
                    <li>Solana Web3.js operations</li>
                    <li>IPFS metadata upload</li>
                    <li>Transaction management</li>
                  </ul>
                </div>
              </div>

              <div className="info-box dark-box">
                <div className="box-title">BLOCKCHAIN LAYER</div>
                <ul>
                  <li>Solana mainnet connection via Helius RPC</li>
                  <li>Pump.fun smart contract interaction</li>
                  <li>Token minting and deployment</li>
                  <li>Transaction signing and submission</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">3. METAL TYPES & PROPERTIES</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">3.1 Supported Metals</h3>
              <p>
                The platform supports six precious metals, each with unique properties and market values.
              </p>
              
              <div className="info-box dark-box">
                <div className="box-title">METAL TYPES</div>
                <ul>
                  <li><code>Gold (XAU): The ultimate store of value - $2,045/oz</code></li>
                  <li><code>Silver (XAG): Industrial and monetary metal - $23.50/oz</code></li>
                  <li><code>Platinum (XPT): Rare precious metal - $920/oz</code></li>
                  <li><code>Palladium (XPD): Industrial precious metal - $1,050/oz</code></li>
                  <li><code>Copper (XCU): Essential industrial metal - $3.85/oz</code></li>
                  <li><code>Bronze (XBZ): Copper-tin alloy - $4.20/oz</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">3.2 Customizable Properties</h3>
              <p>
                Users can customize multiple physical properties of their metal tokens:
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box pink">
                  <div className="box-title">PURITY LEVELS</div>
                  <ul>
                    <li>999.9 Fine (Investment grade)</li>
                    <li>999 Fine (Bullion standard)</li>
                    <li>995 Fine (Good delivery)</li>
                    <li>950 Fine (High purity)</li>
                    <li>925 Sterling (Silver)</li>
                    <li>900 Fine (Coin standard)</li>
                  </ul>
                </div>
                <div className="side-box purple">
                  <div className="box-title">PHYSICAL ATTRIBUTES</div>
                  <ul>
                    <li>Shape: Bar, Coin, Round, Ingot</li>
                    <li>Finish: Polished, Matte, Brushed, Antique</li>
                    <li>Weight: oz, grams, kilograms</li>
                    <li>Vault Location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">4. PIXEL ART GENERATION SYSTEM</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">4.1 Rendering Engine</h3>
              <p>
                The pixel art generation system creates unique visual representations of metals through a procedural rendering engine that combines shape algorithms with material properties.
              </p>
              
              <div className="info-box dark-box">
                <div className="box-title">RENDERING PARAMETERS</div>
                <ul>
                  <li><code>Canvas Size: 128x128 pixels</code></li>
                  <li><code>Metal Types: 6 distinct metals</code></li>
                  <li><code>Shape Support: Bar, Coin, Round, Ingot</code></li>
                  <li><code>Finish Effects: Polished, Matte, Brushed, Antique</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">4.2 Visual Effects</h3>
              <p>
                Each metal receives visual treatment based on its properties:
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box green">
                  <div className="box-title">BASE RENDERING</div>
                  <ul>
                    <li>Metal-specific color palette</li>
                    <li>Shape geometry drawing</li>
                    <li>Highlight placement</li>
                    <li>Shadow rendering</li>
                  </ul>
                </div>
                <div className="side-box orange">
                  <div className="box-title">FINISH EFFECTS</div>
                  <ul>
                    <li>Polished: Mirror shine</li>
                    <li>Matte: Diffuse surface</li>
                    <li>Brushed: Linear texture</li>
                    <li>Antique: Aged patina</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">5. TOKEN CREATION PROCESS</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">5.1 Process Pipeline</h3>
              <p>
                The token creation process follows a multi-step pipeline from metal selection to blockchain deployment.
              </p>

              <div className="info-box dark-box">
                <div className="box-title">CREATION STAGES</div>
                <ul>
                  <li><code>Stage 1: Metal Selection (type, visual)</code></li>
                  <li><code>Stage 2: Property Configuration (purity, shape, vault)</code></li>
                  <li><code>Stage 3: Token Details (name, ticker, supply)</code></li>
                  <li><code>Stage 4: Launch & Tokenization</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">5.2 Metadata & IPFS</h3>
              <p>
                Before blockchain deployment, all metal data is prepared and stored on IPFS:
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box yellow">
                  <div className="box-title">METADATA PREP</div>
                  <ul>
                    <li>Image → PNG blob</li>
                    <li>Token name & symbol</li>
                    <li>Metal properties</li>
                    <li>Vault location</li>
                  </ul>
                </div>
                <div className="side-box teal">
                  <div className="box-title">IPFS UPLOAD</div>
                  <ul>
                    <li>FormData assembly</li>
                    <li>Pump.fun API call</li>
                    <li>Metadata URI returned</li>
                    <li>URI stored on-chain</li>
                  </ul>
                </div>
              </div>

              <h3 className="subsection-title">5.3 Blockchain Transaction</h3>
              <p>
                The transaction process handles wallet operations and smart contract interaction:
              </p>

              <div className="info-box dark-box">
                <div className="box-title">TRANSACTION FLOW</div>
                <ul>
                  <li><code>1. Wallet initialization from private key</code></li>
                  <li><code>2. Mint keypair generation</code></li>
                  <li><code>3. Pump.fun SDK instruction creation</code></li>
                  <li><code>4. Transaction assembly & signing</code></li>
                  <li><code>5. RPC submission to Solana</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">6. BLOCKCHAIN INTEGRATION</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">6.1 Solana Network</h3>
              <p>
                The platform connects to Solana mainnet via Helius RPC endpoint, leveraging Solana's high-performance blockchain infrastructure.
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box purple">
                  <div className="box-title">SOLANA BENEFITS</div>
                  <ul>
                    <li>Fast transaction processing</li>
                    <li>Low transaction fees</li>
                    <li>High throughput capability</li>
                    <li>Robust ecosystem</li>
                  </ul>
                </div>
                <div className="side-box blue">
                  <div className="box-title">HELIUS RPC</div>
                  <ul>
                    <li>Reliable API endpoint</li>
                    <li>Enhanced performance</li>
                    <li>WebSocket support</li>
                    <li>Rate limit handling</li>
                  </ul>
                </div>
              </div>

              <h3 className="subsection-title">6.2 Pump.fun Integration</h3>
              <p>
                Pump.fun provides a decentralized token launchpad with automated token creation and liquidity mechanisms.
              </p>

              <div className="info-box dark-box">
                <div className="box-title">PUMP.FUN FEATURES</div>
                <ul>
                  <li><code>Automated token creation via smart contracts</code></li>
                  <li><code>Bonding curve mechanism for price discovery</code></li>
                  <li><code>Built-in liquidity pools</code></li>
                  <li><code>IPFS metadata storage</code></li>
                  <li><code>Program ID: 6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">7. VAULT & STORAGE SYSTEM</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">7.1 Global Vault Network</h3>
              <p>
                Metal tokens can be associated with physical vault locations worldwide for backing representation:
              </p>

              <div className="info-box dark-box">
                <div className="box-title">VAULT LOCATIONS</div>
                <ul>
                  <li><code>Zurich, Switzerland 🇨🇭</code></li>
                  <li><code>London, UK 🇬🇧</code></li>
                  <li><code>Singapore 🇸🇬</code></li>
                  <li><code>Dubai, UAE 🇦🇪</code></li>
                  <li><code>Hong Kong 🇭🇰</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">7.2 Data Persistence</h3>
              <p>
                All metal token data persists locally using browser storage:
              </p>

              <div className="info-box yellow">
                <div className="box-title">STORED DATA</div>
                <ul>
                  <li>Metal type and properties</li>
                  <li>Purity and weight configuration</li>
                  <li>Token address (if deployed)</li>
                  <li>Vault location reference</li>
                  <li>Image data (base64)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">■</div>
            <h2 className="section-title">8. TECHNICAL IMPLEMENTATION</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <h3 className="subsection-title">8.1 Technology Stack</h3>
              <p>
                The platform is built using modern web technologies optimized for performance and developer experience.
              </p>

              <div className="info-box dark-box">
                <div className="box-title">TECH STACK</div>
                <ul>
                  <li><code>Frontend: React 18, TypeScript, Vite</code></li>
                  <li><code>Styling: CSS Modules, Custom Properties</code></li>
                  <li><code>Blockchain: @solana/web3.js, @pump-fun/pump-sdk</code></li>
                  <li><code>RPC: Helius API endpoint</code></li>
                  <li><code>Storage: Browser localStorage</code></li>
                </ul>
              </div>

              <h3 className="subsection-title">8.2 Key Dependencies</h3>
              <p>
                Core dependencies handle blockchain operations, routing, and data management:
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box red">
                  <div className="box-title">BLOCKCHAIN</div>
                  <ul>
                    <li>@solana/web3.js</li>
                    <li>@pump-fun/pump-sdk</li>
                    <li>bs58 encoding</li>
                    <li>Helius RPC</li>
                  </ul>
                </div>
                <div className="side-box orange">
                  <div className="box-title">FRONTEND</div>
                  <ul>
                    <li>react-router-dom</li>
                    <li>uuid generation</li>
                    <li>Canvas API</li>
                    <li>LocalStorage</li>
                  </ul>
                </div>
              </div>

              <h3 className="subsection-title">8.3 Security & Performance</h3>
              <p>
                The platform implements multiple security measures and performance optimizations:
              </p>

              <div className="info-box green">
                <div className="box-title">SECURITY MEASURES</div>
                <ul>
                  <li>Private keys in environment variables</li>
                  <li>CORS proxy for API calls</li>
                  <li>Client-side transaction signing</li>
                  <li>No server-side key storage</li>
                </ul>
              </div>

              <div className="info-box dark-box">
                <div className="box-title">PERFORMANCE OPTIMIZATIONS</div>
                <ul>
                  <li><code>Lazy loading of blockchain libraries</code></li>
                  <li><code>Canvas-based rendering</code></li>
                  <li><code>LocalStorage for instant access</code></li>
                  <li><code>Fast transaction sending (no wait)</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="document-section conclusion-section">
          <div className="section-header">
            <div className="section-icon">▲</div>
            <h2 className="section-title">CONCLUSION</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <p>
                Metal RWA represents a novel approach to precious metal tokenization, combining visual representation, property configuration, and blockchain technology. By enabling users to create, customize, and tokenize metal-backed tokens, the platform bridges the gap between physical metal ownership and the emerging world of digital assets. The integration with Pump.fun provides a seamless path from creation to tokenization, making blockchain technology accessible to users without deep technical knowledge.
              </p>
              <p>
                The platform demonstrates how blockchain technology can be applied to create meaningful RWA tokens that maintain intrinsic value while gaining DeFi utility through tokenization. Each metal token becomes a unique, tradeable asset that represents physical metal ownership, creating a new category of RWA tokens on Solana.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
