import broom1 from '../assets/brooms_image/IMG_20200820_103047.jpg'
import broom2 from '../assets/brooms_image/IMG_20200820_103252.jpg'
import broom3 from '../assets/brooms_image/IMG_20200825_115847.jpg'
import broom4 from '../assets/brooms_image/IMG-20200717-WA0041.jpg'
import broom5 from '../assets/brooms_image/IMG_20200820_103326.jpg'
import broom6 from '../assets/brooms_image/IMG-20200807-WA0005.jpeg'
import broom7 from '../assets/brooms_image/IMG-20200807-WA0007.jpeg'
import broom8 from '../assets/brooms_image/IMG_20200825_135236.jpg'

const slideStyle = `
  @keyframes homeSlide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-home-slide {
    animation: homeSlide 25s linear infinite;
  }
`

const Home = ({ setActiveSection }) => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '10K+', label: 'Monthly Production' },
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Export Countries' }
  ]

  const features = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'Made from premium coconut fiber, completely natural and eco-friendly'
    },
    {
      icon: '🏭',
      title: 'Modern Manufacturing',
      description: 'State-of-the-art production facility with quality control at every step'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Exporting to 15+ countries with pan-India distribution network'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Premium manufacturing with international quality standards'
    }
  ]

  return (
    <div className="pt-20">
      <style>{slideStyle}</style>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Leading Broom Manufacturer
                </span>
              </div>
              <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Premium <span className="text-green-600">Coconut</span><br />
                <span className="text-green-600">Fiber Brooms</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manufacturing excellence for over 25+ years. We are India's trusted manufacturer 
                of high-quality coconut brooms, supplying across the nation and exporting to 
                15+ countries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setActiveSection('products')}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Products →
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
                >
                  Get Quote
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={broom1} alt="Premium Coco Broom" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
                  <img src={broom2} alt="Quality Brooms" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src={broom3} alt="Manufacturing" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
                  <img src={broom4} alt="Export Quality" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Astraval Brooms?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern manufacturing techniques to deliver 
              the finest coconut fiber brooms in the market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Collection</h2>
            <p className="text-xl text-gray-600">Discover the quality that sets us apart</p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="flex animate-home-slide">
              {[broom1, broom2, broom3, broom4, broom5, broom6, broom7, broom8, broom1, broom2, broom3, broom4].map((image, index) => (
                <div key={index} className="min-w-full md:min-w-1/3 lg:min-w-1/4 px-2">
                  <img 
                    src={image} 
                    alt={`Astraval Broom ${index + 1}`} 
                    className="w-full h-80 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Astraval Brooms for their cleaning needs. 
            Contact us today for bulk orders and export inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('contact')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </button>
            <button 
              onClick={() => setActiveSection('products')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Our Products
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home