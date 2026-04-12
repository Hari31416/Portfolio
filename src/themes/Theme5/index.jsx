import React, { useRef } from 'react';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import './theme5.css';

export default function Theme5() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="t5">
      {/* NAV */}
      <nav className="t5-nav">
        <span className="t5-nav-logo"></span>
        <ul className="t5-nav-links">
          <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Prologue</a></li>
          <li><a href="#" onClick={() => scroll(expRef)}>Chapter I</a></li>
          <li><a href="#" onClick={() => scroll(projRef)}>Chapter II</a></li>
          <li><a href="#" onClick={() => scroll(skillsRef)}>Chapter III</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="t5-hero">
        <div className="t5-hero-chapter">Prologue</div>
        <div className="t5-hero-rule" />
        <h1 className="t5-hero-name">Harikesh<br />Kushwaha</h1>
        <div className="t5-hero-subtitle">
          {homeConfig.titles[0]} · {homeConfig.titles[1]}
        </div>
        <div className="t5-hero-rule-bottom" />
        <p className="t5-hero-desc">{homeConfig.about.start}</p>
        <div className="t5-hero-btns">
          <a href="#" onClick={() => scroll(projRef)} className="t5-btn-primary">View the Work</a>
          <a href="mailto:harikeshkumar0926@gmail.com" className="t5-btn-secondary">Make Contact</a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="t5-chapter t5-chapter-alt" ref={expRef}>
        <div className="t5-chapter-inner">
          <div className="t5-chapter-title-card">
            <div className="t5-chapter-num">I</div>
            <h2 className="t5-chapter-heading">Experience</h2>
            <div className="t5-chapter-rule">
              <div className="t5-chapter-rule-line" />
              <div className="t5-chapter-rule-diamond" />
              <div className="t5-chapter-rule-line" />
            </div>
          </div>
          <div className="t5-exp-list">
            {homeConfig.workTimeline.map((job) => (
              <div key={job.id} className="t5-exp-card">
                <div className="t5-exp-left">
                  <span className="t5-exp-date">{job.date}</span>
                  <span className="t5-exp-company">{job.company}</span>
                </div>
                <div className="t5-exp-right">
                  <div className="t5-exp-role">{job.title}</div>
                  <p className="t5-exp-desc">{job.description}</p>
                  <div className="t5-tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="t5-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="t5-chapter" ref={projRef}>
        <div className="t5-chapter-inner">
          <div className="t5-chapter-title-card">
            <div className="t5-chapter-num">II</div>
            <h2 className="t5-chapter-heading">Projects</h2>
            <div className="t5-chapter-rule">
              <div className="t5-chapter-rule-line" />
              <div className="t5-chapter-rule-diamond" />
              <div className="t5-chapter-rule-line" />
            </div>
          </div>
          <div className="t5-proj-grid">
            {projectConfig.map((proj) => (
              <div key={proj.id} className="t5-proj-card">
                <div className="t5-proj-img-wrap">
                  {proj.image && (
                    <img src={proj.image} alt={proj.title} className="t5-proj-img" />
                  )}
                  <div className="t5-proj-img-overlay" />
                </div>
                <div className="t5-proj-body">
                  <h3 className="t5-proj-title">{proj.title}</h3>
                  <p className="t5-proj-desc">{proj.description}</p>
                  <div className="t5-proj-links">
                    {proj.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target={proj.target}
                          rel="noopener noreferrer"
                          className="t5-proj-link"
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
      <section className="t5-chapter t5-chapter-alt" ref={skillsRef}>
        <div className="t5-chapter-inner">
          <div className="t5-chapter-title-card">
            <div className="t5-chapter-num">III</div>
            <h2 className="t5-chapter-heading">Skills</h2>
            <div className="t5-chapter-rule">
              <div className="t5-chapter-rule-line" />
              <div className="t5-chapter-rule-diamond" />
              <div className="t5-chapter-rule-line" />
            </div>
          </div>
          <div className="t5-skills-layout">
            <div>
              <div className="t5-skills-group-title">Core Expertise</div>
              <div className="t5-skill-items">
                {skillsConfig.mainSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t5-skill-item">
                      <span className="t5-skill-icon"><Icon /></span>
                      <span className="t5-skill-name">{skill.text}</span>
                      <span className="t5-skill-ornament">✦</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="t5-skills-group-title">Extended Arsenal</div>
              <div className="t5-skill-items">
                {skillsConfig.complementarySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t5-skill-item">
                      <span className="t5-skill-icon"><Icon /></span>
                      <span className="t5-skill-name">{skill.text}</span>
                      <span className="t5-skill-ornament">◇</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t5-footer">
        <div className="t5-footer-rule">
          <div className="t5-footer-rule-line" />
          <div className="t5-footer-rule-diamond" />
          <div className="t5-footer-rule-line" />
        </div>
        <div className="t5-footer-name">Harikesh Kushwaha</div>
        <div className="t5-footer-tagline">AI Engineer · Builder of Intelligent Systems</div>
        <div className="t5-footer-icons">
          {footerConfig.icons.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t5-footer-icon">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="t5-footer-copy">© 2025 · All Rights Reserved · Harikesh Kushwaha</div>
      </footer>
    </div>
  );
}
