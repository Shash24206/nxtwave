import React from 'react';
import confetti from 'canvas-confetti';
import { Vote, CheckCircle2, Share2, Flame, Sparkles, Layers } from 'lucide-react';

export default function ProjectVotingSection({
  projects,
  userVote,
  onCastVote
}) {
  const totalVotes = projects.reduce((sum, p) => sum + p.votes, 0);

  const handleVote = (projectId) => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // fallback
    }
    onCastVote(projectId);
  };

  const getSharePollLink = (projectTitle) => {
    const text = `🗳️ Vote Alert: We are choosing what to build live in NxtWave's free 60-min AI workshop! I voted for "${projectTitle}". Cast your vote and get your squad registered here: ${window.location.origin}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section-wrapper" id="voting-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <span>⚡ Growth Mechanic 2: Vote to Shape</span>
          </div>
          <h2 className="section-title">You Vote. We Build It Live in 60 Mins.</h2>
          <p className="section-subtitle">
            No pre-recorded fluff. The project with the highest votes at the countdown lock will be coded from blank screen to deployed app live during the session.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '9999px', marginTop: '1rem', fontSize: '0.85rem' }}>
            <Flame size={15} color="#f59e0b" />
            <span><strong>{totalVotes}</strong> Students Have Cast Their Vote</span>
          </div>
        </div>

        <div className="grid-3">
          {projects.map((project) => {
            const pct = Math.round((project.votes / Math.max(1, totalVotes)) * 100);
            const isUserChoice = userVote === project.id;

            return (
              <div
                key={project.id}
                className={`glass-panel vote-card ${isUserChoice ? 'selected' : ''}`}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span className="vote-category">{project.category}</span>
                    <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>{project.badge}</span>
                  </div>

                  <h3 className="vote-title">{project.title}</h3>
                  <p className="vote-tagline">{project.tagline}</p>
                  <p className="vote-desc">{project.description}</p>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      TECH STACK USED IN WORKSHOP:
                    </div>
                    <div className="tech-tags">
                      {project.techStack.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Placement Resume Impact */}
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.25rem', borderLeft: '3px solid var(--accent-cyan)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Ready-to-Paste Resume Bullet:
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', fontStyle: 'italic', lineHeight: 1.4 }}>
                      "{project.resumeImpact}"
                    </div>
                  </div>
                </div>

                <div>
                  {/* Voting percentage meter */}
                  <div className="vote-meter-box">
                    <div className="vote-meter-labels">
                      <span style={{ color: 'var(--text-muted)' }}>{project.votes} Votes</span>
                      <span style={{ color: isUserChoice ? 'var(--accent-cyan)' : '#ffffff' }}>{pct}%</span>
                    </div>
                    <div className="vote-meter-bar">
                      <div className="vote-meter-progress" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleVote(project.id)}
                      className={isUserChoice ? 'btn-whatsapp' : 'btn-primary'}
                      style={{ flex: 1, padding: '0.65rem 1rem' }}
                    >
                      {isUserChoice ? (
                        <>
                          <CheckCircle2 size={16} />
                          <span>Voted!</span>
                        </>
                      ) : (
                        <>
                          <Vote size={16} />
                          <span>Vote for This</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getSharePollLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      title="Lobby friends to vote for this on WhatsApp"
                      style={{ padding: '0.65rem 0.85rem' }}
                    >
                      <Share2 size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
