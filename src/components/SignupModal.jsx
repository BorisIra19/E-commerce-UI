import { useState, useEffect } from 'react'

export default function SignupModal() {
  const [showModal, setShowModal] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Check if user has opted out
    const hasOptedOut = localStorage.getItem('signupModalOptOut')
    if (!hasOptedOut) {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 2000) // Show modal after 2 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSignup = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Email:', email)
    setShowModal(false)
    setEmail('')
  }

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('signupModalOptOut', 'true')
    }
    setShowModal(false)
    setEmail('')
  }

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div
            className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1515612141207-8ddf1d3989df?w=600&h=600&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)',
                zIndex: -1,
              }}
            ></div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-white text-3xl hover:opacity-80 transition"
            >
              ✕
            </button>

            {/* Content */}
            <div className="relative z-10 px-8 py-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">SIGN UP & GET 40% OFF</h2>

              <p className="text-white text-lg mb-8 leading-relaxed">
                Signup today for free and be the first to hear of special promotions, new arrivals, designer and offers news.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSignup} className="mb-6">
                <div className="flex flex-col sm:flex-row gap-0 bg-white rounded overflow-hidden mb-6">
                  <div className="flex-1 flex items-center px-4 text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-1 py-3 px-2 outline-none text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-700 transition whitespace-nowrap"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>

              {/* Checkbox */}
              <div className="flex items-center justify-center gap-3 text-white">
                <input
                  type="checkbox"
                  id="dontShowAgain"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="w-4 h-4 cursor-pointer border border-white"
                />
                <label htmlFor="dontShowAgain" className="text-sm cursor-pointer">
                  Don't show this popup again
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
