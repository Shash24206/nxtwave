import React, { useState } from 'react';
import { X, Sparkles, Bot, Check, Copy, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { evaluateProjectIdea } from '../utils/storage';

export default function AIEvaluatorModal({ isOpen, onClose }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [domain, setDomain] = useState('Placement Tech');
  const [result, setResult] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [copiedBullet, setCopiedBullet] = useState(false);

  if (!isOpen) return null;

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!projectTitle && !projectDesc) return;

    setIsEvaluating(true);
    setTimeout(() => {
      const evaluation = evaluateProjectIdea(projectTitle, projectDesc, domain);
      setResult(evaluation);
      setIsEvaluating(false);
    }, 450);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.resumeBullet);
    setCopiedBullet(true);
    setTimeout(() => setCopiedBullet(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
          <div style={{ background: 'rgba(6, 182, 212, 0.15)', padding: '0.4rem', borderRadius: '8px' }}>
            <Bot size={22} color="#06b6d4" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem' }}>AI Workshop Project Evaluator</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Workshop Day Bonus Tool &bull; Instant placement-readiness feedback
            </p>
          </div>
        </div>

        <form onSubmit={handleEvaluate} style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              required
              className="form-input"
              placeholder="e.g. Real-Time Fraud Detector or Smart Crop Vision"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Describe Problem & Architecture</label>
            <textarea
              required
              rows={3}
              className="form-input"
              style={{ resize: 'vertical' }}
              placeholder="Explain what the AI does, what dataset or API you plan to use, and how it is deployed..."
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <label className="form-label">Target Industry</label>
              <select
                className="form-select"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                <option value="Placement Tech">Placement Tech / ATS</option>
                <option value="Computer Vision">Computer Vision & IoT</option>
                <option value="FinTech">FinTech & Fraud</option>
                <option value="HealthTech">HealthTech & Medical</option>
                <option value="Sports ML">Sports Analytics & ML</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                type="submit"
                disabled={isEvaluating}
                className="btn-primary"
                style={{ width: '100%', height: '42px' }}
              >
                <Sparkles size={16} />
                <span>{isEvaluating ? 'Evaluating...' : 'Evaluate Project'}</span>
              </button>
            </div>
          </div>
        </form>

        {/* Results Area */}
        {result && (
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glow)', borderRadius: '16px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Placement Score</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span className="font-mono" style={{ fontSize: '2rem', fontWeight: 800, color: result.score >= 80 ? '#10b981' : '#f59e0b' }}>
                    {result.score}
                  </span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>/ 100</span>
                </div>
              </div>

              <div className="badge badge-emerald" style={{ fontSize: '0.85rem' }}>
                <Award size={14} />
                <span>{result.placementReadiness}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6ee7b7', marginBottom: '0.35rem' }}>
                ✓ Key Strengths:
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                {result.strengths.map((str, i) => (
                  <li key={i}>{str}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fcd34d', marginBottom: '0.35rem' }}>
                ⚠️ High-Impact Gaps to Fix in 60-Min Build:
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                {result.improvements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '10px', padding: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase' }}>
                  Auto-Generated Resume Bullet:
                </span>
                <button
                  onClick={handleCopy}
                  style={{ background: 'transparent', border: 'none', color: '#a5b4fc', cursor: 'pointer', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                >
                  {copiedBullet ? <Check size={11} color="#10b981" /> : <Copy size={11} />}
                  <span>{copiedBullet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#ffffff', fontStyle: 'italic' }}>
                "{result.resumeBullet}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
