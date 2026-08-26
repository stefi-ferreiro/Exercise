import { useMemo, useState } from 'react'
import './App.css'

type Category = 'MathVoice' | 'MathVoice for Families'
type Filter = 'All' | Category

type Activity = {
  id: number
  category: Category
  title: string
  dateLabel: string
  image: string
  done?: boolean
}

const activities: Activity[] = [
  {
    id: 1,
    category: 'MathVoice for Families',
    title: 'Multiplying Within 100',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-14.png',
  },
  {
    id: 2,
    category: 'MathVoice for Families',
    title: 'Multiplying one-digit numbers by multiples of 10 game board',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-16.png',
  },
  {
    id: 3,
    category: 'MathVoice',
    title: 'Representing multiplication problems with equal groups',
    dateLabel: 'Assignment date: April 5, 2026',
    image: '/assets/activity-02.png',
  },
  {
    id: 4,
    category: 'MathVoice for Families',
    title: 'Representing multiplication problems with arrays',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-03.png',
  },
  {
    id: 5,
    category: 'MathVoice for Families',
    title: 'Multiplying Within 100',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-14.png',
  },
  {
    id: 6,
    category: 'MathVoice for Families',
    title: 'Multiplying one-digit numbers by multiples of 10 game board',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-16.png',
  },
  {
    id: 7,
    category: 'MathVoice',
    title: 'Representing multiplication problems with equal groups',
    dateLabel: 'Assignment date: April 5, 2026',
    image: '/assets/activity-02.png',
  },
  {
    id: 8,
    category: 'MathVoice for Families',
    title: 'Representing multiplication problems with arrays',
    dateLabel: 'Due date: April 5, 2026',
    image: '/assets/activity-03.png',
  },
  {
    id: 9,
    category: 'MathVoice',
    title: 'Multiplication challenge completed',
    dateLabel: 'Completed: April 2, 2026',
    image: '/assets/activity-02.png',
    done: true,
  },
  {
    id: 10,
    category: 'MathVoice for Families',
    title: 'Array practice completed',
    dateLabel: 'Completed: April 3, 2026',
    image: '/assets/activity-03.png',
    done: true,
  },
]

function Logo() {
  return (
    <div className="logo" aria-label="MathVoice">
      <img className="logo-wordmark" src="/assets/mathvoice-wordmark.svg" alt="" />
      <img className="logo-o" src="/assets/mathvoice-o.svg" alt="" />
      <img className="logo-subtitle" src="/assets/powermylearning.svg" alt="" />
    </div>
  )
}

function ActivityCard({
  activity,
  onPlay,
}: {
  activity: Activity
  onPlay: (title: string) => void
}) {
  const isMathVoice = activity.category === 'MathVoice'

  return (
    <article
      className={`activity-card ${isMathVoice ? 'activity-card--orange' : ''}`}
    >
      <div className="activity-card__visual">
        <span className="badge">{activity.category}</span>
        <img
          className="activity-card__thumbnail"
          src={activity.image}
          alt={`Thumbnail for ${activity.title}`}
        />
      </div>
      <div className="activity-card__content">
        <button
          className="audio-button"
          type="button"
          aria-label={`Play audio for ${activity.title}`}
          onClick={() => onPlay(activity.title)}
        >
          <img src="/assets/volume.svg" alt="" />
        </button>
        <h2>{activity.title}</h2>
        <p>{activity.dateLabel}</p>
      </div>
    </article>
  )
}

function App() {
  const [tab, setTab] = useState<'new' | 'done'>('new')
  const [filter, setFilter] = useState<Filter>('All')
  const [language, setLanguage] = useState('English')
  const [announcement, setAnnouncement] = useState('')

  const visibleActivities = useMemo(
    () =>
      activities.filter(
        (activity) =>
          activity.done === (tab === 'done') &&
          (filter === 'All' || activity.category === filter),
      ),
    [filter, tab],
  )

  const playAudio = (title: string) => {
    setAnnouncement(`Playing audio for ${title}`)

    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!AudioContextClass) return

    const audioContext = new AudioContextClass()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(
      660,
      audioContext.currentTime + 0.18,
    )
    gain.gain.setValueAtTime(0.08, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.25,
    )
    oscillator.connect(gain)
    gain.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.25)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <Logo />
        <div className="profile-area">
          <label className="language-select">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option>English</option>
              <option>Español</option>
            </select>
            <img src="/assets/chevron.svg" alt="" />
          </label>
          <span className="divider" aria-hidden="true" />
          <div className="profile">
            <img src="/assets/avatar.svg" alt="" />
            <div>
              <strong>Alberto F.</strong>
              <span>AlbertoV987</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <h1>Activities</h1>

        <div className="tabs" role="tablist" aria-label="Activity status">
          <button
            role="tab"
            aria-selected={tab === 'new'}
            className={tab === 'new' ? 'active' : ''}
            onClick={() => setTab('new')}
          >
            New <span>8</span>
          </button>
          <button
            role="tab"
            aria-selected={tab === 'done'}
            className={tab === 'done' ? 'active' : ''}
            onClick={() => setTab('done')}
          >
            Done <span>2</span>
          </button>
        </div>

        <div className="filters" aria-label="Filter activities">
          {(['All', 'MathVoice', 'MathVoice for Families'] as Filter[]).map(
            (option) => (
              <button
                type="button"
                key={option}
                className={filter === option ? 'active' : ''}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ),
          )}
        </div>

        {visibleActivities.length > 0 ? (
          <section className="activity-grid" aria-label="Activities">
            {visibleActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onPlay={playAudio}
              />
            ))}
          </section>
        ) : (
          <p className="empty-state">No activities match this filter.</p>
        )}
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
      </main>
    </div>
  )
}

export default App
