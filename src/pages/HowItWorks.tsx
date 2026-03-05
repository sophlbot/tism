import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className="page how-it-works-page">
      <div className="document-container">
        {/* About tism */}
        <section className="document-section abstract-section">
          <div className="section-header">
            <div className="section-icon">
              <img src="/tism.png" alt="tism" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <h1 className="document-title">ABOUT TISM</h1>
          </div>
          <div className="content-box">
            <div className="document-content">
              <p>
                tism is an orange puzzle piece who lives in a plasticine world. He's a little different from everyone else - 
                he sees the world in his own unique way and that makes him special. But there's one thing tism 
                really wants: <strong>friends</strong>.
              </p>
              <p>
                The problem? tism is a puzzle piece, and puzzle pieces need other pieces to feel complete.
                That's where you come in.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">{'🧩'}</div>
            <h2 className="section-title">THE MISSION</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <p>
                Help tism find friends by creating unique friend tokens on Solana. 
                Each friend you create becomes a real token that lives on the blockchain forever - 
                a permanent buddy for tism.
              </p>

              <div className="side-by-side-boxes">
                <div className="side-box orange">
                  <div className="box-title">WHAT YOU DO</div>
                  <ul>
                    <li>Design a unique friend character</li>
                    <li>Give them a name and personality</li>
                    <li>Customize their look and style</li>
                    <li>Launch them as a token on Solana</li>
                  </ul>
                </div>
                <div className="side-box green">
                  <div className="box-title">WHAT TISM GETS</div>
                  <ul>
                    <li>A new friend to hang out with</li>
                    <li>Someone who fits his puzzle</li>
                    <li>A token that represents friendship</li>
                    <li>One step closer to being complete</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">{'🎨'}</div>
            <h2 className="section-title">HOW IT WORKS</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <div className="info-box orange">
                <div className="box-title">STEP 1: CREATE</div>
                <ul>
                  <li>Pick a character style for tism's new friend</li>
                  <li>Choose colors, shapes and visual details</li>
                  <li>The friend gets generated as unique pixel art</li>
                </ul>
              </div>

              <div className="info-box blue">
                <div className="box-title">STEP 2: CUSTOMIZE</div>
                <ul>
                  <li>Give your friend a name and ticker symbol</li>
                  <li>Write a backstory - how did they meet tism?</li>
                  <li>Set personality traits and quirks</li>
                </ul>
              </div>

              <div className="info-box green">
                <div className="box-title">STEP 3: DEPLOY</div>
                <ul>
                  <li>Your friend becomes a real token on Solana</li>
                  <li>Launched via Pump.fun for instant trading</li>
                  <li>The token lives on the blockchain forever</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why tism */}
        <section className="document-section">
          <div className="section-header">
            <div className="section-icon">{'💛'}</div>
            <h2 className="section-title">WHY TISM?</h2>
          </div>
          <div className="content-box">
            <div className="document-content">
              <p>
                tism represents everyone who's ever felt like they don't quite fit in. 
                He's a puzzle piece in a world of circles and squares - different, but not less.
                By creating friends for tism, you're celebrating what makes us all unique.
              </p>
              <p>
                Every friend token is a statement: being different is beautiful, 
                and everyone deserves connection. tism doesn't need to change - 
                he just needs friends who appreciate him the way he is.
              </p>

              <div className="info-box dark-box">
                <div className="box-title">BUILT ON</div>
                <ul>
                  <li><code>Solana - fast, cheap, built for friends</code></li>
                  <li><code>Pump.fun - instant token deployment</code></li>
                  <li><code>IPFS - permanent friend storage</code></li>
                  <li><code>Vibes - 100% pure friendship energy</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
