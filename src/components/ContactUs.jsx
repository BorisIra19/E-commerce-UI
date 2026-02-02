import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-blue-500 hover:text-blue-700 font-semibold flex items-center"
        >
          ← Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 text-lg">
                  <a href="mailto:support@kapee.com" className="text-blue-600 hover:underline">
                    borisiradukunda18@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-2">Response time: Within 24 hours and all seven days</p>
              </div>

              {/* Phone */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 text-lg">
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                      +(250)783081398
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-2">Monday - Friday: 9 AM - 6 PM EST</p>
              </div>

              {/* Address */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Office Address</h3>
                <p className="text-gray-600">
                  KK113 ST KIGALI- RWNDA<br />
                  Kigali, KK113 ST<br />
                  RWANDA
                </p>
              </div>

              {/* Live Chat */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Live Chat</h3>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold">
                  Start Live Chat
                </button>
                <p className="text-gray-600 text-sm mt-2">Available: 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
