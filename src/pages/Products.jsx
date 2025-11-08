import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";

const slideStyle = `
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-slide {
    animation: slide 20s linear infinite;
  }
`;

const Products = ({ setActiveSection, initialCategory = "All" }) => {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Whenever a new initialCategory is passed, update state
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    const categories = [
        "All",
        "Premium",
        "Standard",
        "Industrial",
        "Export",
        "Specialty",
        "Traditional",
        "Compact",
        "Professional",
        "Eco",
    ];

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const ProductModal = ({ product, onClose }) => {
        if (!product) return null;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-t-2xl"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {product.name}
                            </h2>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {product.category}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Key Features:
                            </h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-2"
                                    >
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-semibold text-gray-800">
                                    Price:{" "}
                                </span>
                                <span className="text-green-600 font-bold">
                                    {product.price}
                                </span>
                            </div>
                            <button
                                onClick={() => setActiveSection("contact")}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className="">
            <style>{slideStyle}</style>
            {/* Header */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-5xl font-bold text-gray-800 mb-6 pt-20"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                    >
                        Discover our comprehensive range of premium coconut
                        fiber brooms, designed for every cleaning need. From
                        household use to industrial applications, we have the
                        perfect broom for you.
                    </motion.p>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    delay: 0.8 + index * 0.1,
                                    duration: 0.5,
                                }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    selectedCategory === category
                                        ? "bg-green-600 text-white"
                                        : "bg-white text-gray-700 hover:bg-green-100"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    onClick={() => setSelectedProduct(product)}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                                >
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {product.description}
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                                Features:
                                            </h4>
                                            <ul className="space-y-1">
                                                {product.features
                                                    .slice(0, 2)
                                                    .map((feature, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-center space-x-2 text-sm text-gray-600"
                                                        >
                                                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                                                            <span>
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-green-600 font-bold">
                                                {product.price}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveSection("contact");
                                                }}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                                            >
                                                Inquire Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Why Choose Astraval Brooms?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quality features that make the difference
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                icon: "🌿",
                                title: "100% Natural",
                                desc: "Made from premium coconut fiber",
                            },
                            {
                                icon: "💪",
                                title: "Durable",
                                desc: "Long-lasting performance",
                            },
                            {
                                icon: "🌍",
                                title: "Eco-Friendly",
                                desc: "Biodegradable and sustainable",
                            },
                            {
                                icon: "⭐",
                                title: "Quality Assured",
                                desc: "Strict Self Quality Check",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-white rounded-xl shadow-md"
                            >
                                <div className="text-4xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Slider */}

                    <div className="relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                        <div className="flex animate-slide">
                            {products.concat(products).map((product, index) => (
                                <div
                                    key={index}
                                    className="min-w-full md:min-w-[33.333%] lg:min-w-[25%] px-2"
                                >
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
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-6"
                    >
                        Need Custom Solutions?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
                    >
                        We offer custom manufacturing for bulk orders and
                        specific requirements. Contact us to discuss your needs.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                        onClick={() => setActiveSection("contact")}
                        className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Request Custom Quote
                    </motion.button>
                </div>
            </section>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
