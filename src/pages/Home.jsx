import { motion } from "framer-motion";
import broom1 from "../assets/brooms_image/IMG_20200820_103047.jpg";
import broom2 from "../assets/brooms_image/IMG_20200820_103252.jpg";
import broom3 from "../assets/brooms_image/IMG_20200825_115847.jpg";
import broom4 from "../assets/brooms_image/IMG-20200717-WA0041.jpg";
import broom5 from "../assets/brooms_image/IMG_20200820_103326.jpg";
import broom6 from "../assets/brooms_image/IMG-20200807-WA0005.jpeg";
import broom7 from "../assets/brooms_image/IMG-20200807-WA0007.jpeg";
import broom8 from "../assets/brooms_image/IMG_20200825_135236.jpg";

const slideStyle = `
  @keyframes homeSlide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-home-slide {
    animation: homeSlide 40s linear infinite;
    display: flex;
    width: max-content;
  }
  .animate-home-slide:hover {
    animation-play-state: paused;
  }

  @keyframes floatTrophy {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float-trophy {
    animation: floatTrophy 3s ease-in-out infinite;
  }
`;

const Home = ({ setActiveSection }) => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "40K+", label: "Monthly Production" },
    { number: "5000+", label: "Happy Direct Customers" },
  ];

  const features = [
    {
      icon: "🌿",
      title: "100% Natural",
      description:
        "Made from premium coconut fiber, completely natural and eco-friendly",
    },
    {
      icon: "🏭",
      title: "Modern Manufacturing",
      description:
        "State-of-the-art production facility with quality control at every step",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description:
        "Premium manufacturing with international quality standards",
    },
  ];

  const images = [
    broom1,
    broom2,
    broom3,
    broom4,
    broom5,
    broom6,
    broom7,
    broom8,
    broom1,
    broom2,
    broom3,
    broom4,
  ];

  return (
    <div className="pt-0 w-full">
      <style>{slideStyle}</style>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-start pt-1">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center -mt-10">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  🏆 Leading Broom Manufacturer
                </span>
              </div>

              <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Premium <span className="text-green-600">Coco &</span>
                <br />
                <span className="text-green-600">Nipah brooms</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manufacturing excellence for over 25+ years. We are India's trusted manufacturer of high-quality coconut brooms, supplying across the nation and exporting to 15+ countries worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSection("products")}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 shadow-lg transition-all"
                >
                  Explore Products →
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSection("contact")}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
                >
                  Get Quote
                </motion.button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                    }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative pt-2"
            >
              <div className="grid grid-cols-2 gap-4 pt-20">
                <div className="space-y-4">
                  <img src={broom1} alt="Premium Coco Broom" className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" />
                  <img src={broom2} alt="Quality Brooms" className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src={broom3} alt="Manufacturing" className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" />
                  <img src={broom4} alt="Export Quality" className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-[400px] h-[400px] object-cover" />
                </div>
              </div>

              {/* Floating Trophy */}
              <motion.div
                className="absolute top-20 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg float-trophy"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">🏆</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Why Choose Astraval Brooms?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
          >
            We combine traditional craftsmanship with modern manufacturing techniques to deliver the finest coconut fiber brooms in the market.
          </motion.p>

          <div className="flex justify-end">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-all shadow-sm hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SLIDER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Our Premium Collection
          </motion.h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover the quality that sets us apart
          </p>

          {/* Premium Animated Slider */}
          <div className="relative overflow-hidden ">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-home-slide gap-6 px-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="min-w-[250px] md:min-w-[320px] lg:min-w-[380px] relative group"
                >
                  <img
                    src={image}
                    alt={`Astraval Broom ${index + 1}`}
                    className="w-full h-72 object-cover rounded-2xl shadow-lg transition-transform duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute bottom-4 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-base font-semibold drop-shadow-lg">
                    Astraval Broom {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              🌿 Premium Collection
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Experience Premium Quality?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who trust Astraval Brooms for their cleaning needs. Contact us today for bulk orders and <b>export inquiries.</b>
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSection("contact")}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSection("products")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Our Products
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
