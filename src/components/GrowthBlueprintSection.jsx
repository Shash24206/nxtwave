import React, { useState } from 'react';
import { GROWTH_STRATEGY } from '../data/growthStrategyData';
import { Target, Calculator, DollarSign, Calendar, BrainCircuit, Video, ShieldAlert, Sparkles, CheckCircle2, XCircle } from 'lucide-react';

export default function GrowthBlueprintSection() {
  const [activeSubTab, setActiveSubTab] = useState('summary');

  return (
    <section className="section-wrapper" id="blueprint-section">
      <div className="container">
        <div className="section-head">
          <div className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <span>📑 NxtWave Growth Challenge Submission Dossier</span>
          </div>
          <h2 className="section-title">Growth Strategy & Submission Blueprint</h2>
          <p className="section-subtitle">
            Complete strategic blueprint answering all 4 submission criteria, unit economics, funnel math, and AI collaboration learnings.
          </p>
        </div>

        {/* Sub Navigation Bar */}
        <div className="blueprint-tab-bar">
          <button
            className={`blueprint-tab-btn ${activeSubTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('summary')}
          >
            <Target size={15} style={{ display: 'inline', marginRight: '5px' }} />
            1. Strategy & Squad Draft
          </button>

          <button
            className={`blueprint-tab-btn ${activeSubTab === 'math' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('math')}
          >
            <Calculator size={15} style={{ display: 'inline', marginRight: '5px' }} />
            2. Channel Math to 500
          </button>

          <button
            className={`blueprint-tab-btn ${activeSubTab === 'budget' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('budget')}
          >
            <DollarSign size={15} style={{ display: 'inline', marginRight: '5px' }} />
            3. ₹2,000 Budget (₹4/Reg)
          </button>

          <button
            className={`blueprint-tab-btn ${activeSubTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('timeline')}
          >
            <Calendar size={15} style={{ display: 'inline', marginRight: '5px' }} />
            4. 7-Day Execution
          </button>

          <button
            className={`blueprint-tab-btn ${activeSubTab === 'ai-learnings' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('ai-learnings')}
          >
            <BrainCircuit size={15} style={{ display: 'inline', marginRight: '5px' }} />
            5. AI Notes & Rejections
          </button>

          <button
            className={`blueprint-tab-btn ${activeSubTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('video')}
          >
            <Video size={15} style={{ display: 'inline', marginRight: '5px' }} />
            6. 3-Min Video Script
          </button>
        </div>

        {/* TAB 1: STRATEGY & SQUAD DRAFT */}
        {activeSubTab === 'summary' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#818cf8' }}>
                The Core Insight: Why Standard Ads Fail & Squad Draft Wins
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {GROWTH_STRATEGY.challenge.keyInsight}
              </p>

              <div className="grid-3" style={{ marginTop: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                    Segment A: Placement Anxious (~50%)
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    "Walk into placement drives with a working AI app and a verified GitHub commit instead of a generic to-do list."
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '0.4rem' }}>
                    Segment B: Final-Year Project Seekers (~30%)
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    "Build a working AI prototype in 60 minutes, then easily extend it into your full final-year capstone submission."
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '0.4rem' }}>
                    Segment C: Club & Community Builders (~20%)
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    "Compete in College Wars: the top campus squad gets featured on NxtWave's live stream + verified recommendations."
                  </p>
                </div>
              </div>
            </div>

            {/* Evolution of the Idea */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                Evolution: What Changed Between First Idea & Final Asset
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {GROWTH_STRATEGY.ideaEvolution.versions.map((ver, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem 1.25rem', borderRadius: '12px', borderLeft: idx === 2 ? '4px solid #10b981' : '4px solid #64748b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                      <span style={{ fontWeight: 700, color: idx === 2 ? '#6ee7b7' : '#94a3b8' }}>{ver.v}: {ver.concept}</span>
                      <span className="badge" style={{ background: idx === 2 ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)', color: idx === 2 ? '#6ee7b7' : '#94a3b8' }}>
                        {idx === 2 ? 'FINAL WINNER' : 'REPLACED'}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                      {ver.whyWon || ver.whyRejected}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CHANNEL MATH TO 500 */}
        {activeSubTab === 'math' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#06b6d4' }}>The Math to 500 Verified Registrations</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  4 prioritized channels with transparent conversion assumptions & Day 4 corrective checkpoints.
                </p>
              </div>
              <div className="badge badge-emerald" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                Target: 500 Regs &rarr; 225 Live Attendees (45%)
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {GROWTH_STRATEGY.mathTo500.channels.map((ch, idx) => (
                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f8fafc' }}>
                      {idx + 1}. {ch.channel}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="badge badge-cyan">{ch.target} Registrations</span>
                      <span className="badge badge-indigo">{ch.sharePct}% of Total</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    <strong>Mechanism:</strong> {ch.howItWorks}
                  </p>

                  <div style={{ background: 'rgba(99, 102, 241, 0.08)', padding: '0.65rem 0.9rem', borderRadius: '8px', fontSize: '0.8rem', color: '#a5b4fc', fontFamily: 'var(--font-mono)' }}>
                    🧮 Math: {ch.math}
                  </div>
                </div>
              ))}
            </div>

            {/* Attendance Funnel Reality Check */}
            <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fcd34d', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                <ShieldAlert size={18} />
                <span>Honest Note on Conversion Assumptions & Day 4 Checkpoint</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                Every conversion rate above is labeled as an <strong>assumption</strong>.
                On <strong>Day 4 Surge</strong>, all tracked links (`?ref=...`) will be evaluated.
                If any channel yields a Cost-per-Acquisition higher than 2x the ₹4 average, budget and manual follow-up effort are immediately reallocated to the top 10 Campus Champions.
                The 3-step pre-workshop quest lifts the historical 25% webinar attendance to <strong>45% (225+ live attendees)</strong>.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: BUDGET */}
        {activeSubTab === 'budget' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#10b981' }}>Strict Budget Allocation (₹2,000 Total)</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  High-leverage allocation achieving an implied acquisition cost of <strong>₹4.00 per registered engineer</strong>.
                </p>
              </div>
              <div className="badge badge-emerald" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                Implied CAC: ₹4.00 / Student
              </div>
            </div>

            <div className="grid-3" style={{ marginBottom: '2rem' }}>
              {GROWTH_STRATEGY.budgetBreakdown.items.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <span className="font-mono" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                        ₹{item.amount}
                      </span>
                      <span className="badge badge-indigo">{item.pct}%</span>
                    </div>
                    <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.6rem' }}>{item.item}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.45 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#67e8f9' }}>
                Why This Allocation Beats Traditional Spending:
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                ₹2,000 spent on Google or LinkedIn ads yields roughly 10-15 clicks.
                Allocating 60% (₹1,200) directly into student incentive rewards (Amazon vouchers for peer champions) turns 60 active club leads into motivated distribution nodes who personally pitch their classmates.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: 7-DAY EXECUTION */}
        {activeSubTab === 'timeline' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#f59e0b' }}>
              7-Day Execution Playbook & Pace Targets
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Pace milestones: 60 by Day 2 &bull; 250 by Day 4 &bull; 400 by Day 6 &bull; 500+ by Day 7.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {GROWTH_STRATEGY.executionTimeline.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.25rem', background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ minWidth: '95px' }}>
                    <span className="badge badge-amber" style={{ fontSize: '0.75rem', width: '100%', justifyContent: 'center' }}>
                      {step.day}
                    </span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '4px', fontWeight: 600 }}>
                      {step.phase}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#f1f5f9', lineHeight: 1.5 }}>
                      {step.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AI COLLABORATION & LEARNINGS */}
        {activeSubTab === 'ai-learnings' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#818cf8' }}>
              AI Collaboration Notes: Prompts, Rejections & Realism
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Evaluators test for critical judgment. Here is how AI advice was filtered, challenged, and refined.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {GROWTH_STRATEGY.aiLearnings.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    {idx === 0 ? <XCircle size={18} color="#f43f5e" /> : idx === 1 ? <CheckCircle2 size={18} color="#10b981" /> : <Sparkles size={18} color="#06b6d4" />}
                    <h4 style={{ fontSize: '1rem', color: idx === 0 ? '#fda4af' : idx === 1 ? '#6ee7b7' : '#67e8f9' }}>
                      {item.prompt}
                    </h4>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    <strong>AI Proposal:</strong> {item.suggestion}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#f8fafc', background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', lineHeight: 1.45 }}>
                    <strong>Our Decision & Judgment:</strong> {item.actionTaken}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: 3-MINUTE VIDEO SCRIPT */}
        {activeSubTab === 'video' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#06b6d4' }}>3-Minute Submission Video Script</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Exact timed recording blueprint for the evaluator presentation video.
                </p>
              </div>
              <span className="badge badge-cyan">3:00 Duration Target</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {GROWTH_STRATEGY.videoScript.map((clip, idx) => (
                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>{clip.section}</span>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{clip.time}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                    {clip.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
