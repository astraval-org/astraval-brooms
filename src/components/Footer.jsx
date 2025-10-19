import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Astraval Brooms" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Astraval Brooms</h3>
                <p className="text-sm text-gray-400">Since 1999</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading manufacturer of premium coconut fiber brooms with 25+ years of excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Premium Brooms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Industrial Brooms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Export Quality</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Manufacturing Unit, India</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉️ info@astravalbrooms.com</p>
              <p>🕒 Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Astraval Brooms. All rights reserved. | Manufacturing Excellence Since 1999</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer