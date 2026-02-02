import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    if (login(email, password)) {
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Blue Background with Message */}
      <div className="hidden md:flex md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-700 text-white flex-col justify-center px-8 py-12">
        <h1 className="text-5xl font-bold mb-6">Login</h1>
        <p className="text-xl leading-relaxed">
          Get access to your Orders, Wishlist and Recommendations.
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-2/3 bg-white flex items-center justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-md">
          {/* Close Button for Mobile */}
          <button
            onClick={() => navigate('/')}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            X
          </button>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="text-red-600 text-center font-semibold">
                {error}
              </div>
            )}
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter Username/Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 text-xs font-semibold"
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                />
                <span className="text-blue-600 font-semibold">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Lost your password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 text-lg"
            >
              LOG IN
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
