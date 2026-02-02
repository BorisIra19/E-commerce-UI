import { useParams, useNavigate } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Fashion Trends for 2026',
    author: 'Sarah Johnson',
    date: 'January 25, 2026',
    category: 'Fashion',
    image: '👗',
    excerpt: 'Discover the hottest fashion trends that are taking over the industry this year. From sustainable fashion to bold colors...',
    content: `Discover the hottest fashion trends that are taking over the industry this year. From sustainable fashion to bold colors, learn what's in and what's out.

The fashion world is constantly evolving, and 2026 is bringing some exciting new trends. Here are the top 10 fashion trends you need to know about:

1. **Sustainable Fashion** - Eco-friendly clothing and sustainable materials are becoming mainstream. Brands are focusing on reducing waste and promoting ethical manufacturing.

2. **Bold Colors** - Forget muted tones! Bright, vibrant colors are taking center stage. Neons, jewel tones, and bold combinations are everywhere.

3. **Oversized Silhouettes** - Comfort meets style with oversized clothing. Baggy jeans, oversized blazers, and loose-fitting dresses are the way to go.

4. **Vintage & Retro** - 90s and 2000s fashion is making a comeback. Vintage pieces mixed with modern styles create unique looks.

5. **Minimalist Elegance** - Clean lines, neutral colors, and simple designs are trending. Less is more in 2026.

6. **Gender-Neutral Fashion** - Clothing is becoming more inclusive and gender-neutral, breaking traditional fashion boundaries.

7. **Statement Accessories** - Bold jewelry, oversized bags, and unique accessories are making statements.

8. **Tech Fabrics** - Innovative, high-tech materials that are breathable and sustainable are becoming popular.

9. **Maxi Everything** - Maxi skirts, maxi dresses, and maxi coats are longer than ever.

10. **Personal Style** - The most important trend? Expressing your individuality and personal style.

Fashion should be fun and expressive. Mix and match these trends to create a look that's uniquely yours!`
  },
  {
    id: 2,
    title: 'How to Care for Your Designer Clothes',
    author: 'Mike Chen',
    date: 'January 20, 2026',
    category: 'Style Tips',
    image: '✨',
    excerpt: 'Learn expert tips on how to properly care for and maintain your favorite designer pieces to make them last longer...',
    content: `Learn expert tips on how to properly care for and maintain your favorite designer pieces to make them last longer and look brand new.

Designer clothes are an investment, and proper care is essential to keep them looking pristine. Here are expert tips to help you maintain your luxury wardrobe:

**General Care Tips:**
- Always read and follow the garment's care label instructions.
- Invest in quality hangers - wooden or padded hangers are best for delicate pieces.
- Store clothes in a cool, dry place away from direct sunlight.
- Avoid overcrowding your closet - clothes need space to breathe.

**Washing & Cleaning:**
- Hand wash delicate items whenever possible.
- Use cold water and mild detergent for colored garments.
- Turn clothes inside out before washing to protect colors and prints.
- Never use bleach on designer fabrics unless specified on the label.
- Air dry whenever possible - heat from dryers can damage fabrics.

**Stain Removal:**
- Treat stains immediately for better results.
- Test any cleaning product on an inconspicuous area first.
- Use white cloths or paper towels to blot stains, never rub.

**Storage Tips:**
- Use acid-free tissue paper to prevent yellowing.
- Store sweaters folded rather than hung to prevent stretching.
- Keep seasonal items in breathable storage containers.
- Use cedar blocks or lavender sachets to prevent moths.

**Professional Care:**
- Dry clean delicate items at least once a season.
- Choose reputable dry cleaners experienced with luxury brands.
- Ask for special handling for embellished or delicate pieces.

With proper care, your designer clothes will last for years and maintain their value!`
  },
  {
    id: 3,
    title: 'Summer Collection Launch Announcement',
    author: 'Emma Wilson',
    date: 'January 15, 2026',
    category: 'News',
    image: '☀️',
    excerpt: 'We\'re excited to announce our brand new summer collection featuring vibrant colors and comfortable fabrics...',
    content: `We're excited to announce our brand new summer collection featuring vibrant colors and comfortable fabrics perfect for the season.

This summer, Kapee is bringing you a fresh collection that combines style, comfort, and sustainability. Here's what you can expect:

**Collection Highlights:**

**Colors:** Our summer palette features vibrant turquoise, sunset orange, and tropical green. We've also included classic whites and soft pastels for those who prefer understated elegance.

**Fabrics:** All pieces are made from breathable, lightweight materials perfect for warm weather. We use sustainable cotton and linen blends that are kind to both you and the environment.

**Styles:**
- Flowing sundresses and maxi skirts
- Lightweight linen shirts and blouses
- Comfortable shorts in various lengths
- Versatile swim cover-ups
- Statement accessory pieces

**Sustainability:** 
100% of our summer collection uses eco-friendly materials and ethical manufacturing practices. We're proud to say that this collection has the lowest carbon footprint of any collection we've launched.

**Pricing:**
Pieces range from $25 for basics to $150 for statement pieces. We're also offering early bird discounts for loyal customers.

**Availability:**
The full collection will be available starting February 1st, with early access for newsletter subscribers on January 30th.

Get ready to make this the most stylish and comfortable summer ever!`
  },
  {
    id: 4,
    title: 'Sustainable Fashion: Making a Difference',
    author: 'Lisa Martinez',
    date: 'January 10, 2026',
    category: 'Sustainability',
    image: '🌿',
    excerpt: 'Explore how our brand is committed to sustainable practices and eco-friendly fashion choices...',
    content: `Explore how our brand is committed to sustainable practices and eco-friendly fashion choices for a better future.

At Kapee, we believe that fashion and sustainability go hand in hand. We're committed to making a positive impact on our planet through responsible business practices.

**Our Sustainability Commitments:**

**1. Ethical Manufacturing**
We partner with factories that provide fair wages, safe working conditions, and respect for workers' rights. We regularly audit our manufacturing partners to ensure compliance.

**2. Sustainable Materials**
- Organic cotton grown without harmful pesticides
- Recycled polyester made from plastic bottles
- Linen sourced responsibly
- Innovative materials made from agricultural waste

**3. Reducing Waste**
- Our packaging is 100% recyclable and made from recycled materials
- We minimize fabric waste through efficient cutting and pattern design
- Excess fabric is donated or upcycled into new products

**4. Carbon Footprint**
We've committed to becoming carbon neutral by 2030 through:
- Renewable energy in our facilities
- Local sourcing where possible
- Optimized logistics and shipping methods

**5. Transparency**
We provide detailed information about every product's origin and manufacturing process. You can scan a QR code on any garment to see its journey from production to your closet.

**How You Can Help:**
- Choose quality over quantity
- Care for your clothes to extend their lifespan
- Donate or recycle old clothing responsibly
- Support brands that prioritize sustainability

Together, we can make fashion more sustainable and protect our planet for future generations!`
  }
]

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h2>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="mb-8 text-blue-500 hover:text-blue-700 font-semibold flex items-center"
        >
          ← Back to Blog
        </button>

        {/* Post Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>

          {/* Post Meta */}
          <div className="flex items-center gap-6 text-gray-600 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{post.image}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{post.author}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Post Image */}
        <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center text-9xl mb-12">
          {post.image}
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {post.content.split('\n\n').map((paragraph, index) => (
            <div key={index} className="mb-6">
              {paragraph.split('\n').map((line, i) => {
                // Handle bold text and list items
                if (line.startsWith('- ')) {
                  return (
                    <div key={i} className="text-gray-700 ml-4 mb-2">
                      <span className="text-blue-600 font-bold">•</span> {line.substring(2)}
                    </div>
                  )
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={i} className="text-gray-800 font-bold text-lg">
                      {line.replace(/\*\*/g, '')}
                    </p>
                  )
                }
                return (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {line}
                  </p>
                )
              })}
            </div>
          ))}
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-5xl">
                    {relatedPost.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{relatedPost.date}</p>
                    <button
                      onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Share This Article</h2>
          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-500 transition font-semibold">
              Twitter
            </button>
            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition font-semibold">
              Pinterest
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
