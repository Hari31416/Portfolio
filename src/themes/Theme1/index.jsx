import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaKaggle, FaGoodreadsG } from 'react-icons/fa';
import './theme1.css';

const socialIcons = {
  'footer-0': AiFillGithub,
  'footer-1': FaLinkedinIn,
  'footer-2': FaKaggle,
  'footer-3': FaGoodreadsG,
};

export default function Theme1() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);

  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="t1">
      {/* NAV */}
      <nav className="t1-nav">
        <span className="t1-nav-logo">HK</span>
        <ul className="t1-nav-links">
          <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
          <li><a href="#" onClick={() => scroll(expRef)}>Experience</a></li>
          <li><a href="#" onClick={() => scroll(projRef)}>Projects</a></li>
          <li><a href="#" onClick={() => scroll(skillsRef)}>Skills</a></li>
        </ul>
        <Link to="/" className="t1-back">← All Themes</Link>
      </nav>

      {/* HERO */}
      <section className="t1-hero">
        <div className="t1-hero-left">
          <div className="t1-hero-tag">AI Engineer · IIT Delhi</div>
          <h1 className="t1-hero-name">
            Hari<span className="t1-hero-name-accent">kesh</span>
            <br />Kush<span className="t1-hero-name-accent">waha</span>
          </h1>
          <div className="t1-hero-title-line">
            {homeConfig.titles.map((t, i) => (
              <span key={i}>{t}</span>
            )).slice(0, 1)}
          </div>
          <p className="t1-hero-desc">{homeConfig.about.start}</p>
          <div className="t1-btn-group">
            <a href="#" onClick={() => scroll(projRef)} className="t1-btn t1-btn-primary">View Work</a>
            <a
              href="mailto:harikesh.kushwaha31416@gmail.com"
              className="t1-btn t1-btn-secondary"
            >Contact</a>
          </div>
        </div>
        <div className="t1-hero-right">
          <div className="t1-stat-block">
            <div className="t1-stat">
              <div className="t1-stat-num">2+</div>
              <div className="t1-stat-label">Years Experience</div>
            </div>
            <div className="t1-stat">
              <div className="t1-stat-num">{projectConfig.length}</div>
              <div className="t1-stat-label">Projects</div>
            </div>
            <div className="t1-stat">
              <div className="t1-stat-num">3</div>
              <div className="t1-stat-label">Companies</div>
            </div>
            <div className="t1-stat">
              <div className="t1-stat-num">∞</div>
              <div className="t1-stat-label">Curiosity</div>
            </div>
          </div>
          <div className="t1-corner-text">
            <div>KPMG → AI Engineer</div>
            <div>Paisabazaar → Senior Analyst</div>
            <div>Nuvoretail → Data Scientist</div>
            <div>IIT Delhi → B.Tech</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="t1-section" ref={expRef}>
        <div className="t1-section-header">
          <span className="t1-section-num">01 /</span>
          <h2 className="t1-section-title">Work Experience</h2>
        </div>
        <div className="t1-exp-list">
          {homeConfig.workTimeline.map((job) => (
            <div key={job.id} className="t1-exp-item">
              <div className="t1-exp-date">
                <span>{job.date}</span>
                <span className="t1-exp-company">{job.company}</span>
              </div>
              <div className="t1-exp-body">
                <div className="t1-exp-role">{job.title}</div>
                <p className="t1-exp-desc">{job.description}</p>
                <div className="t1-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="t1-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="t1-section" ref={projRef}>
        <div className="t1-section-header">
          <span className="t1-section-num">02 /</span>
          <h2 className="t1-section-title">Selected Projects</h2>
        </div>
        <div className="t1-proj-grid">
          {projectConfig.slice(0, 9).map((proj) => (
            <div key={proj.id} className="t1-proj-card">
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="t1-proj-img"
                />
              )}
              <div className="t1-proj-body">
                <h3 className="t1-proj-title">{proj.title}</h3>
                <p className="t1-proj-desc">{proj.description}</p>
                <div className="t1-proj-links">
                  {proj.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target={proj.target}
                        rel="noopener noreferrer"
                        className="t1-proj-link"
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
      <section className="t1-section" ref={skillsRef}>
        <div className="t1-section-header">
          <span className="t1-section-num">03 /</span>
          <h2 className="t1-section-title">Skills & Tools</h2>
        </div>
        <div className="t1-skills-wrap">
          <div>
            <div className="t1-skills-heading">Core Stack</div>
            <div className="t1-skill-grid">
              {skillsConfig.mainSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="t1-skill-item">
                    <span className="t1-skill-icon"><Icon /></span>
                    <span className="t1-skill-label">{skill.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="t1-skills-heading">Complementary</div>
            <div className="t1-skill-grid">
              {skillsConfig.complementarySkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="t1-skill-item">
                    <span className="t1-skill-icon"><Icon /></span>
                    <span className="t1-skill-label">{skill.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t1-footer">
        <div className="t1-footer-name">Harikesh Kushwaha</div>
        <div className="t1-footer-icons">
          {footerConfig.icons.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t1-footer-icon">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="t1-footer-copy">© 2025 — All rights reserved</div>
      </footer>
    </div>
  );
}
