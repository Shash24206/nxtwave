import React, { useState } from 'react';
import { Gift, Share2, Copy, Check, Users, Award, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';

export default function ReferralSection({
  userSquad,
  champions,
  onAddChampion
}) {
  const [lookupCode, setLookupCode] = useState(userSquad ? userSquad.referralCode : '');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCopyText, setCopiedCopyText] = useState(false);

  // Champion link generator
  const [champName, setChampName] = useState('');
  const [champCollege, setChampCollege] = useState('');
  const [generatedChampLink, setGeneratedChampLink] = useState('');

  const referralCode = userSquad ? userSquad.referralCode : (lookupCode || 'SQUAD-NXTDRAFT-10');
  const referralCount = userSquad ? 3 : 2; // Demo count

  const shareUrl = `${window.location.origin}?ref=${referralCode}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleGenerateChampionLink = (e) => {
    e.preventDefault();
    if (!champName) return;
    const clean = champName.trim().replace(/\s+/g, '').toUpperCase().slice(0, 8);
    const code = `CH-${clean}`;
    const link = `${window.location.origin}?ref=${code}`;
    setGeneratedChampLink(link);

    if (onAddChampion) {
      onAddChampion({
        code,
        name: `${champName} (Campus Champion)`,
        college: champCollege || 'Engineering College',
        registrations: 0,
        tier: 'Tier 1 (Target: 10)',
        status: 'Active'
      });
    }
  };

  const samplePromoText = `🔥 Final-year students: Placement season is here! NxtWave is hosting a FREE live workshop: "Build Your First AI Project in 60 Minutes".\n\n✅ 100% Free Entry & Verified Certificate\n✅ Build a real AI project for your resume (no fluff)\n✅ Nobody joins alone: Form a 3-person squad & vote on what we build live!\n\n👉 Join via our college squad link: ${shareUrl}`;

  const handleCopyPromo = () => {
    navigator.clipboard.writeText(samplePromoText);
    setCopiedCopyText(true);
    setTimeout(() => setCopiedCopyText(false), 2000);
  };

  return (
    <section className="section-wrapper" id="referrals-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <span>⚡ Growth Mechanic 5: Viral Referral & Champion Engine</span>
          </div>
          <h2 className="section-title">Squad Referral Rewards & Champion Hub</h2>
          <p className="section-subtitle">
            Share your squad code with classmates to unlock exclusive AI project packs, priority seats, and 1-on-1 resume reviews.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start', marginBottom: '3rem' }}>
          {/* My Referrals Box */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Gift size={20} color="#10b981" />
              <span>Squad Referral Unlock Status</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Every student who registers with your code adds +1 to your squad tier.
            </p>

            {/* Code Box */}
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>YOUR ACTIVE REFERRAL CODE</span>
                <span className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                  {referralCode}
                </span>
              </div>
              <button
                onClick={handleCopyLink}
                className="btn-secondary"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
              >
                {copiedLink ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedLink ? 'Copied Link' : 'Copy Link'}</span>
              </button>
            </div>

            {/* Unlocked Tiers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {/* Tier 1 */}
              <div style={{
                background: referralCount >= 1 ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                border: referralCount >= 1 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: referralCount >= 1 ? '#6ee7b7' : '#94a3b8' }}>
                    1 Invite &bull; 50+ High-Impact AI Project Ideas PDF
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                    Curated list of final-year AI topics with datasets & starter code.
                  </div>
                </div>
                <span className={`badge ${referralCount >= 1 ? 'badge-emerald' : 'badge-indigo'}`}>
                  {referralCount >= 1 ? 'UNLOCKED ✓' : '1 Invite'}
                </span>
              </div>

              {/* Tier 2 */}
              <div style={{
                background: referralCount >= 3 ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                border: referralCount >= 3 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: referralCount >= 3 ? '#6ee7b7' : '#94a3b8' }}>
                    3 Invites &bull; Full Starter Code Template Pack
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                    Ready-to-deploy FastAPI + Streamlit AI boilerplate repositories.
                  </div>
                </div>
                <span className={`badge ${referralCount >= 3 ? 'badge-emerald' : 'badge-indigo'}`}>
                  {referralCount >= 3 ? 'UNLOCKED ✓' : '3 Invites'}
                </span>
              </div>

              {/* Tier 3 */}
              <div style={{
                background: referralCount >= 5 ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                border: referralCount >= 5 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: referralCount >= 5 ? '#6ee7b7' : '#94a3b8' }}>
                    5 Invites &bull; Priority VIP Seat + 1-on-1 AI Resume Roasting
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                    Front-row live Q&A access + personalized feedback by workshop host.
                  </div>
                </div>
                <span className={`badge ${referralCount >= 5 ? 'badge-emerald' : 'badge-amber'}`}>
                  {referralCount >= 5 ? 'UNLOCKED ✓' : '2 more needed'}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Share */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(samplePromoText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%' }}
            >
              <Share2 size={16} />
              <span>Share to College WhatsApp Group</span>
            </a>
          </div>

          {/* Campus Champion Hub (Club Leads & CRs) */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} color="#f59e0b" />
                <span>Campus Champion Toolkit</span>
              </h3>
              <span className="badge badge-amber">60 Champions</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              For GDSC Leads, CSI Presidents, Coding Club Coordinators & Class Representatives. Drives ~250 registrations.
            </p>

            {/* Champion Link Generator */}
            <form onSubmit={handleGenerateChampionLink} style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: '14px', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Generate Your Tracked Champion Link
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your Name (e.g. Arun)"
                  value={champName}
                  onChange={(e) => setChampName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="College (e.g. JNTUH)"
                  value={champCollege}
                  onChange={(e) => setChampCollege(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '0.88rem', padding: '0.6rem' }}>
                <span>Create Tracked Champion Link</span>
              </button>

              {generatedChampLink && (
                <div style={{ marginTop: '0.85rem', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6ee7b7', marginBottom: '2px' }}>Your Tracked URL:</div>
                  <div className="font-mono" style={{ fontSize: '0.82rem', color: '#ffffff', wordBreak: 'break-all' }}>
                    {generatedChampLink}
                  </div>
                </div>
              )}
            </form>

            {/* Copyable Ready-to-Send Promo Template */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MessageSquare size={13} />
                  <span>PRE-WRITTEN WHATSAPP MESSAGE FOR CLASS GROUPS:</span>
                </span>
                <button
                  onClick={handleCopyPromo}
                  style={{ background: 'transparent', border: 'none', color: '#818cf8', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                >
                  {copiedCopyText ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                  <span>{copiedCopyText ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', whiteSpace: 'pre-line', lineHeight: 1.45, maxHeight: '110px', overflowY: 'auto' }}>
                {samplePromoText}
              </p>
            </div>
          </div>
        </div>

        {/* Top Campus Champions Leaderboard */}
        <div className="glass-panel" style={{ padding: '1.75rem' }}>
          <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} color="#f59e0b" />
            <span>Campus Champions Leaderboard (Top Verified Registrations)</span>
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            Top 6 Champions receive ₹200 Amazon Vouchers + Official LinkedIn Recommendation from NxtWave Growth Lead.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="leaderboard-table">
              <thead>
                <tr style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', textAlign: 'left' }}>
                  <th style={{ padding: '0.6rem 1rem' }}>Champion Code</th>
                  <th style={{ padding: '0.6rem 1rem' }}>Name & Role</th>
                  <th style={{ padding: '0.6rem 1rem' }}>Campus</th>
                  <th style={{ padding: '0.6rem 1rem' }}>Verified Signups</th>
                  <th style={{ padding: '0.6rem 1rem' }}>Reward Status</th>
                </tr>
              </thead>
              <tbody>
                {champions.map((champ, idx) => (
                  <tr key={idx} className="leaderboard-row">
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      {champ.code}
                    </td>
                    <td style={{ fontWeight: 600 }}>{champ.name}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{champ.college}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#10b981' }}>
                      {champ.registrations}
                    </td>
                    <td>
                      <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                        {champ.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
