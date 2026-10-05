import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer({ onNavigateTab }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'rgba(7, 9, 19, 0.95)', padding: '3rem 0 2rem 0', marginTop: '3rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div className="brand-icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>⚡</div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>NxtWave Squad Draft</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '420px' }}>
              "Build Your First AI Project in 60 Minutes" &bull; Free workshop for final-year engineering students across India.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <button
              onClick={() => onNavigateTab('register')}
              style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
            >
              Squad Registration
            </button>
            <button
              onClick={() => onNavigateTab('vote')}
              style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
            >
              Project Voting
            </button>
            <button
              onClick={() => onNavigateTab('colleges')}
              style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
            >
              College Wars
            </button>
            <button
              onClick={() => onNavigateTab('blueprint')}
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontWeight: 600 }}
            >
              Growth Blueprint & Pitch
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <div>
            NxtWave Growth Intern Selection &bull; Round 1 Challenge Submission
          </div>
          <div>
            Built with React & LocalStorage &bull; Zero DB Dependency &bull; Ready for Static Hosting
          </div>
        </div>
      </div>
    </footer>
  );
}
