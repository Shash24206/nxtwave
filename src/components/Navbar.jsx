import React from 'react';
import { Sparkles, Users, Award, Vote, FileCode, BarChart3, RefreshCw, Bot } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  totalRegistrations,
  targetRegistrations,
  onOpenEvaluator,
  onResetData
}) {
  const remaining = Math.max(0, targetRegistrations - totalRegistrations);

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <div className="navbar-content">
          {/* Brand */}
          <div className="brand-group" onClick={() => setActiveTab('register')} style={{ cursor: 'pointer' }}>
            <div className="brand-icon">⚡</div>
            <div className="brand-titles">
              <span className="brand-name">NxtWave AI Workshop</span>
              <span className="brand-sub">Squad Draft &bull; 60 Min Build</span>
            </div>
          </div>

          {/* Navigation Pills */}
          <nav className="nav-tabs" aria-label="Main Navigation">
            <button
              className={`nav-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              <Users size={15} />
              <span>Squad Draft</span>
            </button>

            <button
              className={`nav-tab-btn ${activeTab === 'vote' ? 'active' : ''}`}
              onClick={() => setActiveTab('vote')}
            >
              <Vote size={15} />
              <span>Vote to Build</span>
            </button>

            <button
              className={`nav-tab-btn ${activeTab === 'colleges' ? 'active' : ''}`}
              onClick={() => setActiveTab('colleges')}
            >
              <Award size={15} />
              <span>College Wars</span>
            </button>

            <button
              className={`nav-tab-btn ${activeTab === 'card' ? 'active' : ''}`}
              onClick={() => setActiveTab('card')}
            >
              <Sparkles size={15} />
              <span>AI Project Card</span>
            </button>

            <button
              className={`nav-tab-btn ${activeTab === 'referrals' ? 'active' : ''}`}
              onClick={() => setActiveTab('referrals')}
            >
              <FileCode size={15} />
              <span>Referral Hub</span>
            </button>

            <button
              className={`nav-tab-btn ${activeTab === 'blueprint' ? 'active' : ''}`}
              onClick={() => setActiveTab('blueprint')}
            >
              <BarChart3 size={15} />
              <span>Growth Blueprint</span>
            </button>
          </nav>

          {/* Actions & Live Status */}
          <div className="nav-actions">
            <div className="badge badge-emerald" title="Live seats remaining">
              <span className="pulse-indicator"></span>
              <span>{remaining} Spots Left</span>
            </div>

            <button
              onClick={onOpenEvaluator}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
              title="Test the bonus AI Project Evaluator"
            >
              <Bot size={15} color="#06b6d4" />
              <span>AI Evaluator</span>
            </button>

            <button
              onClick={onResetData}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.8rem' }}
              title="Reset sample data in LocalStorage"
            >
              <RefreshCw size={13} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
