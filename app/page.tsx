'use client';

import { useEffect, useState } from 'react';

const cities = [
  { name: 'Tokyo', x: 78, y: 42, tag: 'Origin network' },
  { name: 'Hong Kong', x: 70, y: 52, tag: 'Asia capital flow' },
  { name: 'Singapore', x: 68, y: 66, tag: 'Family office access' },
  { name: 'Dubai', x: 50, y: 49, tag: 'GCC capital corridor' },
  { name: 'London', x: 43, y: 34, tag: 'Institutional relationships' },
  { name: 'New York', x: 25, y: 39, tag: 'Global allocation' }
];

const focusAreas = [
  {
    label: '01',
    title: 'Web3',
    text: 'Japan market entry, KOL access, ecosystem partnerships, PR, media distribution and community-led growth for Web3-native companies.'
  },
  {
    label: '02',
    title: 'Real Estate',
    text: 'Selective off-market access to trophy real estate, hospitality assets and scarcity-driven opportunities in Tokyo and Asia.'
  },
  {
    label: '03',
    title: 'Strategic Introductions',
    text: 'Confidential alignment between capital, operators, founders, asset owners and relationship-driven opportunities.'
  }
];

const opportunities = [
  'Ultra-core Tokyo commercial assets',
  'Premium hospitality and destination assets',
  'Japan Web3 market expansion mandates',
  'Cross-border strategic partnership introductions'
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loader ${loaded ? 'loaderHidden' : ''}`} aria-hidden={loaded}>
        <div className="loaderMark">ARC</div>
        <div className="loaderLine" />
      </div>

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="ARC BRIDGE CAPITAL home">
          ARC BRIDGE CAPITAL
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#focus">Investment Focus</a>
          <a href="#web3">Web3 Advisory</a>
          <a href="#assets">Alternative Assets</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="heroSection" aria-label="ARC BRIDGE CAPITAL">
          <div className="heroGrain" />
          <div className="heroContent">
            <p className="microLabel">Boutique Advisory</p>
            <h1>ARC BRIDGE CAPITAL</h1>
            <p className="heroLine">Connecting Global Capital with Exceptional Alternative Assets.</p>
          </div>
          <div className="scrollCue" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="mapStory" id="about">
          <div className="stickyMap">
            <div className="sectionIntro">
              <p className="microLabel">Global Corridor</p>
              <h2>A discreet bridge between capital, assets and strategic networks.</h2>
            </div>

            <div className="worldPanel" aria-label="Global advisory map">
              <div className="mapGrid" />
              <svg className="routeSvg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M78 42 C73 46 72 48 70 52 S69 61 68 66 S58 58 50 49 S45 38 43 34 S31 35 25 39" />
              </svg>
              {cities.map((city, index) => (
                <div
                  className="cityNode"
                  style={{ left: `${city.x}%`, top: `${city.y}%`, animationDelay: `${index * 160}ms` }}
                  key={city.name}
                >
                  <span className="nodePulse" />
                  <span className="cityName">{city.name}</span>
                  <small>{city.tag}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="splitSection">
          <div className="sectionIntro wide">
            <p className="microLabel">About</p>
            <h2>Built for mandates where trust, timing and access matter more than public visibility.</h2>
          </div>
          <div className="founderGrid">
            <p>
              ARC BRIDGE CAPITAL is a boutique cross-border advisory platform focused on strategic introductions,
              off-market alternative assets and Web3-enabled partnerships across Japan, Asia and global financial
              hubs.
            </p>
            <div className="founderCard">
              <span>Founder</span>
              <p>
                Founded by Sylar, combining a China-Japan background with experience across KPMG, ByteDance, Web3
                market expansion and Japan-focused strategic partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="focusSection" id="focus">
          <div className="sectionIntro">
            <p className="microLabel">Investment Focus</p>
            <h2>Scarcity, strategic relevance and long-term alignment.</h2>
          </div>
          <div className="focusGrid">
            {focusAreas.map((item) => (
              <article className="focusCard" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cinematicSection" id="web3">
          <div className="pinCopy">
            <p className="microLabel">Web3 Advisory</p>
            <h2>Japan market access powered by trusted local networks.</h2>
          </div>
          <div className="advisoryStack">
            <article>
              <span>Market Access</span>
              <h3>Entry Strategy</h3>
              <p>Positioning, partnership mapping and Japan-specific growth strategy for Web3 companies.</p>
            </article>
            <article>
              <span>Distribution</span>
              <h3>KOL & Community</h3>
              <p>Top-tier Japanese KOL introductions, community activation and performance-minded campaigns.</p>
            </article>
            <article>
              <span>Visibility</span>
              <h3>PR & Media</h3>
              <p>Strategic communications, high-authority media resources and cross-border narrative design.</p>
            </article>
          </div>
        </section>

        <section className="assetsSection" id="assets">
          <div className="assetVisual" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
          <div className="assetCopy">
            <p className="microLabel">Alternative Assets</p>
            <h2>Not a listing desk. A curated channel for exceptional opportunities.</h2>
            <p>
              ARC BRIDGE CAPITAL focuses on assets and partnerships where scarcity, discretion and network quality
              create the edge.
            </p>
          </div>
        </section>

        <section className="opportunitySection" id="opportunities">
          <div className="sectionIntro">
            <p className="microLabel">Selected Opportunities</p>
            <h2>Quietly sourced. Carefully aligned. Shared only when relevant.</h2>
          </div>
          <div className="opportunityList">
            {opportunities.map((item, index) => (
              <div className="opportunityItem" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contactSection" id="contact">
          <p className="microLabel">Contact</p>
          <h2>Confidential introductions begin privately.</h2>
          <p>
            For selected mandates, strategic partnerships or confidential introductions, please contact ARC BRIDGE
            CAPITAL directly.
          </p>
          <div className="contactActions">
            <a href="mailto:contact@arcbridge.capital">Email</a>
            <a href="https://t.me/SatoMoeka" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 ARC BRIDGE CAPITAL</span>
        <span>Cross-border Alternative Assets Advisory</span>
      </footer>
    </>
  );
}
