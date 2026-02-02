export default function Sidebar() {
  const categories = [
    'Wallets',
    'T-Shirts',
    'Shirts',
    'Jeans',
    'Jackets & Coats',
    'Dresses',
    'Skirts',
    'Blouses'
  ]

  return (
    <aside className="hidden lg:flex lg:w-56 lg:flex-col bg-white border-r border-gray-300 p-8 relative">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Shop By Category</h2>
      <nav className="space-y-4">
        {categories.map((category, idx) => (
          <a
            key={idx}
            href="#"
            className="block text-gray-700 text-lg hover:text-gray-900 hover:font-semibold transition"
          >
            {category}
          </a>
        ))}
      </nav>
    </aside>
  )
}
