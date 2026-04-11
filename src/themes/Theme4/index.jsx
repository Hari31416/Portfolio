import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { homeConfig, skillsConfig, projectConfig, footerConfig } from '../../data/portfolio.jsx';
import './theme4.css';

export default function Theme4() {
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const scroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="t4">
      {/* NAV */}
      <nav className="t4-nav">
        <span className="t4-nav-masthead">The Harikesh Dispatch</span>
        <ul className="t4-nav-links">
          <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Front Page</a></li>
          <li><a href="#" onClick={() => scroll(expRef)}>Careers</a></li>
          <li><a href="#" onClick={() => scroll(projRef)}>Features</a></li>
          <li><a href="#" onClick={() => scroll(skillsRef)}>Technology</a></li>
        </ul>
        <Link to="/" className="t4-back">← All Themes</Link>
      </nav>

      {/* HERO / FRONT PAGE */}
      <section className="t4-hero">
        <div className="t4-hero-masthead">
          <div className="t4-issue-line">
            <span>Issue No. 31416</span>
            <span>Established 2023</span>
            <span>{dateStr}</span>
          </div>
          <div className="t4-issue-divider" />
          <h1 className="t4-hero-title">
            Harikesh
            <span className="t4-hero-title-accent">Kushwaha</span>
          </h1>
          <div className="t4-issue-divider-bottom" />
        </div>

        <div className="t4-hero-columns">
          <div className="t4-hero-col-left">
            <div className="t4-overline">Profile</div>
            <div className="t4-byline">
              &ldquo;The Engineer Who Thinks in Models and Ships in Production&rdquo;
            </div>
            {homeConfig.titles.map((t, i) => (
              <div key={i} className="t4-role-box">
                <div className="t4-role-box-label">Role 0{i + 1}</div>
                <div className="t4-role-box-val">{t}</div>
              </div>
            ))}
          </div>

          <div className="t4-col-divider" />

          <div className="t4-hero-col-center">
            <p>{homeConfig.about.start}</p>
            <div className="t4-pull-quote">
              &ldquo;Turning innovative ideas into production-ready AI solutions used across government and enterprise ecosystems.&rdquo;
            </div>
            <p>{homeConfig.about.exit}</p>
            <div className="t4-cta-strip">
              <a href="#" onClick={() => scroll(projRef)} className="t4-btn t4-btn-fill">Read Features</a>
              <a href="mailto:harikesh.kushwaha31416@gmail.com" className="t4-btn">Write In</a>
            </div>
          </div>

          <div className="t4-col-divider" />

          <div className="t4-hero-col-right">
            <div className="t4-overline">At a Glance</div>
            <div className="t4-role-box">
              <div className="t4-role-box-label">Current Post</div>
              <div className="t4-role-box-val">AI Engineer, KPMG</div>
            </div>
            <div className="t4-role-box">
              <div className="t4-role-box-label">Education</div>
              <div className="t4-role-box-val">B.Tech, IIT Delhi</div>
            </div>
            <div className="t4-role-box">
              <div className="t4-role-box-label">Tenure</div>
              <div className="t4-role-box-val">2+ Years Industry</div>
            </div>
            <div className="t4-role-box">
              <div className="t4-role-box-label">Projects Shipped</div>
              <div className="t4-role-box-val">{projectConfig.length}+ Open-Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="t4-section" ref={expRef} style={{ background: 'var(--paper2)' }}>
        <div className="t4-section-header">
          <span className="t4-section-issue">§ Careers Section</span>
          <h2 className="t4-section-title">Work History</h2>
        </div>
        <div className="t4-exp-columns">
          {homeConfig.workTimeline.map((job, i) => (
            <div key={job.id} className="t4-exp-article">
              <div className="t4-exp-art-label">Position 0{i + 1}</div>
              <span className="t4-exp-art-date">{job.date}</span>
              <div className="t4-exp-art-company">{job.company}</div>
              <div className="t4-exp-art-role">{job.title}</div>
              <p className="t4-exp-art-desc">{job.description}</p>
              <div className="t4-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="t4-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="t4-section" ref={projRef}>
        <div className="t4-section-header">
          <span className="t4-section-issue">§ Features</span>
          <h2 className="t4-section-title">Selected Projects</h2>
        </div>
        <div className="t4-newspaper">
          {projectConfig.map((proj) => (
            <div key={proj.id} className="t4-news-card">
              {proj.image && (
                <img src={proj.image} alt={proj.title} className="t4-news-img" />
              )}
              <div className="t4-news-body">
                <div className="t4-news-kicker">AI / Engineering / Research</div>
                <h3 className="t4-news-headline">{proj.title}</h3>
                <p className="t4-news-desc">{proj.description}</p>
                <div className="t4-news-links">
                  {proj.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target={proj.target}
                        rel="noopener noreferrer"
                        className="t4-news-link"
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
      <section className="t4-section" ref={skillsRef} style={{ background: 'var(--paper2)' }}>
        <div className="t4-section-header">
          <span className="t4-section-issue">§ Technology Desk</span>
          <h2 className="t4-section-title">Technical Skills</h2>
        </div>
        <div className="t4-skills-columns">
          <div>
            <div className="t4-skills-heading">Core Expertise</div>
            <div className="t4-skill-rows">
              {skillsConfig.mainSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="t4-skill-row">
                    <span className="t4-skill-icon"><Icon /></span>
                    <span className="t4-skill-name">{skill.text}</span>
                    <span className="t4-skill-dash">★★★★☆</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="t4-skills-heading">Extended Toolbox</div>
            <div className="t4-skill-rows">
              {skillsConfig.complementarySkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="t4-skill-row">
                    <span className="t4-skill-icon"><Icon /></span>
                    <span className="t4-skill-name">{skill.text}</span>
                    <span className="t4-skill-dash">Proficient</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t4-footer">
        <div className="t4-footer-inner">
          <div>
            <div className="t4-footer-name">The Dispatch</div>
          </div>
          <div className="t4-footer-copy">
            © 2025 Harikesh Kushwaha · All Rights Reserved
          </div>
          <div className="t4-footer-icons">
            {footerConfig.icons.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="t4-footer-icon">
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
