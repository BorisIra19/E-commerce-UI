import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const navigate = useNavigate()

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Fashion Trends for 2026',
      author: 'Sarah Johnson',
      date: 'January 25, 2026',
      category: 'Fashion',
      image: '👗',
      excerpt: 'Discover the hottest fashion trends that are taking over the industry this year. From sustainable fashion to bold colors...',
      content: 'Discover the hottest fashion trends that are taking over the industry this year. From sustainable fashion to bold colors, learn what\'s in and what\'s out.'
    },
    {
      id: 2,
      title: 'How to Care for Your Designer Clothes',
      author: 'Mike Chen',
      date: 'January 20, 2026',
      category: 'Style Tips',
      image: '✨',
      excerpt: 'Learn expert tips on how to properly care for and maintain your favorite designer pieces to make them last longer...',
      content: 'Learn expert tips on how to properly care for and maintain your favorite designer pieces to make them last longer and look brand new.'
    },
    {
      id: 3,
      title: 'Summer Collection Launch Announcement',
      author: 'Emma Wilson',
      date: 'January 15, 2026',
      category: 'News',
      image: '☀️',
      excerpt: 'We\'re excited to announce our brand new summer collection featuring vibrant colors and comfortable fabrics...',
      content: 'We\'re excited to announce our brand new summer collection featuring vibrant colors and comfortable fabrics perfect for the season.'
    },
    {
      id: 4,
      title: 'Sustainable Fashion: Making a Difference',
      author: 'Lisa Martinez',
      date: 'January 10, 2026',
      category: 'Sustainability',
      image: '🌿',
      excerpt: 'Explore how our brand is committed to sustainable practices and eco-friendly fashion choices...',
      content: 'Explore how our brand is committed to sustainable practices and eco-friendly fashion choices for a better future.'
    }
  ]

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-blue-500 hover:text-blue-700 font-semibold flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-gray-600 text-lg mb-12">Stay updated with the latest fashion trends, tips, and news from Kapee.</p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  Read More
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6">Get the latest fashion tips and exclusive offers delivered to your inbox</p>
          
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-800 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
