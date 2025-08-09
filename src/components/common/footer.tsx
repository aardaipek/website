import { useState } from 'react'

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date())
  return (
    <footer className="w-full p-4 mt-auto">
      <div className="mx-auto max-w-screen-xl flex items-center justify-center">
        <span className="block text-sm text-center text-gray-300">
          Arda Ipek {currentDate.getFullYear()}. ❤{' '}
          <span className="text-sm text-center text-red-200">Sumy</span>
        </span>
      </div>
    </footer>
  )
}
