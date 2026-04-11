import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import './theme3.css';

const compSkillLevels = [72, 65, 68, 70, 75, 60, 63, 58, 66, 64, 70, 62];

export default function Theme3() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="t3">
      <div className="t3-grid-bg" />
      <div className="t3-content">

        {/* NAV */}
        <nav className="t3-nav">
          <span className="t3-nav-logo">HK_SYSTEM</span>
          <ul className="t3-nav-links">
            <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>// home</a></li>
            <li><a href="#" onClick={() => scroll(expRef)}>// exp</a></li>
            <li><a href="#" onClick={() => scroll(projRef)}>// projects</a></li>
            <li><a href="#" onClick={() => scroll(skillsRef)}>// skills</a></li>
          </ul>
          <Link to="/" className="t3-back">◀ all themes</Link>
        </nav>

        {/* HERO */}
        <section className="t3-hero">
          <div className="t3-hero-channel">
            CHANNEL 31416 · AI ENGINEERING · TRANSMISSION LIVE
          </div>
          <h1 className="t3-hero-name">
            <div className="t3-hero-name-line1">HARIKESH</div>
            <div className="t3-hero-name-line2">KUSHWAHA</div>
          </h1>
          <div className="t3-hero-roles">
            {homeConfig.titles.map((t, i) => (
              <span key={i} className="t3-role-badge">{t}</span>
            ))}
          </div>
          <p className="t3-hero-desc">{homeConfig.about.start}</p>
          <div className="t3-hero-btns">
            <a href="#" onClick={() => scroll(projRef)} className="t3-btn-primary">ENTER ARCHIVE</a>
            <a href="mailto:harikesh.kushwaha31416@gmail.com" className="t3-btn-secondary">OPEN CHANNEL</a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="t3-section" ref={expRef} style={{ background: 'var(--bg3)' }}>
          <div className="t3-section-header">
            <span className="t3-section-ch">EPISODE GUIDE</span>
            <h2 className="t3-section-title">Work Experience</h2>
            <div className="t3-section-line" />
          </div>
          <div className="t3-tv-guide">
            {homeConfig.workTimeline.map((job, i) => (
              <div key={job.id} className="t3-tv-card">
                <div className="t3-tv-card-ch">CH.0{i + 1} · NOW BROADCASTING</div>
                <div className="t3-tv-company">{job.company}</div>
                <div className="t3-tv-role">{job.title}</div>
                <p className="t3-tv-desc">{job.description}</p>
                <div className="t3-tv-date">{job.date}</div>
                <div className="t3-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="t3-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="t3-section" ref={projRef}>
          <div className="t3-section-header">
            <span className="t3-section-ch">ARCHIVE_001</span>
            <h2 className="t3-section-title">Project Files</h2>
            <div className="t3-section-line" />
          </div>
          <div className="t3-proj-grid">
            {projectConfig.map((proj) => (
              <div key={proj.id} className="t3-proj-card">
                <div className="t3-proj-img-wrap">
                  {proj.image && (
                    <img src={proj.image} alt={proj.title} className="t3-proj-img" />
                  )}
                  <div className="t3-proj-scan" />
                </div>
                <div className="t3-proj-body">
                  <h3 className="t3-proj-title">{proj.title}</h3>
                  <p className="t3-proj-desc">{proj.description}</p>
                  <div className="t3-proj-links">
                    {proj.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target={proj.target}
                          rel="noopener noreferrer"
                          className="t3-proj-link"
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
        </section>

        {/* SKILLS */}
        <section className="t3-section" ref={skillsRef} style={{ background: 'var(--bg3)' }}>
          <div className="t3-section-header">
            <span className="t3-section-ch">SYSTEM_SPECS</span>
            <h2 className="t3-section-title">Tech Loadout</h2>
            <div className="t3-section-line" />
          </div>
          <div className="t3-skills-wrap">
            <div>
              <div className="t3-skills-heading">// Core Modules</div>
              <div className="t3-skill-hexgrid">
                {skillsConfig.mainSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t3-skill-hex">
                      <span className="t3-skill-hex-icon"><Icon /></span>
                      <span className="t3-skill-hex-label">{skill.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="t3-skills-heading">// Extended Stack</div>
              <div className="t3-skill-list">
                {skillsConfig.complementarySkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="t3-skill-row">
                      <span className="t3-skill-row-icon"><Icon /></span>
                      <span className="t3-skill-row-name">{skill.text}</span>
                      <div className="t3-skill-row-bar">
                        <div
                          className="t3-skill-row-fill"
                          style={{ width: `${compSkillLevels[i] || 65}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="t3-footer">
          <div>
            <div className="t3-footer-logo">HK // 31416</div>
            <div className="t3-footer-sub">AI ENGINEER · SYSTEM ONLINE · 2025</div>
          </div>
          <div className="t3-footer-icons">
            {footerConfig.icons.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t3-footer-icon">
                  <Icon />
                </a>
              );
            })}
          </div>
          <div className="t3-footer-copy">© 2025 HARIKESH KUSHWAHA</div>
        </footer>

      </div>
    </div>
  );
}
