import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SquadRegisterSection from './components/SquadRegisterSection';
import ProjectVotingSection from './components/ProjectVotingSection';
import CollegeWarsSection from './components/CollegeWarsSection';
import AIProjectCardSection from './components/AIProjectCardSection';
import ReferralSection from './components/ReferralSection';
import GrowthBlueprintSection from './components/GrowthBlueprintSection';
import AIEvaluatorModal from './components/AIEvaluatorModal';
import Footer from './components/Footer';
import { getInitialState, saveState, resetState } from './utils/storage';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [appState, setAppState] = useState(() => getInitialState());
  const [activeTab, setActiveTab] = useState('register');
  const [isEvaluatorOpen, setIsEvaluatorOpen] = useState(false);
  const [incomingRef, setIncomingRef] = useState(null);

  // Read URL query parameters on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setIncomingRef(ref);
    }
  }, []);

  // Sync state changes with LocalStorage
  const updateState = (updater) => {
    setAppState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      saveState(next);
      return next;
    });
  };

  // Handlers
  const handleRegisterSuccess = (newSquad, countAdded, aiCard, refCodeUsed) => {
    updateState((prev) => {
      const newTotal = prev.totalRegistrations + countAdded;

      // Update College Leaderboard
      const updatedColleges = prev.colleges.map((c) => {
        if (c.name.toLowerCase().includes(newSquad.college.toLowerCase()) ||
            newSquad.college.toLowerCase().includes(c.name.toLowerCase())) {
          return {
            ...c,
            registrations: c.registrations + countAdded,
            squads: c.squads + 1,
            per100Score: Math.round((c.per100Score + 1.8) * 10) / 10,
            trend: `+${countAdded} just now`
          };
        }
        return c;
      });

      // Update Campus Champion if ref code matches
      const updatedChampions = prev.champions.map((ch) => {
        if (refCodeUsed && ch.code.toUpperCase() === refCodeUsed.toUpperCase()) {
          return { ...ch, registrations: ch.registrations + countAdded };
        }
        return ch;
      });

      // Update Unlocks based on new total
      const updatedUnlocks = prev.unlocks.map((u) => ({
        ...u,
        unlocked: newTotal >= u.target
      }));

      return {
        ...prev,
        totalRegistrations: newTotal,
        colleges: updatedColleges,
        champions: updatedChampions,
        unlocks: updatedUnlocks,
        userSquad: newSquad,
        userCard: aiCard,
        squads: [newSquad, ...prev.squads]
      };
    });
  };

  const handleCastVote = (projectId) => {
    updateState((prev) => {
      const updatedProjects = prev.projects.map((p) => {
        if (p.id === projectId) {
          return { ...p, votes: p.votes + 1 };
        }
        return p;
      });

      return {
        ...prev,
        projects: updatedProjects,
        userVote: projectId
      };
    });
  };

  const handleToggleQuestStep = (stepId) => {
    updateState((prev) => ({
      ...prev,
      userQuest: {
        ...prev.userQuest,
        [stepId]: !prev.userQuest[stepId]
      }
    }));
  };

  const handleResetData = () => {
    if (window.confirm("Reset all test registrations and return to default presentation state?")) {
      const fresh = resetState();
      setAppState(fresh);
      alert("Application state reset to default demo dataset!");
    }
  };

  const handleAddChampion = (newChamp) => {
    updateState((prev) => ({
      ...prev,
      champions: [newChamp, ...prev.champions]
    }));
  };

  return (
    <div className="app-root">
      {/* Top Banner if user came via referral link */}
      {incomingRef && (
        <div style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)', padding: '0.5rem 1rem', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
          🎉 You've unlocked Squad Draft priority access via code <strong>{incomingRef}</strong>! Register below to join the workshop.
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalRegistrations={appState.totalRegistrations}
        targetRegistrations={appState.targetRegistrations}
        onOpenEvaluator={() => setIsEvaluatorOpen(true)}
        onResetData={handleResetData}
      />

      {/* High-Impact Hero Section */}
      <HeroSection
        totalRegistrations={appState.totalRegistrations}
        targetRegistrations={appState.targetRegistrations}
        unlocks={appState.unlocks}
        onRegisterClick={() => setActiveTab('register')}
        onVoteClick={() => setActiveTab('vote')}
        onBlueprintClick={() => setActiveTab('blueprint')}
      />

      {/* Main Tabbed Views */}
      <main>
        {activeTab === 'register' && (
          <SquadRegisterSection
            userSquad={appState.userSquad}
            onRegisterSuccess={handleRegisterSuccess}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'vote' && (
          <ProjectVotingSection
            projects={appState.projects}
            userVote={appState.userVote}
            onCastVote={handleCastVote}
          />
        )}

        {activeTab === 'colleges' && (
          <CollegeWarsSection
            colleges={appState.colleges}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'card' && (
          <AIProjectCardSection
            userCard={appState.userCard}
            userSquad={appState.userSquad}
            userQuest={appState.userQuest}
            onToggleQuestStep={handleToggleQuestStep}
            onUpdateCard={(card) => updateState({ userCard: card })}
          />
        )}

        {activeTab === 'referrals' && (
          <ReferralSection
            userSquad={appState.userSquad}
            champions={appState.champions}
            onAddChampion={handleAddChampion}
          />
        )}

        {activeTab === 'blueprint' && (
          <GrowthBlueprintSection />
        )}
      </main>

      {/* Bonus Workshop Tool: AI Project Evaluator Modal */}
      <AIEvaluatorModal
        isOpen={isEvaluatorOpen}
        onClose={() => setIsEvaluatorOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigateTab={setActiveTab} />
    </div>
  );
}
