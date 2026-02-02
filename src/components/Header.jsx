import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH')
  const [selectedCurrency, setSelectedCurrency] = useState('$ DOLLAR (US)')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)

  const languages = ['ENGLISH', 'FRENCH', 'SPANISH', 'GERMAN', 'PORTUGUESE']
  const currencies = ['$ DOLLAR (US)', 'EUR (EURO)', 'GBP (POUND)', 'CAD (CANADIAN)', 'AUD (AUSTRALIAN)']
  const departments = ['Wallets', 'T-Shirts', 'Shirts', 'Jeans', 'Jackets & Coats', 'Dresses', 'Skirts', 'Blouses', 'Watch']

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white px-4 md:px-8 py-3 text-sm flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-6 relative">
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowLanguageDropdown(!showLanguageDropdown)
                setShowCurrencyDropdown(false)
              }}
              className="hover:text-gray-200 transition"
            >
              {selectedLanguage} ▼
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full mt-2 left-0 bg-white text-gray-800 rounded shadow-lg z-50 min-w-max">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang)
                      setShowLanguageDropdown(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowCurrencyDropdown(!showCurrencyDropdown)
                setShowLanguageDropdown(false)
              }}
              className="hover:text-gray-200 transition"
            >
              {selectedCurrency} ▼
            </button>
            {showCurrencyDropdown && (
              <div className="absolute top-full mt-2 left-0 bg-white text-gray-800 rounded shadow-lg z-50 min-w-max">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setSelectedCurrency(curr)
                      setShowCurrencyDropdown(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100 transition"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>WELCOME TO OUR STORE!</div>
        <div className="flex gap-6">
          <button
            onClick={() => navigate('/blog')}
            className="hover:text-gray-200 transition"
          >
            BLOG
          </button>
          <button
            onClick={() => navigate('/faq')}
            className="hover:text-gray-200 transition"
          >
            FAQ
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="hover:text-gray-200 transition"
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-blue-600 text-white px-4 md:px-8 py-4 flex justify-between items-center gap-4 flex-wrap">
        <div 
          onClick={() => navigate('/')}
          className="text-2xl md:text-3xl font-bold hover:opacity-90 transition cursor-pointer"
        >
          kapee.
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 min-w-xs">
          <div className="flex bg-white rounded-full overflow-hidden">
            <input 
              type="text" 
              placeholder="Search for products, categories, brands, sku..." 
              className="flex-1 px-4 py-2 text-gray-700 text-sm outline-none"
            />
            <select className="px-3 py-2 text-gray-700 text-sm border-l border-gray-300 outline-none">
              <option>All Categories</option>
              <option>Men</option>
              <option>Women</option>
            </select>
            <button className="px-4 py-2 text-blue-600">SEARCH</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-6 items-center text-sm">
          {user ? (
            <div className="text-center hover:opacity-70 transition cursor-pointer">
              <div className="text-xs">HELLO,</div>
              <div className="font-semibold">{user.firstName}</div>
              <button
                onClick={handleLogout}
                className="text-xs text-gray-200 hover:text-white"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="text-center hover:opacity-70 transition cursor-pointer"
            >
              <div className="text-xs">HELLO,</div>
              <div className="font-semibold">SIGN IN</div>
            </button>
          )}
          <button
            onClick={() => navigate('/wishlist')}
            className="flex items-center gap-2 text-sm hover:text-gray-200 transition cursor-pointer"
          >
            <span className="text-lg">♡</span>
            <span className="font-semibold">WISHLIST</span>
            <span className="text-xs text-gray-200">{wishlistCount}</span>
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="text-right hover:opacity-80 transition"
          >
            <div className="text-xs">Cart</div>
            <div className="font-semibold flex items-center gap-2">
              <span>${cartCount > 0 ? (cartCount * 49).toFixed(2) : '0.00'}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 flex gap-6 text-sm font-semibold text-gray-800 relative">
        {/* Shop by Department Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            SHOP BY DEPARTMENT
          </button>
          {showDepartmentDropdown && (
            <div className="absolute top-full mt-2 left-0 bg-white text-gray-800 rounded shadow-lg z-50 min-w-max border border-gray-200">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => {
                    setShowDepartmentDropdown(false)
                    navigate('/')
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100 transition"
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
        </div>
        <nav className="flex gap-6 ml-auto">
          <button
            onClick={() => navigate('/')}
            className="hover:text-blue-600 transition"
          >
            HOME ▼
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="hover:text-blue-600 transition"
          >
            SHOP ▼
          </button>
          <button
            onClick={() => navigate('/')}
            className="hover:text-blue-600 transition"
          >
            PAGES ▼
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="hover:text-blue-600 transition"
          >
            BLOG ▼
          </button>
          <button
            onClick={() => navigate('/')}
            className="hover:text-blue-600 transition"
          >
            ELEMENTS ▼
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="hover:text-blue-600 transition"
          >
            BUY NOW
          </button>
        </nav>
      </div>
    </header>
  )
}
