import React from 'react';
import { Users, CheckCircle2, Lock, Gift, Zap, ShieldAlert, Award } from 'lucide-react';

export default function HeroSection({
  totalRegistrations,
  targetRegistrations,
  unlocks,
  onRegisterClick,
  onVoteClick,
  onBlueprintClick
}) {
  const pct = Math.min(100, Math.round((totalRegistrations / targetRegistrations) * 100));

  return (
    <section className="hero-wrapper">
      <div className="container">
        {/* Top Challenge Pill */}
        <div className="hero-pill-badge">
          <Zap size={14} color="#a5b4fc" />
          <span>NxtWave Growth Challenge &bull; Squad Draft Edition</span>
        </div>

        {/* Big Bold Hook Headline */}
        <h1 className="hero-title">
          Walk Into Placements With An <br />
          <span className="hero-title-highlight">AI Project On Your Resume</span>
        </h1>

        {/* Realistic Subhead */}
        <p className="hero-description">
          Build a complete, shareable AI app live in <strong>60 minutes</strong>. No prior AI skills required.
          Nobody signs up alone: join as a <strong>Squad of 3</strong> from your college, vote on what we code live, and climb the College Wars leaderboard.
        </p>

        {/* Trust Badges */}
        <div className="hero-tags-row">
          <div className="hero-feature-chip">
            <CheckCircle2 size={15} color="#10b981" />
            <span>₹0 Free Entry</span>
          </div>
          <div className="hero-feature-chip">
            <CheckCircle2 size={15} color="#10b981" />
            <span>GitHub-Ready Code</span>
          </div>
          <div className="hero-feature-chip">
            <CheckCircle2 size={15} color="#10b981" />
            <span>Official NxtWave Certificate</span>
          </div>
          <div className="hero-feature-chip">
            <CheckCircle2 size={15} color="#10b981" />
            <span>Instant AI Project Card</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <button className="btn-primary" onClick={onRegisterClick}>
            <Users size={18} />
            <span>Draft Your Squad (3 Friends)</span>
          </button>

          <button className="btn-secondary" onClick={onVoteClick}>
            <span>🗳️ Vote for Workshop Project</span>
          </button>

          <button className="btn-secondary" onClick={onBlueprintClick}>
            <Award size={16} color="#f59e0b" />
            <span>Growth Submission Blueprint</span>
          </button>
        </div>

        {/* 500-Seat Community Unlock Tracker */}
        <div className="community-bar-container">
          <div className="community-header">
            <div className="community-title">
              <span className="pulse-indicator"></span>
              <span>Community 500-Seat Unlock Goal</span>
            </div>
            <div className="community-counter">
              {totalRegistrations} / {targetRegistrations} Registered ({pct}%)
            </div>
          </div>

          <div className="progress-track" aria-label="Registration Progress">
            <div className="progress-fill" style={{ width: `${pct}%` }}></div>
          </div>

          <div className="milestones-grid">
            {unlocks.map((m, idx) => (
              <div
                key={idx}
                className={`milestone-item ${m.unlocked ? 'unlocked' : 'active-target'}`}
              >
                {m.unlocked ? (
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <Lock size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                )}
                <div>
                  <div style={{ fontWeight: 700, color: m.unlocked ? '#6ee7b7' : '#fcd34d' }}>
                    {m.target} Seats Milestone {m.unlocked ? '✓' : '🔒'}
                  </div>
                  <div style={{ color: '#cbd5e1', marginTop: '2px', lineHeight: 1.3 }}>
                    {m.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
