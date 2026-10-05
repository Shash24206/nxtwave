// Mock data and template engine for NxtWave "Squad Draft" Growth Challenge

export const INITIAL_PROJECT_OPTIONS = [
  {
    id: "resume-ai",
    title: "AI Resume Scorer & Roaster",
    tagline: "Placement-Ready ATS Analyzer with Real-Time Feedback",
    category: "Career & Placements",
    description: "Upload any tech resume PDF and get instant ATS compatibility score, missing tech keywords, and brutally honest AI bullet-point rewrites that pass recruiter screenings.",
    techStack: ["Python", "Gemini API", "Streamlit", "PyPDF2"],
    votes: 184,
    badge: "🔥 Most Popular with CSE",
    resumeImpact: "Built an LLM-powered ATS parser achieving 94% keyword accuracy on 500+ tech resumes.",
    keyTakeaway: "Learn Document Parsing + Prompt Engineering + Streamlit UI in 60 mins."
  },
  {
    id: "agri-ai",
    title: "AgriVision: Crop Disease Detector",
    tagline: "Computer Vision & Advisory for Indian Farmers",
    category: "Computer Vision & Real-World",
    description: "Snap or upload a leaf photo of rice, wheat, or tomato to identify 14+ diseases in under 2 seconds, with vernacular treatment instructions and nearest Krishi Kendra advice.",
    techStack: ["PyTorch / TensorFlow", "FastAPI", "OpenCV", "HuggingFace"],
    votes: 122,
    badge: "🌱 Social Impact Pick",
    resumeImpact: "Trained lightweight MobileNetV3 model reaching 91.2% precision on 10k crop leaf datasets.",
    keyTakeaway: "Learn Transfer Learning + Image Preprocessing + Edge Deployment in 60 mins."
  },
  {
    id: "cricket-ai",
    title: "IPL Match Predictor & Win Probability",
    tagline: "Ball-by-Ball Machine Learning Momentum Engine",
    category: "Predictive ML & Sports Analytics",
    description: "Live match simulation engine calculating win probabilities after every over based on required run rate, wickets in hand, venue pitch history, and bowler-batter matchups.",
    techStack: ["Scikit-Learn", "Pandas", "Streamlit", "XGBoost"],
    votes: 98,
    badge: "⚡ Fan Favorite",
    resumeImpact: "Designed gradient-boosted match winner predictor trained on 15 years of ball-by-ball IPL match data.",
    keyTakeaway: "Learn Feature Engineering + Historical Data Wrangling + Interactive Sliders in 60 mins."
  }
];

export const INITIAL_COLLEGES = [
  { rank: 1, name: "JNTU Hyderabad (JNTUH)", city: "Hyderabad", registrations: 78, squads: 24, per100Score: 89.2, trend: "+12 today" },
  { rank: 2, name: "Anna University (CEG Campus)", city: "Chennai", registrations: 66, squads: 21, per100Score: 84.5, trend: "+8 today" },
  { rank: 3, name: "Dr. A.P.J. Abdul Kalam Technical Univ (AKTU)", city: "Lucknow", registrations: 59, squads: 18, per100Score: 81.0, trend: "+15 today" },
  { rank: 4, name: "Visvesvaraya Tech University (VTU)", city: "Belagavi", registrations: 52, squads: 16, per100Score: 78.4, trend: "+7 today" },
  { rank: 5, name: "SRM Institute of Science & Technology", city: "Kattankulathur", registrations: 44, squads: 13, per100Score: 73.1, trend: "+5 today" },
  { rank: 6, name: "Chandigarh University (CU)", city: "Mohali", registrations: 37, squads: 11, per100Score: 68.9, trend: "+9 today" },
  { rank: 7, name: "Osmania University (UCE)", city: "Hyderabad", registrations: 31, squads: 9, per100Score: 64.2, trend: "+4 today" }
];

export const INITIAL_SQUADS = [
  {
    id: "SQ-JNTU-01",
    squadName: "ByteForce Trio",
    college: "JNTU Hyderabad",
    members: [
      { name: "Rahul Sharma", branch: "CSE", isLead: true },
      { name: "Sneha Reddy", branch: "ECE", isLead: false },
      { name: "Karthik Verma", branch: "IT", isLead: false }
    ],
    voteChoice: "resume-ai",
    status: "Confirmed (3/3)",
    referralCode: "SQUAD-RAHUL-42"
  },
  {
    id: "SQ-ANNA-02",
    squadName: "Chennai Neural Nets",
    college: "Anna University",
    members: [
      { name: "Ananya Subramanian", branch: "CSE", isLead: true },
      { name: "Dinesh Kumar", branch: "CSE", isLead: false },
      { name: "Vignesh R", branch: "ECE", isLead: false }
    ],
    voteChoice: "resume-ai",
    status: "Confirmed (3/3)",
    referralCode: "SQUAD-ANANYA-19"
  },
  {
    id: "SQ-AKTU-03",
    squadName: "Varanasi Visionaries",
    college: "AKTU Lucknow",
    members: [
      { name: "Aman Gupta", branch: "IT", isLead: true },
      { name: "Pooja Mishra", branch: "CSE", isLead: false },
      { name: "Rohan Yadav", branch: "AI & ML", isLead: false }
    ],
    voteChoice: "agri-ai",
    status: "Confirmed (3/3)",
    referralCode: "SQUAD-AMAN-88"
  },
  {
    id: "SQ-VTU-04",
    squadName: "Silicon Belagavi",
    college: "VTU Belagavi",
    members: [
      { name: "Prateek Patil", branch: "ECE", isLead: true },
      { name: "Aditi Rao", branch: "CSE", isLead: false },
      { name: "Open Slot", branch: "Waiting for Auto-Match", isLead: false, isPending: true }
    ],
    voteChoice: "cricket-ai",
    status: "Drafting (2/3)",
    referralCode: "SQUAD-PRATEEK-07"
  }
];

export const INITIAL_CHAMPIONS = [
  { code: "CH-ARUN", name: "Arun K. (GDSC Lead)", college: "JNTU Hyderabad", registrations: 34, tier: "Tier 2 (LinkedIn Rec + ₹200 Voucher)", status: "Top 3" },
  { code: "CH-PRIYA", name: "Priya S. (CSI President)", college: "Anna University", registrations: 29, tier: "Tier 2 (LinkedIn Rec)", status: "Top 3" },
  { code: "CH-ROHIT", name: "Rohit N. (Coding Club Lead)", college: "AKTU Lucknow", registrations: 26, tier: "Tier 1 (Official Certificate)", status: "Active" },
  { code: "CH-SNEHA", name: "Sneha M. (Class Representative)", college: "VTU Belagavi", registrations: 22, tier: "Tier 1 (Official Certificate)", status: "Active" },
  { code: "CH-VIKRAM", name: "Vikram P. (AI Club Secretary)", college: "SRM IST", registrations: 19, tier: "Tier 1 (Official Certificate)", status: "Active" }
];

export const COMMUNITY_UNLOCK_TARGETS = [
  { target: 100, title: "Curated AI Starter Code Kit + GitHub Templates", unlocked: true, note: "Unlocked on Day 2!" },
  { target: 250, title: "Live AMA with Senior AI Engineer (ex-Amazon / Google)", unlocked: true, note: "Unlocked on Day 4!" },
  { target: 500, title: "Top 3 Squads Featured on NxtWave + 1-on-1 Placement Roasting", unlocked: false, note: "Goal: 96 spots left to reach 500!" }
];

// Rich AI personalized generator dictionary for student interests
export const AI_PROJECT_TEMPLATES = {
  cricket: {
    title: "CricIntel: Real-Time Ball-by-Ball Momentum Predictor",
    problem: "Cricket fans and sports analysts struggle to quantify live match turning points beyond raw run rates.",
    stack: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    steps: [
      { id: 1, text: "Fork Starter Repo: Download ball-by-ball IPL dataset (2008-2024)", done: false },
      { id: 2, text: "Train Logistic Regression / XGBoost model for 2nd innings run chases", done: false },
      { id: 3, text: "Build interactive Streamlit dashboard with current over & wickets sliders", done: false }
    ],
    bullet: "Engineered an ML-based match win probability engine with 87% accuracy across 800+ IPL matches; deployed live on Streamlit."
  },
  farming: {
    title: "AgriGuardian: Instant Crop Disease Identification & Remedy",
    problem: "Smallholder farmers in rural India lose up to 30% of yields to untreated leaf infections due to delayed diagnosis.",
    stack: ["PyTorch", "FastAPI", "OpenCV", "Streamlit"],
    steps: [
      { id: 1, text: "Download PlantVillage leaf disease classification subset (5k images)", done: false },
      { id: 2, text: "Fine-tune pre-trained MobileNetV2 with transfer learning in PyTorch", done: false },
      { id: 3, text: "Add voice advisory output in regional languages using gTTS", done: false }
    ],
    bullet: "Developed mobile-first crop leaf disease classifier detecting 10 common crop pathogens with 92% accuracy under low-compute constraints."
  },
  music: {
    title: "Harmoniq: AI Mood-Based Playlist & Audio Feature Synthesizer",
    problem: "Generic streaming playlists fail to adapt dynamically to student study focus and fatigue states.",
    stack: ["Python", "Librosa", "Spotify Web API", "Gemini AI"],
    steps: [
      { id: 1, text: "Extract tempo, acousticness, and valence using Librosa and Spotify API", done: false },
      { id: 2, text: "Cluster tracks into 4 focus zones (Deep Work, Chill, Energy, Sleep) using K-Means", done: false },
      { id: 3, text: "Generate personalized dynamic Spotify queue based on exam timetable", done: false }
    ],
    bullet: "Created an intelligent audio clustering engine processing 1,000+ tracks to automate contextual study playlists based on real-time focus goals."
  },
  gaming: {
    title: "GameSense AI: Tactical Esports Win Probability & Economy Tracker",
    problem: "Competitive players fail to accurately estimate round economy and clutch win scenarios in real time.",
    stack: ["Python", "OpenCV", "RandomForest", "Streamlit"],
    steps: [
      { id: 1, text: "Parse game screenshot telemetry to detect team loadouts and buy states", done: false },
      { id: 2, text: "Train predictive decision tree on 12k round outcomes", done: false },
      { id: 3, text: "Display live HUD recommendation (Save vs Force Buy)", done: false }
    ],
    bullet: "Built real-time telemetry classifier evaluating competitive game economies to boost tactical clutch rates by 22%."
  },
  finance: {
    title: "PocketFin AI: College Student Micro-Budget & Expense Auditor",
    problem: "Hostel students run out of pocket money mid-month due to hidden UPI micro-spends (chai, snacks, late night food).",
    stack: ["Python", "Gemini API", "Pandas", "Plotly"],
    steps: [
      { id: 1, text: "Upload UPI screenshot / bank SMS extract safely to parse merchant names", done: false },
      { id: 2, text: "Auto-categorize transactions and detect weekend spending surges", done: false },
      { id: 3, text: "AI Coach gives customized daily survival budget till month end", done: false }
    ],
    bullet: "Architected an automated UPI expense categorizer and AI financial coach, accurately classifying 96% of unformatted transaction SMSs."
  },
  healthcare: {
    title: "MedScan AI: Automated Chest X-Ray & Report Simplifier",
    problem: "Patients and families find medical scan jargon terrifying and incomprehensible before visiting doctors.",
    stack: ["Python", "HuggingFace Transformers", "Gemini API", "Streamlit"],
    steps: [
      { id: 1, text: "Parse medical report text or scan using lightweight OCR", done: false },
      { id: 2, text: "Translate complex diagnostic terms into simple 5th-grade bilingual summaries", done: false },
      { id: 3, text: "Generate curated list of questions for the patient to ask their physician", done: false }
    ],
    bullet: "Created a patient-centric medical diagnosis simplifier using LLM prompting to translate complex clinical reports into actionable layman summaries."
  },
  default: {
    title: "ResumeBoost AI: Placement ATS Roaster & Keyword Aligner",
    problem: "Tier-2/3 college graduates get filtered out by enterprise ATS algorithms without human eyes ever seeing their resumes.",
    stack: ["Python", "Gemini API", "Streamlit", "PyPDF2"],
    steps: [
      { id: 1, text: "Clone NxtWave workshop boilerplate repository on GitHub", done: false },
      { id: 2, text: "Configure free Gemini API key in local environment variables", done: false },
      { id: 3, text: "Test resume parser script against sample junior developer job descriptions", done: false }
    ],
    bullet: "Built an LLM-powered ATS resume analyzer scoring keyword alignment against job descriptions and generating placement-optimized project summaries."
  }
};
