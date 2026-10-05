// Comprehensive Growth Challenge Brief & Strategy Data for Evaluator Inspection

export const GROWTH_STRATEGY = {
  challenge: {
    role: "NxtWave Growth Intern Selection - Round 1",
    goal: "500 final-year engineering students registered for free workshop 'Build Your First AI Project in 60 Minutes'",
    constraints: {
      time: "7 Days",
      budget: "₹2,000 total",
      targetAudience: "Final-year CSE/IT/ECE students in Tier-2/3 Indian engineering colleges close to placement season"
    },
    keyInsight: "At ₹2,000 budget, paid ads cannot buy 500 registrations. Students trust classmates, club leads, and WhatsApp group announcements 10x more than sponsored ads. The growth engine MUST be peer-led distribution with virality built into the registration mechanic."
  },

  ideaEvolution: {
    versions: [
      {
        v: "Version 1 (Initial)",
        concept: "Standard Landing Page & Campus Ambassador Posters",
        whyRejected: "Too generic. Paid ads or spammy WhatsApp forwards lead to high bounce rates and low show-up rates. Solitary registrations rarely attend live workshops."
      },
      {
        v: "Version 2 (Intermediate)",
        concept: "4-Layer Growth Funnel with Referral Rewards & AI Evaluator",
        whyRejected: "Better, but registration was still a passive transaction. Students lacked a collaborative emotional stake."
      },
      {
        v: "Version 3 (Final - SQUAD DRAFT)",
        concept: "Squad Draft: 3-Person College Teams + Live Voting + College Wars + AI Project Card",
        whyWon: "Transforms registration into a fantasy-league draft. Nobody signs up alone: 1 registrant brings 2 friends. Voting creates pre-session ownership. College Wars triggers peer pride. Built-in pre-workshop quest drives 70%+ attendance."
      }
    ]
  },

  mathTo500: {
    totalTarget: 500,
    attendanceTarget: 225, // 45% live show rate
    channels: [
      {
        channel: "Campus Champions (Club Leads & CRs)",
        howItWorks: "Recruit 60 student leads (GDSC, CSI, Coding clubs) via LinkedIn/DMs. Give unique tracked links (?ref=CH-XX) + AI-tailored WhatsApp group copy + tiered incentives (certificates, LinkedIn rec, ₹200 voucher for top 6).",
        math: "60 champions × 3 WhatsApp groups × ~120 members = 21,600 gross reach. 6% click rate = ~1,300 clicks. 20% conversion = ~260 registrations.",
        target: 250,
        sharePct: 50
      },
      {
        channel: "Squad Viral Multiplier (1 Brings 2)",
        howItWorks: "Every squad lead invites 2 friends to complete their trio. Solo registrants are auto-matched into trios with complementary skills. People rarely skip sessions their close friends attend.",
        math: "~110 initial squad leads × 2 invites × 60% acceptance rate = ~130 squad mate registrations.",
        target: 130,
        sharePct: 26
      },
      {
        channel: "Vote Shares & College Pride",
        howItWorks: "Students rally their classmates to vote for their desired project (Resume AI vs Agri AI vs IPL Predictor) so it gets built live.",
        math: "Students share live poll link in college Discord/WhatsApp groups to boost their college project pick.",
        target: 60,
        sharePct: 12
      },
      {
        channel: "TPO / HOD Cold Outreach & Dev Clubs",
        howItWorks: "Personalized cold emails to 80-100 Training & Placement Officers (TPOs) and Tech Club coordinators focusing on free placements resume uplift.",
        math: "10-15 TPOs forwarding to official department notices.",
        target: 60,
        sharePct: 12
      }
    ]
  },

  budgetBreakdown: {
    total: 2000,
    costPerRegistration: "₹4.00",
    items: [
      {
        item: "Top Campus Champions & Winning College Rewards",
        amount: 1200,
        pct: 60,
        desc: "₹200 Amazon vouchers for top 6 individual campus champions driving 30+ verified registrations + winning college squad shoutouts."
      },
      {
        item: "Targeted Instagram Reel / Meta Boost",
        amount: 500,
        pct: 25,
        desc: "High-energy 20s teaser promoting the 3-project vote targeted specifically at Tier-2/3 engineering college students aged 20-23 in TN, AP/TS, UP, and Karnataka."
      },
      {
        item: "Contingency Buffer & Tool Costs",
        amount: 300,
        pct: 15,
        desc: "Automated WhatsApp API credit buffer, custom domain or certificate generation."
      }
    ]
  },

  executionTimeline: [
    { day: "Day 1 - 2", phase: "Seed & Onboard", action: "Deploy Squad Draft web asset. Recruit & onboard 60 Campus Champions with custom tracked links. Open 3-project vote. Target: 60 registrations." },
    { day: "Day 3", phase: "Wave 1 Launch", action: "Champions drop Wave 1 teaser in ~180 college WhatsApp groups with college-specific hooks. Dispatch TPO emails. A/B test placement hook vs building hook." },
    { day: "Day 4", phase: "Surge & Checkpoint", action: "Unlock College Wars live leaderboard. Evaluate channel CAC: if any channel costs >2x average, reallocate effort to top champions. Target: 250 registrations." },
    { day: "Day 5 - 6", phase: "Scarcity & Auto-Match", action: "'Seats Filling (380/500)' scarcity triggers. Auto-match pending solo registrants into full trios. Referral milestone last-call. Target: 400 registrations." },
    { day: "Day 7", phase: "Lock & Live Delivery", action: "Lock voting, announce winning project. Trigger 24h, 1h, 10m WhatsApp reminder cadence. Target: 500+ registered, 225+ live workshop attendees." }
  ],

  aiLearnings: [
    {
      prompt: "What AI suggested that was REJECTED",
      suggestion: "AI originally proposed spending budget on paid micro-influencers or mass cold DMs on Instagram/LinkedIn, and creating a detailed 8-field registration questionnaire.",
      actionTaken: "REJECTED. ₹2,000 cannot afford credible tech influencers; mass cold DMs trigger spam blocks; 8-field forms decimate conversion on mobile WhatsApp traffic. We replaced it with a 1-minute WhatsApp-first form and peer-to-peer Squads."
    },
    {
      prompt: "What changed after AI feedback",
      suggestion: "Iterated from a solitary registration form to a viral fantasy-league 'Squad Draft' mechanic with College Wars ranking and personalized AI Project Cards as instant gratification.",
      actionTaken: "ADOPTED. Provides immediate resume value at the moment of sign-up before the workshop even starts, motivating students to share their card on WhatsApp status."
    },
    {
      prompt: "What would be improved with 24 more hours",
      suggestion: "Production WhatsApp Cloud API webhook for automated 24h/1h attendance reminders, live GitHub OAuth verification, and post-workshop automated certificate dispatch.",
      actionTaken: "ROADMAP. Implemented client-side prototype simulator in this React build to demonstrate end-to-end functionality without backend dependency."
    }
  ],

  videoScript: [
    { time: "0:00 - 0:30", section: "The Problem & Student Hook", content: "Tier-2/3 final-year engineering students panic about placements with zero real AI on their resume. With only ₹2,000, standard ads fail." },
    { time: "0:30 - 1:30", section: "The Squad Draft Growth Engine", content: "Explain 3-person squads (1 brings 2), interactive project voting, and College Wars leaderboard driving organic campus competition." },
    { time: "1:30 - 2:30", section: "Live Working Asset Demo", content: "Show squad registration, instant AI personal project generator, WhatsApp 1-tap share, and the live growth dashboard." },
    { time: "2:30 - 3:00", section: "Honest Learnings & Math Realism", content: "Explain the Day 4 checkpoint logic, why influencer ads were rejected, and how ₹4 CAC is achieved." }
  ]
};
