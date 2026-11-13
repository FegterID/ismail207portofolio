import React, { useState } from 'react';

const projects = [
  { number: '01', type: 'CLOUD SECURITY / AWS', title: 'Cloud Security Lab', description: 'A hands-on environment for exploring cloud identity, network boundaries, logging, and security best practices on AWS.', tags: ['AWS', 'IAM', 'VPC', 'CloudTrail'], status: 'LAB PROJECT' },
  { number: '02', type: 'LINUX / SYSTEM SECURITY', title: 'Linux Hardening Notes', description: 'A practical collection of Linux security configurations covering permissions, services, process visibility, and system logs.', tags: ['Arch Linux', 'Bash', 'Linux'], status: 'DOCUMENTATION' },
  { number: '03', type: 'SECURITY MONITORING', title: 'Log Monitoring Playground', description: 'An experimental workflow for collecting, inspecting, and understanding system events to build a stronger monitoring foundation.', tags: ['Logs', 'Detection', 'Networking'], status: 'IN PROGRESS' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">I.</span><span>ISMAIL<span className="brand-dot">_</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'CLOSE' : 'MENU'} <span>{menuOpen ? '−' : '+'}</span></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#focus" onClick={closeMenu}>Focus</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>LET'S TALK <Arrow/></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR LEARNING & COLLABORATION</div>
          <h1>Building a more<br/><span className="gradient-text">secure</span> digital world<span className="accent">.</span></h1>
          <p className="hero-intro">Hi, I'm <strong>Ismail</strong> — an aspiring Cloud Security professional exploring the intersection of infrastructure, security, and technology.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">EXPLORE MY WORK <Arrow/></a><a className="text-link" href="#about">MORE ABOUT ME <span>↓</span></a></div>
          <div className="hero-meta"><div><span className="meta-label">CURRENTLY LEARNING</span><strong>Cloud Security · AWS</strong></div><div><span className="meta-label">BASED IN</span><strong>Yogyakarta, Indonesia</strong></div></div>
        </div>
        <div className="hero-visual" aria-label="Abstract cloud security illustration">
          <div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          
            <div className="core-card">
              <div className="core-top">
                <span>SECURITY_STATUS</span>
                <span className="live-dot">● LIVE</span>
              </div>

              <div className="shield">
                <img 
                  src={`${import.meta.env.BASE_URL}WhatsApp Image 2026-10-31 at 00.38.57.jpeg`} 
                  alt="Ismail Portrait"
                  className="profile-photo"
                />
              </div>

              <div className="core-bottom">
                <span>PROTECT</span>
                <span>·</span>
                <span>DETECT</span>
                <span>·</span>
                <span>RESPOND</span>
              </div>
            </div>

          <div className="float-chip chip-top"><span className="chip-icon">⌘</span><span><b>IAM</b><small>Identity & Access</small></span></div>
          <div className="float-chip chip-bottom"><span className="chip-icon">⌁</span><span><b>INFRASTRUCTURE</b><small>Cloud-first mindset</small></span></div>
          <div className="visual-index">FIG. 001 <span>—</span> CLOUD SECURITY</div>
        </div>
        <div className="scroll-note"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker">01 / ABOUT ME</div><div className="about-grid"><h2>Curiosity is where<br/>better security <span className="serif-accent">begins.</span></h2><div className="about-copy"><p>I'm an Informatics student with a growing interest in how modern infrastructure works — and how to keep it secure.</p><p>I'm currently building my foundations in Linux, networking, and AWS. I enjoy learning by experimenting, documenting what I discover, and turning concepts into practical projects.</p><a className="inline-link" href="#contact">GET IN TOUCH <Arrow/></a></div></div>
        <div className="principles"><div><span>01</span><strong>STAY CURIOUS</strong><p>Keep asking how systems work.</p></div><div><span>02</span><strong>BUILD & BREAK</strong><p>Learn through hands-on practice.</p></div><div><span>03</span><strong>SECURE BY DESIGN</strong><p>Make security part of the process.</p></div></div>
      </section>

      <section className="focus section" id="focus"><div className="section-kicker">02 / AREAS OF FOCUS</div><div className="focus-heading"><h2>What I'm <span className="serif-accent">working on.</span></h2><p>Building a strong foundation, one layer at a time.</p></div>
        <div className="focus-list"><div className="focus-item"><span className="focus-num">01</span><div><h3>Cloud Security</h3><p>Understanding cloud infrastructure, identity management, network security, and AWS security services.</p></div><span className="focus-symbol">↗</span></div><div className="focus-item"><span className="focus-num">02</span><div><h3>Linux & Systems</h3><p>Exploring system administration, permissions, services, process management, and security hardening.</p></div><span className="focus-symbol">↗</span></div><div className="focus-item"><span className="focus-num">03</span><div><h3>Networking</h3><p>Strengthening my understanding of TCP/IP, DNS, DHCP, HTTP/HTTPS, and network fundamentals.</p></div><span className="focus-symbol">↗</span></div></div>
      </section>

      <section className="projects section" id="projects"><div className="section-kicker">03 / SELECTED WORK</div><div className="projects-heading"><h2>Learning by <span className="serif-accent">building.</span></h2><p>A few labs and experiments from my learning journey.</p></div>
        <div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}><div className="project-top"><span>{p.number} / {p.type}</span><span className="project-arrow"><Arrow/></span></div><div className="project-art"><div className="art-lines"/><div className="art-orb"/><span className="art-label">{p.number === '01' ? 'AWS // CLOUD' : p.number === '02' ? 'LINUX // HARDENING' : 'LOGS // MONITORING'}</span><span className="art-cross">＋</span></div><div className="project-info"><div className="project-status">{p.status}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div>
        <p className="project-disclaimer">Note: These are portfolio project concepts and learning areas. Replace each description with verified project details, screenshots, and repository links as you complete the work.</p>
      </section>

      
      
      <section className="cover-letter-section" id="cover-letter">
        <div className="letter-container">

          <div className="letter-header">
            <h2>APPLICATION LETTER</h2>
            <span className="letter-status">CAREER DOCUMENT</span>
          </div>

          <div className="letter-content">

            <div className="letter-sender">
              <h3>Ismail</h3>
              <p>Yogyakarta, Indonesia</p>
              <p>Email: 2300018207@webmail.uad.ac.id</p>
              <p>Date: November 13, 2026</p>
            </div>

            <div className="letter-recipient">
              <p><strong>To:</strong></p>
              <p>Human Resources Manager</p>
              <p>TechNova Digital Solutions</p>
            </div>

            <div className="letter-subject">
              <strong>
                Subject: Application for Junior Penetration Tester Position
              </strong>
            </div>

            <div className="letter-body">
              <p>Dear Human Resources Manager,</p>

              <p>
                I am writing to express my interest in applying for the
                Junior Penetration Tester position at TechNova Digital
                Solutions. I am an Informatics Engineering student with
                a strong interest in cybersecurity, particularly
                penetration testing and web application security.
              </p>

              <p>
                During my internship this semester, I gained practical
                experience in the penetration testing field. My
                responsibilities included assisting with security
                assessments, identifying potential vulnerabilities,
                analyzing security issues, and understanding how to
                evaluate the security of web applications. This
                experience helped me improve my technical knowledge
                and develop a better understanding of real-world
                cybersecurity practices.
              </p>

              <p>
                I also developed relevant technical skills, including
                Linux system administration, computer networking,
                TCP/IP, DNS, HTTP, and HTTPS. In addition, I have
                studied web application security and the OWASP Top 10
                to understand common security vulnerabilities and
                their potential impacts.
              </p>

              <p>
                One of my internship activities involved
                <strong> conducting web application security assessments by identifying potential vulnerabilities, performing vulnerability analysis, testing common security issues based on the OWASP Top 10, and evaluating potential security risks. I also assisted in documenting security findings, analyzing their potential impact, and providing recommendations to improve application security. Through these activities, I gained practical experience in penetration testing methodologies, vulnerability assessment, and security reporting.</strong>.
                Through this activity, I learned how to approach
                security testing systematically, document findings,
                and provide recommendations to improve application security.
              </p>

              <p>
                I believe my academic background, internship experience,
                technical knowledge, and willingness to learn make me
                a suitable candidate for this position. I am confident
                that joining TechNova Digital Solutions would allow me
                to contribute to the team while continuing to develop
                my cybersecurity skills.
              </p>

              <p>
                Thank you for considering my application. I would
                appreciate the opportunity to discuss my qualifications
                further in an interview.
              </p>

              <div className="letter-signature">
                <p>Sincerely,</p>
                <h3>Ismail</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="video-section" id="videos">

        <div className="video-heading">
          <span className="section-tag">// MEDIA & DOCUMENTATION</span>
          <h2>VIDEO <span>SHOWCASE</span></h2>
          <p>
            Explore my cybersecurity journey, technical demonstrations,
            and project documentation.
          </p>
        </div>

        <div className="video-container">

          <div className="video-card">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/CVBp1W3CXlY"
                title="Cybersecurity Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-info">
              <span>Presentation Video.</span>
              <h3>My Cybersecurity Journey</h3>
              <p>
                A collection of my cybersecurity learning experiences,
                practical demonstrations, and technical projects.
              </p>
            </div>
          </div>

        </div>

      </section>



      <section className="contact section" id="contact"><div className="section-kicker">05 / CONTACT</div><div className="contact-inner"><div><p className="contact-overline">HAVE A PROJECT OR AN IDEA?</p><h2>Let's make<br/>something <span className="serif-accent">meaningful.</span></h2></div><div className="contact-right"><p>I'm always open to connecting with people who are curious about technology, cloud, and security.</p><a className="contact-email" href="mailto:2300018207@webmail.uad.ac.id">2300018207@webmail.uad.ac.id <Arrow/></a><span className="email-note">Replace this with your professional email address.</span><div className="social-links"><a href="https://github.com/FegterID?tab=overview&from=2026-10-01&to=2026-10-31" target="_blank" rel="noreferrer">GITHUB <Arrow/></a></div></div></div></section>
    </main>
    <footer><a className="brand" href="#home"><span className="brand-mark">I.</span><span>ISMAIL<span className="brand-dot">_</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY.</span><span>© {new Date().getFullYear()} ISMAIL</span></footer>
  </div>;
}
