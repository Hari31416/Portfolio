import React, { useRef } from 'react';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import './theme6.css';
import parchmentImg from '../../assets/theme6/parchment.png';
import catalogCardImg from '../../assets/theme6/catalog-card.png';

const deweyMap = {
  'Python': '005.13',
  'FastAPI': '006.76',
  'LangChain': '006.33',
  'PyTorch': '006.32',
  'HuggingFace': '006.36',
  'Docker': '005.44',
  'Git': '005.11',
  'TensorFlow': '006.35',
  'GitHub': '005.13',
  'Bash': '005.43',
  'MongoDB': '005.74',
  'Airflow': '005.72',
  'JavaScript': '005.13',
  'Selenium': '006.78',
  'MSSQL': '005.74',
  'Azure': '004.36',
  'AWS': '004.36',
  'Redis': '005.75',
};

export default function Theme6() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="t6">
      {/* NAV */}
      <nav className="t6-nav">
        <span className="t6-nav-logo">Archive</span>
        <ul className="t6-nav-links">
          <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Prologue</a></li>
          <li><a href="#" onClick={() => scroll(expRef)}>Vol I</a></li>
          <li><a href="#" onClick={() => scroll(projRef)}>Vol II</a></li>
          <li><a href="#" onClick={() => scroll(skillsRef)}>Vol III</a></li>
        </ul>
      </nav>

      {/* HERO: The Prologue */}
      <section className="t6-hero">
        <div className="t6-wax-seal">
          H
          <div className="t6-wax-seal-inner" />
        </div>
        <div className="t6-manuscript" style={{ backgroundImage: `url(${parchmentImg})` }}>
          <span className="t6-prologue-label">The Prologue</span>
          <h1 className="t6-hero-name">Harikesh Kushwaha</h1>
          <div className="t6-hero-subtitle">
            {homeConfig.titles[0]} &amp; {homeConfig.titles[1]}
          </div>
          <p className="t6-hero-desc">
            {homeConfig.about.start}
          </p>
          <div className="t6-hero-btns">
            <a href="#" onClick={() => scroll(projRef)} className="t6-btn-ink">Read Archive</a>
            <a href="mailto:harikesh.kushwaha31416@gmail.com" className="t6-btn-quill">Request Letter</a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE: Vol I - The Curriculum */}
      <section className="t6-section" ref={expRef}>
        <div className="t6-volume-header">
          <span className="t6-volume-label">Volume I</span>
          <h2 className="t6-volume-title">The Curriculum</h2>
        </div>
        <div className="t6-ledger">
          {homeConfig.workTimeline.map((job, index) => (
            <div
              key={index}
              className="t6-ledger-entry"
              style={{ backgroundImage: `url(${parchmentImg})`, backgroundSize: 'cover' }}
            >
              <div className="t6-ledger-meta">
                <span className="t6-ledger-date">[{job.date}]</span>
                <div className="t6-ledger-company">{job.company}</div>
              </div>
              <div className="t6-ledger-details">
                <div className="t6-ledger-role">{job.title}</div>
                <p className="t6-ledger-desc">{job.description}</p>
                <div className="t6-ledger-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="t6-ledger-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS: Vol II - The Vault */}
      <section className="t6-section" ref={projRef} style={{ backgroundColor: 'var(--leather)' }}>
        <div className="t6-volume-header">
          <span className="t6-volume-label">Volume II</span>
          <h2 className="t6-volume-title" style={{ color: 'var(--parchment)' }}>The Vault</h2>
        </div>
        <div className="t6-catalog">
          {projectConfig.map((proj, i) => (
            <div
              key={i}
              className="t6-catalog-card"
              style={{ backgroundImage: `url(${catalogCardImg})`, backgroundSize: 'cover' }}
            >
              <span className="t6-catalog-callnum">REF: {300 + i}.{proj.id.slice(-2)}</span>
              <h3 className="t6-catalog-title">{proj.title}</h3>
              <p className="t6-catalog-desc">{proj.description}</p>
              <div className="t6-catalog-links">
                {proj.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={proj.target}
                      rel="noopener noreferrer"
                      className="t6-catalog-link"
                    >
                      <Icon />
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="t6-catalog-punch" />
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS: Vol III - The Lexicon */}
      <section className="t6-section" ref={skillsRef}>
        <div className="t6-volume-header">
          <span className="t6-volume-label">Volume III</span>
          <h2 className="t6-volume-title">The Lexicon</h2>
        </div>
        <div className="t6-lexicon">
          <div>
            <h3 className="t6-lexicon-group-title">Primary Codices</h3>
            <div className="t6-lexicon-list">
              {skillsConfig.mainSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="t6-lexicon-item"
                    style={{ backgroundImage: `url(${parchmentImg})`, backgroundSize: 'cover' }}
                  >
                    <span className="t6-lexicon-icon"><Icon /></span>
                    <span className="t6-lexicon-name">{skill.text}</span>
                    <span className="t6-lexicon-id">{deweyMap[skill.text] || '000.00'}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="t6-lexicon-group-title">Ancillary Texts</h3>
            <div className="t6-lexicon-list">
              {skillsConfig.complementarySkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="t6-lexicon-item"
                    style={{ backgroundImage: `url(${parchmentImg})`, backgroundSize: 'cover' }}
                  >
                    <span className="t6-lexicon-icon"><Icon /></span>
                    <span className="t6-lexicon-name">{skill.text}</span>
                    <span className="t6-lexicon-id">{deweyMap[skill.text] || '000.00'}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t6-footer">
        <div className="t6-footer-icons">
          {footerConfig.icons.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t6-footer-icon">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="t6-footer-copy">© AD MMXXV • Harikesh Kushwaha • The Bibliophile's Archive</div>
      </footer>
    </div>
  );
}
