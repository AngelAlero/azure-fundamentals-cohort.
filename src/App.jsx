import { useState } from 'react';

const learners = [
  {
    name: 'Olufemi',
    role: 'Instructor · Senior DevOps Engineer',
    initials: 'OL',
    color: 'violet',
    tag: 'Instructor',
    intro:
      'Olufemi brings real-world platform engineering experience to every lesson. He makes Azure feel approachable by connecting cloud concepts to the systems teams use every day.',
    focus: 'Cloud architecture, automation & AI operations',
    contribution: 'Guides the cohort through hands-on labs and practical design reviews.',
    next: 'Lead the first Azure architecture workshop',
  },
  {
    name: 'Adekunle',
    role: 'Accountant',
    initials: 'AD',
    color: 'blue',
    tag: 'Learner',
    intro:
      'A detail-oriented accountant bringing a strong eye for numbers, controls, and business value to the cloud. Adekunle is exploring how Azure can make technology costs more transparent.',
    focus: 'Cloud cost management, governance & FinOps',
    contribution: 'Keeps the cohort thinking about budgets, accountability, and measurable outcomes.',
    next: 'Build a cost-aware cloud budget using Azure pricing tools',
  },
  {
    name: 'Shuaibu',
    role: 'Computer Science Graduate',
    initials: 'SH',
    color: 'teal',
    tag: 'Learner',
    intro:
      'With a foundation in computer science, Shuaibu is ready to turn technical curiosity into hands-on cloud skills and explore where AI services fit into modern applications.',
    focus: 'Compute, application architecture & Azure AI',
    contribution: 'Brings software fundamentals and a builder’s mindset to the lab sessions.',
    next: 'Deploy a small application and connect it to an AI service',
  },
  {
    name: 'Alero',
    role: 'I.T Support Officer',
    initials: 'AL',
    color: 'amber',
    tag: 'Learner',
    intro:
      'Alero knows how to keep people and technology working together. She is growing her support experience into cloud administration, identity, and secure troubleshooting.',
    focus: 'Azure administration, identity & networking',
    contribution: 'Brings a practical support perspective to access, reliability, and user experience.',
    next: 'Explore Microsoft Entra ID and role-based access control',
  },
  {
    name: 'Okafor',
    role: 'Electrical Engineer',
    initials: 'OK',
    color: 'rose',
    tag: 'Learner',
    intro:
      'An electrical engineer with a systems-thinking approach, Okafor is curious about how cloud platforms power intelligent solutions, connected devices, and AI workloads.',
    focus: 'Cloud infrastructure, IoT concepts & AI workloads',
    contribution: 'Connects engineering principles to resilient, well-designed cloud systems.',
    next: 'Map an IoT-inspired solution to Azure services',
  },
];

const modules = [
  {
    number: '01',
    eyebrow: 'THE CLOUD',
    title: 'Cloud concepts',
    description:
      'Get comfortable with cloud computing and the choices behind every cloud solution.',
    topics: ['IaaS, PaaS & SaaS', 'Public, private & hybrid cloud', 'Shared responsibility'],
    icon: 'cloud',
    tint: 'sky',
  },
  {
    number: '02',
    eyebrow: 'THE PLATFORM',
    title: 'Azure architecture',
    description:
      'Understand how Azure is organized, from global infrastructure to your first resource.',
    topics: ['Regions & availability zones', 'Subscriptions & resource groups', 'Compute, network, storage & databases', 'Azure management tools'],
    icon: 'layers',
    tint: 'purple',
  },
  {
    number: '03',
    eyebrow: 'THE FOUNDATION',
    title: 'Security & governance',
    description:
      'Build good habits for access, protection, compliance, and responsible cloud operations.',
    topics: ['Microsoft Entra ID & RBAC', 'Defender for Cloud', 'Cost management & governance'],
    icon: 'shield',
    tint: 'mint',
  },
  {
    number: '04',
    eyebrow: 'THE INTELLIGENCE',
    title: 'Azure AI fundamentals',
    description:
      'Discover how Azure AI services help create intelligent apps—responsibly and securely.',
    topics: ['Machine learning, vision & language', 'Azure AI services & Azure OpenAI', 'Generative AI & responsible AI'],
    icon: 'spark',
    tint: 'peach',
  },
];

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    book: <><path d="M12 7v14" /><path d="M3 18V5.8A1.8 1.8 0 0 1 4.8 4H12v17H5a2 2 0 0 1-2-2Z" /><path d="M21 18V5.8A1.8 1.8 0 0 0 19.2 4H12" /><path d="M7 8h2M7 12h2M16 8h2M16 12h2" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    cloud: <><path d="M19 18H6a4 4 0 1 1 .68-7.94A6 6 0 0 1 18.5 9a4.5 4.5 0 0 1 .5 9Z" /><path d="m9 15 3-3 3 3M12 12v7" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    play: <><path d="m8 5 12 7-12 7V5Z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Avatar({ learner, size = 'normal' }) {
  return (
    <div className={`avatar avatar-${learner.color} avatar-${size}`} aria-label={learner.name}>
      {learner.initials}
    </div>
  );
}

function App() {
  const [selectedLearner, setSelectedLearner] = useState('Adekunle');
  const [activeNav, setActiveNav] = useState('Overview');
  const selectedProfile = learners.find((learner) => learner.name === selectedLearner);

  function navigateTo(label, id) {
    setActiveNav(label);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" onClick={() => setActiveNav('Overview')} aria-label="Cloudwise home">
          <span className="brand-mark"><Icon name="cloud" size={23} strokeWidth={2} /></span>
          <span className="brand-name">cloudwise<span>.</span></span>
        </a>

        <div className="workspace-label">YOUR WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          <button className={`nav-link ${activeNav === 'Overview' ? 'active' : ''}`} onClick={() => navigateTo('Overview', 'overview')}>
            <Icon name="grid" size={19} /> <span>Overview</span>
          </button>
          <button className={`nav-link ${activeNav === 'Learning path' ? 'active' : ''}`} onClick={() => navigateTo('Learning path', 'learning-path')}>
            <Icon name="book" size={19} /> <span>Learning path</span>
          </button>
          <button className={`nav-link ${activeNav === 'Our cohort' ? 'active' : ''}`} onClick={() => navigateTo('Our cohort', 'our-cohort')}>
            <Icon name="people" size={19} /> <span>Our cohort</span>
          </button>
        </nav>

        <div className="sidebar-spacer" />
        <div className="cohort-mini">
          <div className="mini-cloud"><Icon name="spark" size={17} /></div>
          <p className="mini-overline">LEARNING TOGETHER</p>
          <p className="mini-title">Curious minds.<br />Cloud-ready skills.</p>
          <div className="mini-avatars" aria-label="Five cohort members">
            {learners.map((learner) => <Avatar key={learner.name} learner={learner} size="tiny" />)}
          </div>
          <p className="mini-caption">5 people, one big cloud journey</p>
        </div>
        <div className="sidebar-foot"><span className="status-dot" /> Azure AI Fundamentals <span className="foot-year">{new Date().getFullYear()}</span></div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumbs"><span>Learning hub</span><span className="crumb-separator">/</span><strong>Azure AI Fundamentals</strong></div>
          <div className="topbar-right">
            <div className="live-label"><span className="status-dot" /> COHORT IN SESSION</div>
            <div className="topbar-divider" />
            <Avatar learner={learners[0]} size="small" />
            <div className="topbar-person"><strong>Olufemi</strong><span>Instructor</span></div>
          </div>
        </header>

        <div className="page-wrap">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A SHARED LEARNING JOURNEY</div>
              <h1 id="hero-title">A little curiosity.<br />A whole lot of <span>cloud.</span></h1>
              <p className="hero-description">
                Meet the people building their Azure foundations—one new idea, hands-on lab, and “what if?” at a time.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => navigateTo('Learning path', 'learning-path')}>
                  Explore the learning path <Icon name="arrow" size={17} />
                </button>
                <button className="button button-quiet" onClick={() => navigateTo('Our cohort', 'our-cohort')}>
                  Meet the cohort
                </button>
              </div>
              <div className="hero-note"><span className="note-check"><Icon name="check" size={13} /></span> Open to every background. Built for cloud enthusiasts.</div>
            </div>
            <div className="hero-art" aria-label="Illustration of connected cloud learning">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-cloud"><Icon name="cloud" size={49} strokeWidth={1.35} /></div>
              <div className="art-pill pill-ai"><span className="pill-dot violet-dot" /><Icon name="spark" size={15} /> AI & innovation</div>
              <div className="art-pill pill-secure"><span className="pill-dot green-dot" /><Icon name="shield" size={15} /> Secure by design</div>
              <div className="art-node node-one">01</div>
              <div className="art-node node-two">02</div>
              <div className="art-node node-three">03</div>
              <div className="art-tag">Your next chapter<br /><strong>starts in the cloud.</strong></div>
              <div className="art-sparkle sparkle-one">✳</div>
              <div className="art-sparkle sparkle-two">✳</div>
            </div>
            <div className="hero-bottom">
              <div className="hero-stat"><span className="stat-number">05</span><span className="stat-label">unique perspectives</span></div>
              <div className="stat-rule" />
              <div className="hero-stat"><span className="stat-number">04</span><span className="stat-label">learning modules</span></div>
              <div className="stat-rule" />
              <div className="hero-stat"><span className="stat-number">∞</span><span className="stat-label">ways to grow</span></div>
            </div>
          </section>

          <section className="section curriculum-section" id="learning-path">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> YOUR AZURE STARTING POINT</div>
                <h2>Learn the cloud.<br className="mobile-break" /> Then shape what’s next.</h2>
                <p className="section-intro">A practical path from cloud essentials to the ideas behind AI-powered solutions.</p>
              </div>
              <div className="path-badge"><Icon name="clock" size={16} /><span><strong>Learn at your pace</strong><small>Concepts · demos · guided labs</small></span></div>
            </div>
            <div className="module-grid">
              {modules.map((module) => (
                <article className="module-card" key={module.number}>
                  <div className="module-top">
                    <span className={`module-icon icon-${module.tint}`}><Icon name={module.icon} size={21} /></span>
                    <span className="module-number">MODULE {module.number}</span>
                  </div>
                  <div className="module-eyebrow">{module.eyebrow}</div>
                  <h3>{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                  <ul className="topic-list">
                    {module.topics.map((topic) => <li key={topic}><span className="topic-bullet" />{topic}</li>)}
                  </ul>
                  <div className="module-foot"><span><Icon name="play" size={14} /> Learn the essentials</span><span className="module-arrow"><Icon name="arrow" size={15} /></span></div>
                </article>
              ))}
            </div>
            <div className="outcome-strip">
              <div className="outcome-icon"><Icon name="spark" size={20} /></div>
              <div className="outcome-copy"><strong>Where the learning comes together</strong><span>Finish with a small cloud solution concept: choose the right Azure services, protect access, consider cost, and identify a responsible AI use case.</span></div>
              <span className="outcome-tag">CAPSTONE IDEA</span>
            </div>
          </section>

          <section className="section cohort-section" id="our-cohort">
            <div className="section-heading cohort-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> DIFFERENT STARTS. SHARED AMBITION.</div>
                <h2>Meet the people behind the progress.</h2>
                <p className="section-intro">Five backgrounds, one welcoming space to ask questions and learn by doing.</p>
              </div>
              <div className="cohort-count"><span className="count-avatars">{learners.slice(0, 3).map((learner) => <Avatar key={learner.name} learner={learner} size="tiny" />)}</span><strong>05</strong><span>in the cohort</span></div>
            </div>
            <div className="cohort-layout">
              <div className="learner-list">
                {learners.map((learner) => (
                  <button
                    className={`learner-row ${selectedLearner === learner.name ? 'selected' : ''}`}
                    key={learner.name}
                    onClick={() => setSelectedLearner(learner.name)}
                    aria-pressed={selectedLearner === learner.name}
                  >
                    <Avatar learner={learner} />
                    <span className="learner-summary"><strong>{learner.name}</strong><span>{learner.role}</span></span>
                    <span className={`role-chip ${learner.tag === 'Instructor' ? 'instructor-chip' : ''}`}>{learner.tag}</span>
                    <span className="learner-chevron"><Icon name="arrow" size={16} /></span>
                  </button>
                ))}
                <div className="list-footnote"><span className="status-dot" /> Everyone belongs here. Bring your questions.</div>
              </div>
              <article className="profile-card" aria-live="polite">
                <div className="profile-topline"><span className="profile-label">A LITTLE ABOUT</span><span className={`profile-chip ${selectedProfile.tag === 'Instructor' ? 'instructor-chip' : ''}`}>{selectedProfile.tag}</span></div>
                <div className="profile-person">
                  <Avatar learner={selectedProfile} size="large" />
                  <div><h3>{selectedProfile.name}</h3><p>{selectedProfile.role}</p></div>
                </div>
                <p className="profile-intro">{selectedProfile.intro}</p>
                <div className="profile-divider" />
                <div className="profile-detail"><span className="detail-icon"><Icon name="spark" size={16} /></span><div><span className="detail-label">EXPLORING</span><strong>{selectedProfile.focus}</strong></div></div>
                <div className="profile-detail"><span className="detail-icon detail-icon-blue"><Icon name="people" size={16} /></span><div><span className="detail-label">BRINGS TO THE COHORT</span><strong>{selectedProfile.contribution}</strong></div></div>
                <div className="next-step"><span className="next-step-kicker"><Icon name="calendar" size={14} /> NEXT UP</span><strong>{selectedProfile.next}</strong></div>
              </article>
            </div>
          </section>

          <section className="closing-card">
            <div className="closing-mark"><Icon name="cloud" size={24} /></div>
            <div><p className="closing-kicker">THE CLOUD IS A TEAM SPORT</p><h2>Learn together. Build with confidence.</h2><p>Curiosity is the only prerequisite. Every other skill can grow from here.</p></div>
            <button className="button closing-button" onClick={() => navigateTo('Learning path', 'learning-path')}>Revisit the learning path <Icon name="arrow" size={17} /></button>
            <div className="closing-decoration">✳</div>
          </section>

          <footer className="page-footer"><span>cloudwise<span className="footer-dot">.</span> <span className="footer-muted">A learning space for Azure enthusiasts.</span></span><span>Made for curious minds <span className="footer-heart">♥</span></span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
