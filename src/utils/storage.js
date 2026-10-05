import {
  INITIAL_PROJECT_OPTIONS,
  INITIAL_COLLEGES,
  INITIAL_SQUADS,
  INITIAL_CHAMPIONS,
  COMMUNITY_UNLOCK_TARGETS,
  AI_PROJECT_TEMPLATES
} from '../data/initialData';

const STORAGE_KEY = 'nxtwave_squad_draft_v1';

export function getInitialState() {
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      console.error('Failed to parse localStorage data, falling back to default', e);
    }
  }

  // Calculate starting count
  const initialVotesTotal = INITIAL_PROJECT_OPTIONS.reduce((acc, p) => acc + p.votes, 0);

  const defaultState = {
    totalRegistrations: initialVotesTotal, // around 404
    targetRegistrations: 500,
    projects: INITIAL_PROJECT_OPTIONS,
    colleges: INITIAL_COLLEGES,
    squads: INITIAL_SQUADS,
    champions: INITIAL_CHAMPIONS,
    unlocks: COMMUNITY_UNLOCK_TARGETS,
    userSquad: null, // current user's registration
    userVote: null,
    userQuest: { 1: false, 2: false, 3: false },
    evaluationsHistory: []
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
  return defaultState;
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event('nxtwave_storage_update'));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return getInitialState();
}

// Generate client-side AI project card based on interest and student details
export function generateAIProjectCard(interest = '', branch = 'CSE', studentName = 'Builder') {
  const cleanInterest = interest.trim().toLowerCase();
  let template = AI_PROJECT_TEMPLATES.default;

  for (const key of Object.keys(AI_PROJECT_TEMPLATES)) {
    if (cleanInterest.includes(key)) {
      template = AI_PROJECT_TEMPLATES[key];
      break;
    }
  }

  // Customize title & bullet based on branch
  const branchTag = branch || 'CSE';
  const customBullet = template.bullet.replace('Engineered', `[${branchTag} Final-Year] Engineered`);

  return {
    ...template,
    studentName,
    branch: branchTag,
    generatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    cardId: `NXT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
  };
}

// Client-side AI Project Evaluator
export function evaluateProjectIdea(title = '', desc = '', industry = 'Placements') {
  const words = (title + ' ' + desc).toLowerCase();
  let baseScore = 68;

  // Realism heuristics
  if (words.includes('api') || words.includes('gemini') || words.includes('llm') || words.includes('ai')) baseScore += 8;
  if (words.includes('streamlit') || words.includes('react') || words.includes('fastapi')) baseScore += 7;
  if (words.includes('dataset') || words.includes('pandas') || words.includes('data') || words.includes('huggingface')) baseScore += 6;
  if (words.includes('deploy') || words.includes('github') || words.includes('docker') || words.includes('real-time')) baseScore += 5;
  if (desc.length > 80) baseScore += 4;

  const score = Math.min(Math.max(baseScore, 58), 98);

  const strengths = [];
  if (words.includes('gemini') || words.includes('llm') || words.includes('vision') || words.includes('ai')) {
    strengths.push('Strong current market relevance with GenAI/Applied ML recruiter demand.');
  } else {
    strengths.push('Clear problem definition tailored for junior engineering portfolio.');
  }

  if (words.includes('fastapi') || words.includes('streamlit') || words.includes('react')) {
    strengths.push('Interactive frontend/API layer allows recruiters to test live in 10 seconds.');
  } else {
    strengths.push('Feasible 60-minute MVP scope without unnecessary infrastructure overhead.');
  }

  const improvements = [
    'Add automated latency/cost logging so interviewers see production awareness.',
    'Include sample fallback mock dataset in GitHub repository in case external APIs rate-limit.'
  ];

  const resumeBullet = `Architected ${title || 'Applied AI Solution'} utilizing Python & modern ML APIs; reduced manual processing time by 75% for simulated ${industry} use-case.`;

  return {
    score,
    placementReadiness: score >= 85 ? 'Top 5% Placement Tier' : 'Strong Solid Project Tier',
    strengths,
    improvements,
    recommendedStack: ['Python 3.11', 'Streamlit / FastAPI', 'Google Gemini API', 'Pandas'],
    resumeBullet
  };
}
