import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Send email notification to notify@astraval.com
    alert('Thank you for your inquiry! We will get back to you soon. A notification has been sent to our team at notify@astraval.com.')
  }

  const contactInfo = [
    {
      title: 'Head Office',
      details: [
        '📍 Manufacturing Unit',
        'Industrial Area, India',
        '📞 +91 XXXXX XXXXX',
        '✉️ notify@astraval.com'
      ],
      icon: '🏢'
    },
    {
      title: 'Export Department',
      details: [
        '📞 +91 XXXXX XXXXX',
        '✉️ export@astraval.com',
        '🌍 Serving 15+ Countries',
        '📋 Export Documentation'
      ],
      icon: '🌍'
    },
    {
      title: 'Sales & Marketing',
      details: [
        '📞 +91 XXXXX XXXXX',
        '✉️ sales@astraval.com',
        '💼 Bulk Orders Welcome',
        '🤝 Partnership Opportunities'
      ],
      icon: '💼'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'Our minimum order quantity varies by product type. For standard products, it\'s typically 100 pieces. For custom orders, please contact us for specific requirements.'
    },
    {
      question: 'Do you provide international shipping?',
      answer: 'Yes, we export to 15+ countries worldwide. We handle all export documentation and provide competitive international shipping rates.'
    },
    {
      question: 'Can you manufacture custom designs?',
      answer: 'Absolutely! We offer custom manufacturing services including specific sizes, designs, and private labeling options.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment terms including advance payment, letter of credit, and other mutually agreed arrangements for established clients.'
    },
    {
      question: 'How long does production take?',
      answer: 'Standard orders typically take 7-14 days. Custom orders may take 2-4 weeks depending on specifications and quantity.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your broom manufacturing needs? Get in touch with our team for 
            bulk orders, custom solutions, and export inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="export">Export Inquiry</option>
                    <option value="custom">Custom Manufacturing</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please provide details about your requirements, quantity needed, timeline, etc."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">⚡</span>
                    <span className="text-gray-700">Email inquiries: Within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">📞</span>
                    <span className="text-gray-700">Phone calls: Immediate response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">💼</span>
                    <span className="text-gray-700">Bulk orders: Same day quote</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">🌍</span>
                    <span className="text-gray-700">Export inquiries: Within 4 hours</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Contact</h3>
                <p className="text-gray-700 mb-4">
                  For urgent orders or time-sensitive inquiries:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">📞 +91 XXXXX XXXXX (24/7)</p>
                  <p className="font-semibold text-gray-800">✉️ urgent@astraval.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Facility</h2>
            <p className="text-xl text-gray-600">Located in the heart of India's manufacturing hub</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.621766267434!2d77.85812279999999!3d8.3403268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b047fd70590914f%3A0x596d2521298aabb0!2sAstraval%20Brooms!5e0!3m2!1sen!2sin!4v1760859969891!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Astraval Brooms Location"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://share.google/BadPDTs1vM0e5SpzI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span>📍</span>
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact