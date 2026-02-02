import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FAQ() {
  const navigate = useNavigate()
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      category: 'Shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days. Free shipping is available on orders over $150.'
    },
    {
      id: 2,
      category: 'Returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all items. Products must be in original condition with tags attached. Once we receive your return, refunds are processed within 5-10 business days.'
    },
    {
      id: 3,
      category: 'Payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. We also offer interest-free installment plans.'
    },
    {
      id: 4,
      category: 'Orders',
      question: 'Can I track my order?',
      answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can use this to monitor your package in real-time through our tracking system.'
    },
    {
      id: 5,
      category: 'Sizing',
      question: 'How do I know what size to order?',
      answer: 'Check our detailed size chart available on each product page. We provide measurements in both inches and centimeters. If you\'re unsure, we offer free exchanges within 30 days.'
    },
    {
      id: 6,
      category: 'Account',
      question: 'How do I create an account?',
      answer: 'Click the "Sign In" button in the header and select "Create Account". Fill in your email and password, and you\'re ready to go! Having an account speeds up checkout and lets you track orders.'
    },
    {
      id: 7,
      category: 'Products',
      question: 'Are your products original/authentic?',
      answer: 'Yes, all our products are 100% authentic and sourced directly from manufacturers. We guarantee quality and authenticity on every purchase.'
    },
    {
      id: 8,
      category: 'Support',
      question: 'How can I contact customer support?',
      answer: 'You can reach us via email at support@kapee.com, call +1 (234) 567-8900, or use our live chat feature (available 24/7). Visit our Contact Us page for more details.'
    }
  ]

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-blue-500 hover:text-blue-700 font-semibold flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-lg mb-8">Find answers to common questions about our products, shipping, returns, and more.</p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              {/* Question */}
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {openFAQ === faq.id ? '−' : '+'}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 text-left">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold ml-4 flex-shrink-0">
                  {faq.category}
                </span>
              </button>

              {/* Answer */}
              {openFAQ === faq.id && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is ready to help.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
