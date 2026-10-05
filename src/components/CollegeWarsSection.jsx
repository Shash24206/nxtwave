import React, { useState } from 'react';
import { Award, Trophy, Share2, Search, TrendingUp, Users, ShieldAlert } from 'lucide-react';

export default function CollegeWarsSection({ colleges, onNavigateTab }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColleges = colleges.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRallyCollegeLink = (collegeName, rank) => {
    const text = `🏆 College Wars Alert! ${collegeName} is currently ranked #${rank} for NxtWave's live 60-min AI workshop!\n\nHelp our college win the Hall of Fame & verified certificates for our club leads. Register your 3-person squad here: ${window.location.origin}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section-wrapper" id="college-wars-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            <span>⚡ Growth Mechanic 3: College Wars</span>
          </div>
          <h2 className="section-title">The College Leaderboard</h2>
          <p className="section-subtitle">
            Rep your campus. Squad registrations boost your college's standing.
            To keep it fair for colleges of all sizes, rankings factor <strong>registrations per 100 enrolled students</strong>.
          </p>
        </div>

        {/* Search & Stats Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '2.4rem' }}
              placeholder="Search your college or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Trophy size={16} color="#f59e0b" />
              <span>Top 3 Colleges get NxtWave Hall of Fame placement</span>
            </span>
          </div>
        </div>

        {/* Table / List */}
        <div className="glass-panel" style={{ overflowX: 'auto', padding: '0.5rem' }}>
          <table className="leaderboard-table">
            <thead>
              <tr style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1.2rem' }}>Rank</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>College / University</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>City</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>Registrations</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>Squads</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>Fair Score</th>
                <th style={{ padding: '0.75rem 1.2rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.map((college, idx) => {
                const rank = idx + 1;
                let rankClass = 'rank-other';
                if (rank === 1) rankClass = 'rank-1';
                else if (rank === 2) rankClass = 'rank-2';
                else if (rank === 3) rankClass = 'rank-3';

                return (
                  <tr key={college.name} className="leaderboard-row">
                    <td>
                      <div className={`rank-badge ${rankClass}`}>
                        {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>{college.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}>
                        <TrendingUp size={12} />
                        <span>{college.trend || '+4 today'}</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{college.city}</td>
                    <td style={{ fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {college.registrations}
                    </td>
                    <td style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>
                      <span className="badge badge-indigo">{college.squads} Squads</span>
                    </td>
                    <td style={{ fontWeight: 600, color: '#a5b4fc', fontFamily: 'var(--font-mono)' }}>
                      {college.per100Score} pts
                    </td>
                    <td>
                      <a
                        href={getRallyCollegeLink(college.name, rank)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                      >
                        <Share2 size={13} />
                        <span>Rally Campus</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Small Colleges Fairness Note */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          <ShieldAlert size={15} color="#94a3b8" />
          <span>Fair Play Algorithm: Raw counts are normalized by verified batch size to give smaller tier-2/3 institutions an equal shot at winning #1.</span>
        </div>
      </div>
    </section>
  );
}
