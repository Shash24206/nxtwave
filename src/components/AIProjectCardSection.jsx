import React, { useState } from 'react';
import { Sparkles, CheckSquare, Square, Copy, Check, Share2, Terminal, Code2, BookOpen } from 'lucide-react';
import { generateAIProjectCard } from '../utils/storage';

export default function AIProjectCardSection({
  userCard,
  userSquad,
  userQuest,
  onToggleQuestStep,
  onUpdateCard
}) {
  const [interestInput, setInterestInput] = useState('cricket');
  const [nameInput, setNameInput] = useState('Rahul Sharma');
  const [branchInput, setBranchInput] = useState('CSE');
  const [copied, setCopied] = useState(false);
  const [bulletCopied, setBulletCopied] = useState(false);

  // If user has registered, display their card; otherwise provide generator preview
  const currentCard = userCard || generateAIProjectCard(interestInput, branchInput, nameInput);

  const handleGenerateCustom = (e) => {
    e.preventDefault();
    const newCard = generateAIProjectCard(interestInput, branchInput, nameInput);
    if (onUpdateCard) onUpdateCard(newCard);
  };

  const handleCopyCard = () => {
    const text = `⚡ My NxtWave 60-Min AI Workshop Project Pass\n\n👤 Builder: ${currentCard.studentName} (${currentCard.branch})\n🚀 Project: ${currentCard.title}\n🛠️ Stack: ${currentCard.stack.join(', ')}\n📋 Pre-Workshop Quest: 3/3 Steps Active\n\nJoin my squad for the free live build: ${window.location.origin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyBullet = () => {
    navigator.clipboard.writeText(currentCard.bullet);
    setBulletCopied(true);
    setTimeout(() => setBulletCopied(false), 2000);
  };

  const getWhatsAppStatusLink = () => {
    const text = `⚡ I just generated my personal AI project idea "${currentCard.title}" for NxtWave's free 60-min workshop!\n\nBuilding it live with my squad. Register your squad and claim your pass: ${window.location.origin}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  const questSteps = currentCard.steps || [
    { id: 1, text: "Fork Starter Repo: Download project starter boilerplate from GitHub" },
    { id: 2, text: "Configure Free API Key: Get your Google Gemini API token" },
    { id: 3, text: "Run Local Test: Execute the 10-line Python test script" }
  ];

  const completedStepsCount = Object.values(userQuest).filter(Boolean).length;
  const questPct = Math.round((completedStepsCount / 3) * 100);

  return (
    <section className="section-wrapper" id="ai-card-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <span>⚡ Growth Mechanic 4: Personal AI Card & Quest</span>
          </div>
          <h2 className="section-title">Instant Value: Your Personal AI Project Card</h2>
          <p className="section-subtitle">
            Every student gets an AI project tailored to their specific interest and branch at the moment of registration.
            Complete the 3-step pre-workshop quest to unlock your VIP verified badge.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Hologram Card Display */}
          <div className="hologram-card">
            {/* Card Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-indigo" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>
                  {userSquad ? `Squad: ${userSquad.squadName}` : 'Squad Draft Pass'}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
                  {currentCard.title}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                  ID: {currentCard.cardId || 'NXT-7821'}
                </span>
              </div>
            </div>

            {/* Builder Meta */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block' }}>BUILDER</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{currentCard.studentName || 'Final-Year Builder'}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block' }}>BRANCH</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>{currentCard.branch || 'CSE'}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block' }}>COLLEGE STATUS</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-emerald)' }}>
                  {userSquad ? userSquad.college : 'Tier-2/3 Engineering'}
                </span>
              </div>
            </div>

            {/* Problem Statement */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                The Real-World Problem Solved:
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                {currentCard.problem}
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Workshop Tech Stack:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {currentCard.stack.map((item, i) => (
                  <span key={i} className="tech-tag" style={{ color: '#67e8f9', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Bullet */}
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase' }}>
                  Placement Resume Bullet (Copy to Overleaf / Word):
                </span>
                <button
                  onClick={handleCopyBullet}
                  style={{ background: 'transparent', border: 'none', color: '#a5b4fc', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  {bulletCopied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                  <span>{bulletCopied ? 'Copied!' : 'Copy Bullet'}</span>
                </button>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#f8fafc', fontStyle: 'italic', lineHeight: 1.45 }}>
                "{currentCard.bullet}"
              </p>
            </div>

            {/* Share CTA Row */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={getWhatsAppStatusLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
              >
                <Share2 size={16} />
                <span>Post to WhatsApp Status</span>
              </a>

              <button
                onClick={handleCopyCard}
                className="btn-secondary"
                style={{ padding: '0.65rem 1rem', fontSize: '0.88rem' }}
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copied ? 'Copied Pass!' : 'Copy Pass'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Quest Checklist Side */}
          <div>
            <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem' }}>Pre-Workshop Quest Checklist</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Complete these 3 micro-steps before the live session. Raises attendance to 85%!
                  </p>
                </div>
                <div className="badge badge-emerald">
                  {completedStepsCount}/3 Completed
                </div>
              </div>

              {/* Quest Progress Bar */}
              <div className="progress-track" style={{ height: '8px', marginBottom: '1.5rem' }}>
                <div className="progress-fill" style={{ width: `${questPct}%`, background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}></div>
              </div>

              {/* Quest Steps */}
              {questSteps.map((step) => {
                const isChecked = !!userQuest[step.id];
                return (
                  <div
                    key={step.id}
                    className={`quest-item ${isChecked ? 'completed' : ''}`}
                    onClick={() => onToggleQuestStep(step.id)}
                  >
                    <div className="quest-checkbox">
                      {isChecked ? <Check size={14} /> : null}
                    </div>
                    <div style={{ flex: 1, fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 600, color: isChecked ? '#6ee7b7' : '#ffffff' }}>
                        Step {step.id}: {step.text.split(':')[0]}
                      </span>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {step.text.split(':')[1] || step.text}
                      </p>
                    </div>
                  </div>
                );
              })}

              {completedStepsCount === 3 && (
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '0.9rem', borderRadius: '10px', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={20} color="#10b981" />
                  <span style={{ fontSize: '0.85rem', color: '#6ee7b7', fontWeight: 600 }}>
                    Quest Completed! You are 100% primed for the 60-min build.
                  </span>
                </div>
              )}
            </div>

            {/* Test another interest card preview */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h5 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: '#cbd5e1' }}>
                ⚡ Test AI Card for Another Interest:
              </h5>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <select
                  className="form-select"
                  value={interestInput}
                  onChange={(e) => setInterestInput(e.target.value)}
                >
                  <option value="cricket">Cricket & Sports ML</option>
                  <option value="farming">Farming & Agri Vision</option>
                  <option value="resume">Resume Scorer & Roaster</option>
                  <option value="finance">Student FinTech AI</option>
                  <option value="music">Music Mood Generator</option>
                  <option value="gaming">Gaming Telemetry</option>
                  <option value="healthcare">Healthcare AI</option>
                </select>
              </div>
              <button
                onClick={handleGenerateCustom}
                className="btn-secondary"
                style={{ width: '100%', fontSize: '0.85rem', padding: '0.55rem' }}
              >
                <Sparkles size={14} color="#818cf8" />
                <span>Regenerate Card Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
