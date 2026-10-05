import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Users, UserPlus, Share2, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { generateAIProjectCard } from '../utils/storage';

const COLLEGE_OPTIONS = [
  "JNTU Hyderabad (JNTUH)",
  "Anna University (CEG Campus)",
  "Dr. A.P.J. Abdul Kalam Technical Univ (AKTU)",
  "Visvesvaraya Tech University (VTU)",
  "SRM Institute of Science & Technology",
  "Chandigarh University (CU)",
  "Osmania University (UCE)",
  "Other College (Enter below)"
];

const INTEREST_OPTIONS = [
  { value: "cricket", label: "🏏 Cricket & Sports ML (IPL Win Predictor)" },
  { value: "farming", label: "🌱 Agriculture & Drone Vision (Crop Disease)" },
  { value: "resume", label: "📄 Placement Resume Scorer & Roaster" },
  { value: "finance", label: "💰 Student FinTech & Micro-Budget AI" },
  { value: "music", label: "🎵 Music & Mood Feature Synthesizer" },
  { value: "gaming", label: "🎮 Gaming Telemetry & Clutch Predictor" },
  { value: "healthcare", label: "🏥 Healthcare & Clinical Report Simplifier" }
];

export default function SquadRegisterSection({
  onRegisterSuccess,
  userSquad,
  onNavigateTab
}) {
  const [mode, setMode] = useState('squad'); // 'squad' or 'solo'

  // Form Fields
  const [squadName, setSquadName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [college, setCollege] = useState(COLLEGE_OPTIONS[0]);
  const [customCollege, setCustomCollege] = useState('');
  const [leadBranch, setLeadBranch] = useState('CSE');
  const [friend1Name, setFriend1Name] = useState('');
  const [friend2Name, setFriend2Name] = useState('');
  const [interest, setInterest] = useState('resume');
  const [referralCode, setReferralCode] = useState('');

  // Submitted confirmation state
  const [registeredSquad, setRegisteredSquad] = useState(userSquad);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      alert("Please provide your name and WhatsApp number!");
      return;
    }

    const finalCollege = college === "Other College (Enter below)" ? (customCollege || "Independent Tech College") : college;
    const finalSquadName = squadName.trim() || `${leadName.split(' ')[0]}'s AI Trio`;

    let members = [];
    let countAdded = 0;

    if (mode === 'squad') {
      members = [
        { name: leadName, branch: leadBranch, isLead: true },
        { name: friend1Name || 'Squad Mate 1', branch: 'ECE/IT', isLead: false },
        { name: friend2Name || 'Squad Mate 2', branch: 'CSE', isLead: false }
      ];
      countAdded = 3;
    } else {
      members = [
        { name: leadName, branch: leadBranch, isLead: true },
        { name: 'Auto-Matched (Sneha R.)', branch: 'ECE', isLead: false },
        { name: 'Auto-Matched (Karthik V.)', branch: 'IT', isLead: false }
      ];
      countAdded = 1; // Solo registrant counted
    }

    const uniqueCode = `SQUAD-${leadName.split(' ')[0].toUpperCase()}-${Math.floor(10 + Math.random() * 89)}`;
    const newSquad = {
      id: `SQ-${Date.now().toString().slice(-4)}`,
      squadName: finalSquadName,
      college: finalCollege,
      leadPhone,
      members,
      voteChoice: null,
      status: mode === 'squad' ? 'Confirmed (3/3)' : 'Auto-Matched (3/3)',
      referralCode: uniqueCode,
      interest
    };

    // Generate instant personalized AI project card
    const aiCard = generateAIProjectCard(interest, leadBranch, leadName);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    setRegisteredSquad(newSquad);
    onRegisterSuccess(newSquad, countAdded, aiCard, referralCode.trim());
  };

  const getWhatsAppShareLink = () => {
    if (!registeredSquad) return '#';
    const text = `🔥 Hey! I just registered our 3-person squad "${registeredSquad.squadName}" for NxtWave's free live workshop: "Build Your First AI Project in 60 Mins".\n\nNo prior AI skills needed + we get verified certificates & placement-ready GitHub code!\n\nJoin our college squad here using my code ${registeredSquad.referralCode}: ${window.location.origin}?ref=${registeredSquad.referralCode}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section-wrapper" id="register-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <span>⚡ Growth Mechanic 1: Squad Draft</span>
          </div>
          <h2 className="section-title">Nobody Signs Up Alone</h2>
          <p className="section-subtitle">
            Students who build with friends achieve <strong>3.8x higher workshop attendance</strong>.
            Draft your 3-person college squad, or join solo and get instantly auto-matched with complementary branches.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Registration Form / Status Card */}
          <div className="glass-panel reg-card glass-panel-glow">
            {registeredSquad ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid #10b981',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <Check size={32} />
                </div>

                <div className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                  {registeredSquad.status}
                </div>

                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                  Squad Draft Confirmed!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Welcome to <strong>{registeredSquad.squadName}</strong> representing <strong>{registeredSquad.college}</strong>.
                </p>

                {/* Squad Members Card */}
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.2rem', borderRadius: '14px', textAlign: 'left', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Squad Roster (3 Members)
                  </div>
                  {registeredSquad.members.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{m.name}</span>
                        {m.isLead && <span className="badge badge-indigo" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>Captain</span>}
                      </div>
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{m.branch}</span>
                    </div>
                  ))}
                </div>

                {/* Referral Code Box */}
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px dashed var(--accent-primary)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#a5b4fc', marginBottom: '0.35rem' }}>
                    Your Squad Referral Link & Code
                  </div>
                  <div className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    {registeredSquad.referralCode}
                  </div>
                </div>

                {/* Viral Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={getWhatsAppShareLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <Share2 size={18} />
                    <span>Send Invite to WhatsApp Group</span>
                  </a>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      className="btn-primary"
                      style={{ flex: 1 }}
                      onClick={() => onNavigateTab('card')}
                    >
                      <Sparkles size={16} />
                      <span>View My AI Card</span>
                    </button>

                    <button
                      className="btn-secondary"
                      style={{ flex: 1 }}
                      onClick={() => onNavigateTab('vote')}
                    >
                      <span>🗳️ Cast Vote</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-tabs">
                  <button
                    type="button"
                    className={`form-tab-btn ${mode === 'squad' ? 'active' : ''}`}
                    onClick={() => setMode('squad')}
                  >
                    <Users size={16} />
                    <span>Squad of 3 (Recommended)</span>
                  </button>
                  <button
                    type="button"
                    className={`form-tab-btn ${mode === 'solo' ? 'active' : ''}`}
                    onClick={() => setMode('solo')}
                  >
                    <UserPlus size={16} />
                    <span>Solo Draft (Auto-Match)</span>
                  </button>
                </div>

                {mode === 'squad' && (
                  <div className="form-group">
                    <label className="form-label">Squad Team Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. ByteForce Trio, Neural Ninjas"
                      value={squadName}
                      onChange={(e) => setSquadName(e.target.value)}
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">
                    {mode === 'squad' ? 'Captain / Lead Name *' : 'Your Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">WhatsApp Number (For Workshop Link & Reminders) *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. +91 98765 43210"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Engineering College *</label>
                  <select
                    className="form-select"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  >
                    {COLLEGE_OPTIONS.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {college === "Other College (Enter below)" && (
                  <div className="form-group">
                    <label className="form-label">Specify Your College Name</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. G. Pulla Reddy Engineering College"
                      value={customCollege}
                      onChange={(e) => setCustomCollege(e.target.value)}
                    />
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label">Your Branch</label>
                    <select
                      className="form-select"
                      value={leadBranch}
                      onChange={(e) => setLeadBranch(e.target.value)}
                    >
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="AI & DS">AI & DS</option>
                      <option value="EEE">EEE</option>
                      <option value="Mechanical">Mechanical</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Interest</label>
                    <select
                      className="form-select"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      {INTEREST_OPTIONS.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {mode === 'squad' && (
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', marginBottom: '1.25rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#a5b4fc', marginBottom: '0.5rem' }}>
                      Invite 2 Friends (Squad Mates)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Friend 1 Name"
                        value={friend1Name}
                        onChange={(e) => setFriend1Name(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Friend 2 Name"
                        value={friend2Name}
                        onChange={(e) => setFriend2Name(e.target.value)}
                      />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                      💡 Don't worry if you don't know yet — you'll also get a shareable WhatsApp invite link!
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Campus Champion / Referral Code (Optional)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. CH-ARUN or SQUAD-ALOK-44"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Sparkles size={18} />
                  <span>{mode === 'squad' ? 'Confirm Squad & Unlock AI Card' : 'Auto-Match Me into a Squad'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Value Explainer Side */}
          <div>
            <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.2)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={20} color="#818cf8" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Why Squads Instead of Solo?</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Built for the NxtWave peer-led growth engine</p>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>✓</span>
                  <div>
                    <strong>1 Sign-Up Brings 2 Friends:</strong> Instant 3x organic viral multiplier without burning budget on ads.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>✓</span>
                  <div>
                    <strong>Higher Attendance (No Flaking):</strong> Students rarely skip a workshop when their own squad mates are attending.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>✓</span>
                  <div>
                    <strong>Auto-Matching Solo Learners:</strong> Solo signups are automatically paired with diverse branches (e.g. CSE + ECE).
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>✓</span>
                  <div>
                    <strong>Instant AI Project Card:</strong> Each member receives a personalized project card ready to paste on resume or share on WhatsApp status.
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(15, 23, 42, 0.6))', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#67e8f9', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={18} />
                <span>Zero Cost &bull; Zero Spam Guarantee</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                Your WhatsApp number is strictly used for the 24-hour, 1-hour workshop Zoom link and the pre-workshop starter kit. No promotional robo-calls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
