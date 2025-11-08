import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = ({ setActiveSection }) => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src={logo}
                                alt="Astraval Brooms"
                                className="h-10 w-10"
                            />
                            <div>
                                <h3 className="text-xl font-bold">
                                    Astraval Brooms
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Since 1999
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Leading manufacturer of premium coconut fiber brooms
                            with 25+ years of excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => setActiveSection?.("home")}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection?.("about")}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection?.("products")
                                    }
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Products
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection?.("services")
                                    }
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Services
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection("products", "Premium")
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    Premium Brooms
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection(
                                            "products",
                                            "Industrial"
                                        )
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    Industrial Brooms
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection("products", "Export")
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    Export Quality
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        setActiveSection(
                                            "products",
                                            "Specialty"
                                        )
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    Custom Orders
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Contact Info
                        </h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>
                                📍 Selvemaruthur, Thisayanvelai, Tirunelvelu -
                                627 657
                            </p>
                            <p>📞 +91 9043368684</p>
                            <p>✉️ karthikeyan.alagu@astraval.com </p>
                            <p>🕒 Mon-Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; 2025 Astraval Brooms. All rights reserved. |
                        Manufacturing Excellence Since 1999
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
