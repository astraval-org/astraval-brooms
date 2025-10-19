import { useState } from 'react'
import { products } from '../data/products'

// Add CSS for sliding animation
const slideStyle = `
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-slide {
    animation: slide 20s linear infinite;
  }
`

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ['All', 'Premium', 'Standard', 'Industrial', 'Export', 'Specialty', 'Traditional', 'Compact', 'Professional', 'Eco']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-2xl" />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold text-gray-800">Price: </span>
                <span className="text-green-600 font-bold">{product.price}</span>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <style>{slideStyle}</style>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of premium coconut fiber brooms, designed for every cleaning need. 
            From household use to industrial applications, we have the perfect broom for you.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 2 && (
                        <li className="text-sm text-green-600 font-medium">
                          +{product.features.length - 2} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-bold">{product.price}</span>
                    <div className="space-x-2">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                      >
                        View Details
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Astraval Brooms?</h2>
            <p className="text-xl text-gray-600">Quality features that make the difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">Made from premium coconut fiber</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Durable</h3>
              <p className="text-gray-600 text-sm">Long-lasting performance</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Biodegradable and sustainable</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">ISO certified manufacturing</p>
            </div>
          </div>
          
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="flex animate-slide">
              {products.concat(products).map((product, index) => (
                <div key={index} className="min-w-full md:min-w-1/3 lg:min-w-1/4 px-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover rounded-xl"
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
          <h2 className="text-4xl font-bold text-white mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We offer custom manufacturing for bulk orders and specific requirements. 
            Contact us to discuss your needs.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request Custom Quote
          </button>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Products