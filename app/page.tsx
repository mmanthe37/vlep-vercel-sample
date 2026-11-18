const evidence = [
  { date: 'THEN', title: 'Earlier evidence', detail: 'Seizure diary · EEG report', tone: 'muted' },
  { date: 'NEW', title: 'New evidence arrives', detail: 'A later clinical observation', tone: 'accent' },
  { date: 'NOW', title: 'Profile reinterpreted', detail: 'What changed—and why', tone: 'current' },
]

const principles = [
  {
    number: '01',
    title: 'Evidence stays traceable',
    description: 'Each profile change can be connected back to the evidence that supports it.',
  },
  {
    number: '02',
    title: 'Earlier versions remain visible',
    description: 'A longitudinal view makes it possible to compare how understanding shifts over time.',
  },
  {
    number: '03',
    title: 'Uncertainty is part of the record',
    description: 'The prototype aims to show what is known, what is changing, and what still needs review.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.75 10h12.5M10.5 4.25 16.25 10l-5.75 5.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="VLEP home">
          <span className="wordmark-mark" aria-hidden="true">V</span>
          <span>VLEP</span>
        </a>
        <span className="topbar-note">A research prototype</span>
      </header>

      <div className="content-column" id="top">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow"><span className="eyebrow-dot" />LONGITUDINAL EPILEPSY RESEARCH</p>
          <h1 id="page-title">VLEP - The Versioned Longitudinal Epilepsy Phenotype Project</h1>
          <p className="intro-byline">A solo, freelance epilepsy and seizure diagnosis criteria research project - by Michael Manthe</p>
          <p className="intro-copy">
            The <strong>Versioned Longitudinal Epilepsy Phenotype Platform</strong> (VLEP) is a research prototype for organizing seizure evidence across time—and making changes in understanding easier to follow.
          </p>
          <a className="primary-link" href="https://mmanthe37.github.io/vlep-csep-investor-demo/" target="_blank" rel="noreferrer">
            Explore the VLEP demo <ArrowIcon />
          </a>
          <p className="prototype-note">Research prototype · Not a clinical decision tool</p>
        </section>

        <section className="timeline-card" aria-label="Illustration of how evidence informs a profile over time">
          <div className="card-heading">
            <div>
              <p className="mini-label">THE IDEA</p>
              <h2>One story, seen across time</h2>
            </div>
            <span className="version-chip">PROFILE HISTORY <span>↗</span></span>
          </div>
          <div className="timeline">
            <div className="timeline-track" aria-hidden="true"><span /><span /></div>
            {evidence.map((item) => (
              <article className={`timeline-item ${item.tone}`} key={item.date}>
                <span className="timeline-node" aria-hidden="true" />
                <p className="timeline-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p className="timeline-detail">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="card-caption">
            <span className="caption-icon" aria-hidden="true">↳</span>
            <p>New evidence can change the picture. VLEP keeps the earlier picture—and the reasoning—within reach.</p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <p className="eyebrow section-eyebrow">WHAT VLEP DOES</p>
          <h2 id="about-title">A profile that can evolve, without losing its history.</h2>
          <p className="section-copy">
            Seizure information can accumulate across diaries, reports, and observations. VLEP organizes that evidence into versions of a person’s seizure profile, helping researchers see what changed, which evidence supported the change, and where uncertainty remains.
          </p>
          <div className="principles">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section" aria-labelledby="why-title">
          <p className="eyebrow section-eyebrow">WHY IT MATTERS</p>
          <h2 id="why-title">Make the “why” visible—not just the latest label.</h2>
          <p className="section-copy">
            When new evidence becomes available, a researcher should be able to trace how and why their understanding of a person’s epilepsy changed. A versioned view offers a more transparent way to study that evolution over time.
          </p>
          <div className="boundary-note">
            <span className="boundary-mark" aria-hidden="true">i</span>
            <p><strong>Built for research.</strong> VLEP is a prototype for organizing and reviewing evidence. It does not diagnose epilepsy or replace clinical judgment.</p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-byline">
            <span className="footer-label">PROJECT BY</span>
            <span className="footer-name">Michael Manthe</span>
          </div>
          <a className="footer-link" href="https://mmanthe37.github.io/vlep-csep-investor-demo/" target="_blank" rel="noreferrer">
            View project demo <ArrowIcon />
          </a>
        </footer>
      </div>
    </main>
  )
}
