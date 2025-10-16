function App() {
  return (
    <>
      <header className="bg-brown-dark text-white py-4 fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto px-5 flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
          <div className="text-2xl font-bold text-brown-light">Astraval Brooms</div>
          <ul className="flex list-none gap-8 md:gap-8 gap-4">
            <li><a href="#home" className="text-white no-underline transition-colors duration-300 hover:text-brown-light">Home</a></li>
            <li><a href="#about" className="text-white no-underline transition-colors duration-300 hover:text-brown-light">About</a></li>
            <li><a href="#products" className="text-white no-underline transition-colors duration-300 hover:text-brown-light">Products</a></li>
            <li><a href="#contact" className="text-white no-underline transition-colors duration-300 hover:text-brown-light">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="bg-gradient-to-r from-brown-medium to-brown-medium bg-opacity-75 text-white pt-36 pb-24 text-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="max-w-6xl mx-auto px-5 relative z-10">
            <h1 className="text-5xl md:text-6xl mb-4">Premium Coco Brooms</h1>
            <p className="text-xl mb-8">25 Years of Trust & Quality Manufacturing</p>
            <a href="#contact" className="inline-block px-8 py-3 bg-brown-medium text-white no-underline rounded-lg transition-colors duration-300 hover:bg-orange-600">Get Quote</a>
          </div>
        </section>

        <section id="products" className="py-16">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-center text-3xl mb-4">Our Premium Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">🧹 Traditional Coco Brooms</h3>
                <p className="mb-4">Handcrafted from finest coconut fibers for superior cleaning performance and durability.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">🏠 Home & Kitchen Brooms</h3>
                <p className="mb-4">Specially designed for indoor use with soft bristles that won't scratch surfaces.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">🏭 Industrial Grade Brooms</h3>
                <p className="mb-4">Heavy-duty brooms built for commercial and industrial cleaning applications.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-center text-3xl mb-4">About Astraval Brooms</h2>
            <p className="text-center mb-4 max-w-4xl mx-auto">For 25 years, Astraval Brooms has been the trusted name in premium coco broom manufacturing. We combine traditional craftsmanship with modern quality standards to deliver brooms that exceed expectations.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">✨ Premium Quality</h3>
                <p className="mb-4">Only the finest coconut fibers selected for maximum durability and cleaning efficiency.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">🏆 25 Years Experience</h3>
                <p className="mb-4">Quarter-century of expertise in broom manufacturing and customer satisfaction.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-brown-medium mb-4 text-xl">🌱 Eco-Friendly</h3>
                <p className="mb-4">100% natural coconut fiber products that are biodegradable and environmentally safe.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-brown-dark text-white">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-center text-3xl mb-4">Contact Us</h2>
            <p className="text-center mb-4">Ready to experience the Astraval difference? Get in touch for bulk orders and custom requirements.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-xl mb-2">📞 Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-2">📧 Email</h3>
                <p>astraval.org@gmail.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-2">📍 Address</h3>
                <p>Manufacturing Unit<br/>Industrial Area<br/>India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-5">
          <p>&copy; 2024 Astraval Brooms. All rights reserved. | 25 Years of Premium Quality</p>
        </div>
      </footer>
    </>
  )
}

export default App
