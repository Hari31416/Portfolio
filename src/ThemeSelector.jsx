import React from 'react';
import { Link } from 'react-router-dom';
import './ThemeSelector.css';

const themes = [
  {
    id: 1,
    name: 'Spatial Brutalist 3D',
    description: 'Bold editorial brutalism — asymmetric giant type, acid-yellow accents, 3D card slabs that physically rotate on hover.',
    colors: ['#FAFAF0', '#F5FF3C', '#111111', '#FF2525'],
    mood: 'Bold · Raw · Editorial',
  },
  {
    id: 2,
    name: 'Soft Organic Bento',
    description: 'Nature-inspired bento grid layout — warm cream, earthy greens, organic shapes, and a plant-growth skill visualization.',
    colors: ['#FAF6F1', '#2D5A3D', '#C06040', '#E8D5B0'],
    mood: 'Calm · Warm · Natural',
  },
  {
    id: 3,
    name: 'Retro Futurist Neon',
    description: '1980s retrofuturism with lo-fi neon aesthetics — scanlines, electric magenta, neon cyan, experience as a retro TV guide.',
    colors: ['#0D0F2B', '#FF2D9B', '#00FFFF', '#FFBE0B'],
    mood: 'Electric · Nostalgic · Vivid',
  },
  {
    id: 4,
    name: 'Ink & Paper Risograph',
    description: 'Printed zine aesthetic with halftone textures, inky typography, and projects laid out as a real newspaper.',
    colors: ['#F5F0E8', '#1A1F3A', '#E8523A', '#F5D547'],
    mood: 'Tactile · Indie · Printed',
  },
  {
    id: 5,
    name: 'Cinematic Noir',
    description: 'Film-noir cinematic depth — warm gold accents, dramatic chapter-based sections with theatrical animated title cards.',
    colors: ['#1C1C1E', '#D4A853', '#8A9B8F', '#F0EDE6'],
    mood: 'Dramatic · Moody · Cinematic',
  },
  {
    id: 6,
    name: "The Bibliophile's Archive",
    description: 'Scholarly Dark Academia aesthetic — mahogany leathers, aged parchment, and projects styled as vintage library catalog cards.',
    colors: ['#2A1B12', '#F4EBD0', '#121212', '#7B1818'],
    mood: 'Scholarly · Tactile · Vintage',
  },
];

export default function ThemeSelector() {
  return (
    <div className="selector-root">
      <div className="selector-bg-grid" />
      <div className="selector-container">
        <header className="selector-header">
          <div className="selector-label">Harikesh Kushwaha</div>
          <h1 className="selector-title">
            Choose Your <span className="selector-title-accent">View</span>
          </h1>
          <p className="selector-subtitle">
            Five radically different portfolio experiences. Same story, different canvas.
          </p>
        </header>

        <div className="selector-grid">
          {themes.map((theme) => (
            <Link key={theme.id} to={`/${theme.id}/`} className="selector-card">
              <div className="selector-card-number">0{theme.id}</div>
              <div className="selector-swatches">
                {theme.colors.map((color, i) => (
                  <div
                    key={i}
                    className="selector-swatch"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="selector-card-body">
                <h2 className="selector-card-title">{theme.name}</h2>
                <p className="selector-card-desc">{theme.description}</p>
                <div className="selector-card-mood">{theme.mood}</div>
              </div>
              <div className="selector-card-cta">
                Enter →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
