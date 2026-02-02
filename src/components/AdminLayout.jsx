import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, ShoppingCart, Package, Users, Zap, Mail, FolderOpen,
  Menu, X, Bell, User, LogOut, Moon, Sun, Globe
} from 'lucide-react';

export default function AdminLayout({ children, isDarkMode, toggleDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/categories', label: 'Categories', icon: FolderOpen },
    { path: '/admin/customers', label: 'Customers', icon: Users },
    { path: '/admin/campaigns', label: 'Campaigns', icon: Zap },
    { path: '/admin/messages', label: 'Messages', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const notifications = [
    { id: 1, message: 'New order received', time: '5 minutes ago' },
    { id: 2, message: 'Stock running low', time: '1 hour ago' },
    { id: 3, message: 'Customer review posted', time: '2 hours ago' },
  ];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <Link to="/dashboard" className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {sidebarOpen ? 'kapee.' : 'K'}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-1 rounded hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? `${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`
                    : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="ml-3 text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <Link
            to="/profile"
            className={`flex items-center px-4 py-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <User size={20} />
            {sidebarOpen && <span className="ml-3 text-sm">Profile</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between`}>
          <div className="flex items-center flex-1">
            <input
              type="text"
              placeholder="Search..."
              className={`px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-gray-100 border-gray-300'
              } focus:outline-none focus:border-blue-500 w-64`}
            />
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <Globe size={20} />
              <span className="text-sm">EN</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className={`p-2 rounded-lg relative ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {notificationsOpen && (
                <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} z-50`}>
                  <div className={`p-4 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div key={notif.id} className={`p-4 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-100'} hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                        <p className="text-sm font-medium">{notif.message}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{notif.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <User size={20} />
              </button>

              {userMenuOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} z-50`}>
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/admin/settings"
                    className={`block px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-2 text-sm text-red-600 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
