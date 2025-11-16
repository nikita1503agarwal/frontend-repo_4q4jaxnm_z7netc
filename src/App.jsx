import { useMemo, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import GradientHeader from './components/GradientHeader'
import { StatCard, TopicCard, PreferenceCard } from './components/Cards'
import ProgressBar from './components/ProgressBar'
import { Smile, Rocket, Feather, Sparkles, CheckCircle2 } from 'lucide-react'

function Home() {
  return (
    <div className="space-y-8">
      <GradientHeader
        title="Welcome back, Learner"
        subtitle="Your AI companion adapts your plan daily. Here's a quick snapshot."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Today’s Topic" value="Linear Regression" hint="Suggested based on recent performance" />
          <StatCard title="Streak" value="12 days" hint="Consistency builds mastery" />
          <StatCard title="Completion" value="68%" hint={<ProgressBar value={68} />} />
        </div>
      </GradientHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Today’s Plan</h3>
          <div className="mt-4 space-y-3">
            {[
              { title: 'Concept review: Cost Function', label: 'review_topic' },
              { title: 'New lesson: Gradient Descent', label: 'new_topic' },
              { title: 'Active recall quiz', label: 'new_topic' },
            ].map((t, i) => (
              <TopicCard key={i} {...t} />
            ))}
          </div>
          <Link to="/quiz" className="mt-6 inline-flex items-center px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
            Start Quiz
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Progress Summary</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Foundation</span>
              <span className="text-slate-900 font-medium">82%</span>
            </div>
            <ProgressBar value={82} />
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Applied Skills</span>
              <span className="text-slate-900 font-medium">56%</span>
            </div>
            <ProgressBar value={56} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Schedule() {
  const topics = useMemo(() => [
    { title: 'Linear Algebra Basics', label: 'review_topic' },
    { title: 'Gradient Descent', label: 'new_topic' },
    { title: 'Rest / Reflection', label: 'rest_day' },
    { title: 'Regularization', label: 'new_topic' },
    { title: 'Model Evaluation', label: 'review_topic' },
  ], [])

  return (
    <div className="space-y-8">
      <GradientHeader title="Learning Schedule" subtitle="A calm, balanced timeline of your upcoming sessions." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t, i) => (
          <TopicCard key={i} {...t} />
        ))}
      </div>
    </div>
  )
}

function Quiz() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const questions = [
    {
      q: 'What does the learning rate control in gradient descent?',
      options: [
        'The number of features',
        'The step size for parameter updates',
        'The regularization strength',
        'The number of epochs'
      ],
      answer: 1
    },
    {
      q: 'Which metric is commonly used for regression tasks?',
      options: ['Accuracy', 'Cross-entropy', 'Mean Squared Error', 'F1-score'],
      answer: 2
    }
  ]

  const handleAnswer = (idx) => {
    if (idx === questions[step].answer) setScore((s) => s + 1)
    if (step < questions.length - 1) setStep(step + 1)
  }

  const progress = ((step) / questions.length) * 100

  return (
    <div className="space-y-8">
      <GradientHeader title="Quick Check" subtitle="Short, friendly quiz to reinforce concepts.">
        <ProgressBar value={progress} />
      </GradientHeader>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-slate-900 font-medium">{questions[step].q}</p>
        <div className="mt-4 grid gap-3">
          {questions[step].options.map((o, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      {step === questions.length - 1 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-slate-900">When ready, submit to see your adaptive plan.</p>
          <Link to="/results" className="mt-4 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#2ECFCF] to-[#1B2A41] text-white">Submit</Link>
        </div>
      )}
    </div>
  )
}

function Results() {
  return (
    <div className="space-y-8">
      <GradientHeader title="Your Adaptive Plan" subtitle="Based on your responses, we recommend the following path.">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50 text-green-700 border border-green-200">
            <CheckCircle2 className="h-4 w-4" /> Proceed
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-yellow-50 text-yellow-700 border border-yellow-200">
            <CheckCircle2 className="h-4 w-4" /> Review
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="h-4 w-4" /> Accelerate
          </div>
        </div>
      </GradientHeader>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-slate-900 font-medium">Summary</p>
        <div className="mt-4 grid gap-4">
          <div className="h-2 rounded-full bg-gradient-to-r from-[#2ECFCF] via-[#A78BFA] to-[#1B2A41]" />
          <div className="grid grid-cols-3 text-center text-sm text-slate-600">
            <span>Memory</span>
            <span>Understanding</span>
            <span>Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Notifications() {
  const cards = [
    { title: 'Playful', tone: 'playful', icon: Smile },
    { title: 'Motivating', tone: 'motivating', icon: Rocket },
    { title: 'Soft', tone: 'soft', icon: Feather },
    { title: 'Gen Z', tone: 'genz', icon: Sparkles },
  ]
  return (
    <div className="space-y-8">
      <GradientHeader title="Notification Preferences" subtitle="Choose how your companion speaks to you." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => (
          <PreferenceCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="space-y-8">
      <GradientHeader title="Profile" subtitle="Manage your details and language preferences." />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 grid gap-4">
        <div>
          <label className="text-sm text-slate-600">Name</label>
          <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-slate-600">Language</label>
          <select className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  )
}

function Shell() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default Shell
