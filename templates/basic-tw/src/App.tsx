import { useBasic, useQuery } from '@basictech/react'
import './App.css'

const deleteCursorIcon = `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MEE1RkEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIzIDYgNSA2IDIxIDYiPjwvcG9seWxpbmU+PHBhdGggZD0iTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyIj48L3BhdGg+PC9zdmc+),auto`

function App() {
  const { db } = useBasic()
  const emojis = useQuery(() => db.collection('emojis').getAll())

  return (
    <>
      <h1 className="text-4xl font-bold font-mono">create-lofi-app</h1>
      <div className="card">
        <button onClick={() => db.collection('emojis').add({ value: `${['✨', '🌟', '💫', '⭐', '🌠', '🎇', '🎆', '🌈', '🌸', '🌺', '🍀', '🎨', '🎭', '🎪', '🎡', '🎢', '🎠'][Math.floor(Math.random() * 17)]}` })}>
          new ✨
        </button>
        <div className="flex flex-row gap-4 justify-center min-h-[60px] ">
          {emojis?.map((e: { id: string, value: string }) => (
            <div key={e.id} className="rounded-md m-2 p-2" style={{ cursor: deleteCursorIcon }} onClick={() => db.collection('emojis').delete(e.id)}>
              {e.value}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-5xl mx-auto px-4">
        <a href="https://docs.basic.tech" target="_blank" className="card-link group">
          <h2 className="card-title">Basic Docs</h2>
          <p className="card-description">
            Auth, sync, and database
          </p>
        </a>

        <a href="https://vite-pwa-org.netlify.app/" target="_blank" className="card-link group">
          <h2 className="card-title">PWA Reference</h2>
          <p className="card-description">
            Enable offline capabilities
          </p>
        </a>

        <a href="https://tailwindcss.com/docs" target="_blank" className="card-link group">
          <h2 className="card-title">Tailwind</h2>
          <p className="card-description">
            Styling framework
          </p>
        </a>
      </div>
    </>
  )
}

export default App
