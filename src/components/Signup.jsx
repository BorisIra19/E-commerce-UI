import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSignup = (e) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }
    if (!agreeTerms) {
      setError('Please agree to the terms and conditions')
      return
    }
    const userData = { firstName, lastName, email, password }
    if (signup(userData)) {
      navigate('/')
    } else {
      setError('User already exists')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* Signup Modal - Compact */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <button
            onClick={() => navigate('/login')}
            className="text-white hover:text-gray-200 text-xl font-bold"
          >
            X
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSignup} className="p-6 space-y-4">
          {error && (
            <div className="text-red-600 text-center font-semibold">
              {error}
            </div>
          )}
          {/* First Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-gray-700"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 text-xs font-semibold"
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-gray-700"
            />
          </div>

          {/* Terms Agreement */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-700">I agree to the <span className="text-blue-600 font-semibold">Terms & Conditions</span></span>
          </label>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-300 text-sm mt-6"
          >
            CREATE ACCOUNT
          </button>

          {/* Login Link */}
          <p className="text-center text-xs text-gray-600 mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
