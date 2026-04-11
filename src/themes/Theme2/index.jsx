import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import './theme2.css';

const skillLevels = [90, 85, 88, 82, 80, 78];

export default function Theme2() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="t2">
      {/* Decorative blobs */}
      <div className="t2-blob t2-blob-1" />
      <div className="t2-blob t2-blob-2" />

      {/* NAV */}
      <nav className="t2-nav">
        <span className="t2-nav-logo">Harikesh K.</span>
        <ul className="t2-nav-links">
          <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
          <li><a href="#" onClick={() => scroll(expRef)}>Experience</a></li>
          <li><a href="#" onClick={() => scroll(projRef)}>Projects</a></li>
          <li><a href="#" onClick={() => scroll(skillsRef)}>Skills</a></li>
        </ul>
        <Link to="/" className="t2-back">← All Themes</Link>
      </nav>

      {/* HERO */}
      <section className="t2-hero">
        <div className="t2-hero-inner">
          <div className="t2-eyebrow">
            <span className="t2-eyebrow-dot" />
            AI Engineer · IIT Delhi Alumni
          </div>
          <div className="t2-hero-grid">
            <div>
              <h1 className="t2-hero-heading">
                Building{' '}
                <span className="t2-hero-accent">intelligent</span>{' '}
                systems that matter
              </h1>
              <p className="t2-hero-desc">{homeConfig.about.start}</p>
              <div className="t2-role-pills">
                {homeConfig.titles.map((t, i) => (
                  <span key={i} className="t2-role-pill">{t}</span>
                ))}
              </div>
              <div className="t2-hero-btns">
                <a href="#" onClick={() => scroll(projRef)} className="t2-btn-primary">Explore Work</a>
                <a href="mailto:harikesh.kushwaha31416@gmail.com" className="t2-btn-secondary">Say Hello</a>
              </div>
            </div>
            <div className="t2-hero-card">
              <div className="t2-badge">
                <span className="t2-badge-num">2+</span>
                <div className="t2-badge-label">Years of Experience</div>
              </div>
              <div className="t2-badge-pair">
                <div className="t2-badge-sm">
                  <span className="t2-badge-num">{projectConfig.length}</span>
                  <div className="t2-badge-label" style={{ fontSize: '0.65rem', color: 'var(--terra)' }}>Projects</div>
                </div>
                <div className="t2-badge-sm">
                  <span className="t2-badge-num">3</span>
                  <div className="t2-badge-label" style={{ fontSize: '0.65rem', color: 'var(--terra)' }}>Companies</div>
                </div>
              </div>
              <div className="t2-badge t2-badge-terra">
                <span className="t2-badge-num">{skillsConfig.mainSkills.length + skillsConfig.complementarySkills.length}</span>
                <div className="t2-badge-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="t2-section" ref={expRef} style={{ background: 'var(--bg2)' }}>
        <div className="t2-section-inner">
          <div className="t2-section-tag">Work Journey</div>
          <h2 className="t2-section-title">Where I've Grown</h2>
          <div className="t2-exp-timeline">
            {homeConfig.workTimeline.map((job) => (
              <div key={job.id} className="t2-exp-item">
                <div className="t2-exp-header">
                  <span className="t2-exp-company">{job.company}</span>
                  <span className="t2-exp-date">{job.date}</span>
                </div>
                <div className="t2-exp-role">{job.title}</div>
                <p className="t2-exp-desc">{job.description}</p>
                <div className="t2-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="t2-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="t2-section" ref={projRef}>
        <div className="t2-section-inner">
          <div className="t2-section-tag">Selected Work</div>
          <h2 className="t2-section-title">Projects I'm Proud Of</h2>
          <div className="t2-bento">
            {projectConfig.map((proj) => (
              <div key={proj.id} className="t2-bento-card">
                {proj.image && (
                  <img src={proj.image} alt={proj.title} className="t2-bento-img" />
                )}
                <div className="t2-bento-body">
                  <h3 className="t2-bento-title">{proj.title}</h3>
                  <p className="t2-bento-desc">{proj.description}</p>
                  <div className="t2-bento-links">
                    {proj.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target={proj.target}
                          rel="noopener noreferrer"
                          className="t2-bento-link"
                        >
                          <Icon />
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="t2-section" ref={skillsRef} style={{ background: 'var(--bg2)' }}>
        <div className="t2-section-inner">
          <div className="t2-section-tag">Technical Toolkit</div>
          <h2 className="t2-section-title">Skills & Technologies</h2>
          <div className="t2-skills-grid">
            <div>
              <div className="t2-skills-label">Core Stack</div>
              <div className="t2-skill-bars">
                {skillsConfig.mainSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t2-skill-bar-item">
                      <div className="t2-skill-bar-top">
                        <span className="t2-skill-bar-name">
                          <span className="t2-skill-bar-icon"><Icon /></span>
                          {skill.text}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{skillLevels[i] || 80}%</span>
                      </div>
                      <div className="t2-skill-bar-track">
                        <div
                          className="t2-skill-bar-fill"
                          style={{ width: `${skillLevels[i] || 80}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="t2-skills-label">Complementary</div>
              <div className="t2-comp-grid">
                {skillsConfig.complementarySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t2-comp-item">
                      <span className="t2-comp-icon"><Icon /></span>
                      <span className="t2-comp-label">{skill.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t2-footer">
        <div className="t2-footer-inner">
          <div>
            <div className="t2-footer-name">Harikesh Kushwaha</div>
            <div className="t2-footer-tagline">AI Engineer · Builder · Curious mind</div>
          </div>
          <div className="t2-footer-icons">
            {footerConfig.icons.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t2-footer-icon">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
