import { motion } from "framer-motion";
import broom1 from "../assets/brooms_image/IMG-20200807-WA0011.jpeg";
import broom2 from "../assets/brooms_image/IMG-20200807-WA0013.jpeg";
import broom3 from "../assets/brooms_image/IMG-20200812-WA0017.jpeg";

const Services = ({ setActiveSection }) => {
    const services = [
        {
            title: "Custom Manufacturing",
            description:
                "Tailored broom solutions designed to meet your specific requirements and specifications.",
            features: [
                "Custom sizes and designs",
                "Branded packaging options",
                "Minimum order quantities",
                "Quality assurance",
            ],
            icon: "🏭",
            image: broom1,
        },
        {
            title: "Bulk Supply",
            description:
                "Large-scale supply solutions for retailers, distributors, and commercial clients.",
            features: [
                "Competitive bulk pricing",
                "Flexible delivery schedules",
                "Quality consistency",
                "Long-term partnerships",
            ],
            icon: "📦",
            image: broom2,
        },
        {
            title: "Export Services",
            description:
                "International shipping and export services to deliver our products worldwide.",
            features: [
                "Global shipping",
                "Export documentation",
                "Quality certifications",
                "Customs clearance support",
            ],
            icon: "🌍",
            image: broom3,
        },
        {
            title: "Private Labeling",
            description:
                "White-label manufacturing services for businesses wanting their own brand.",
            features: [
                "Custom branding",
                "Packaging design",
                "Marketing support",
                "Brand protection",
            ],
            icon: "🏷️",
            image: broom1,
        },
        {
            title: "Quality Assurance",
            description:
                "Comprehensive quality control and testing services for all our products.",
            features: [
                "ISO standards compliance",
                "Regular quality audits",
                "Product testing",
                "Certification support",
            ],
            icon: "✅",
            image: broom2,
        },
        {
            title: "Consultation Services",
            description:
                "Expert advice and consultation for cleaning industry businesses.",
            features: [
                "Market analysis",
                "Product recommendations",
                "Business strategy",
                "Technical support",
            ],
            icon: "💡",
            image: broom3,
        },
    ];

    const process = [
        {
            step: "01",
            title: "Initial Consultation",
            description:
                "We discuss your requirements, specifications, and business needs in detail.",
        },
        {
            step: "02",
            title: "Proposal & Quote",
            description:
                "Receive a detailed proposal with pricing, timeline, and product specifications.",
        },
        {
            step: "03",
            title: "Sample Approval",
            description:
                "Review and approve product samples before full-scale production begins.",
        },
        {
            step: "04",
            title: "Production",
            description:
                "Manufacturing begins with regular quality checks and progress updates.",
        },
        {
            step: "05",
            title: "Quality Control",
            description:
                "Final quality inspection and testing before packaging and shipment.",
        },
        {
            step: "06",
            title: "Delivery",
            description:
                "Timely delivery with tracking information and after-sales support.",
        },
    ];

    const galleries = [
        {
            images: [broom1, broom2, broom3, broom1, broom2, broom3],
        },
        {
            images: [broom2, broom3, broom1, broom2, broom3, broom1],
        },
        {
            images: [broom3, broom1, broom2, broom3, broom1, broom2],
        },
    ];

    const slideStyle = `
    @keyframes slideLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes slideRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
  `;

    return (
        <div className="">
            <style>{slideStyle}</style>
            {/* Header */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold text-gray-800 mb-6 pt-20"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Comprehensive manufacturing and business solutions
                        tailored to meet your specific needs. From custom
                        manufacturing to <b>global export services</b>, we've
                        got you covered.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-green-600 text-white p-3 rounded-full text-2xl">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {service.features.map(
                                                (feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-center space-x-2 text-sm text-gray-600"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
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
                            Our Process
                        </h2>
                        <p className="text-xl text-gray-600">
                            How we work with you from concept to delivery
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 ml-4">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <div className="w-8 h-0.5 bg-green-300"></div>
                                        <div className="w-0 h-0 border-l-4 border-l-green-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clean Gallery Section */}
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
                            Manufacturing Gallery
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quality craftsmanship in action
                        </p>
                    </motion.div>

                    <div className="space-y-10">
                        {galleries.slice(0, 3).map((gallery, index) => (
                            <div key={index} className="overflow-hidden">
                                <div className="relative overflow-hidden">
                                    {/* Gradient Fade Edges */}
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                                    
                                    <div
                                        className="flex gap-6 animate-slide"
                                        style={{
                                            width: `${gallery.images.length * 2 * 350}px`,
                                            animation: `${
                                                index === 0 ? 'slideLeft' :
                                                index === 1 ? 'slideRight' :
                                                'slideLeft'
                                            } 30s linear infinite`
                                        }}
                                    >
                                        {gallery.images.concat(gallery.images).map((image, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="min-w-[320px] h-56 group hover:pause-animation"
                                            >
                                                <div className="relative">
                                                    <img
                                                        src={image}
                                                        alt={`Manufacturing ${imgIndex + 1}`}
                                                        className="w-3/3 h-full object-cover mx-auto rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-200/50"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 w-3/4 mx-auto rounded-lg bg-gradient-to-t from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-xl text-gray-600">
                            Providing solutions across various sectors
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Retail & Distribution", icon: "🏪" },
                            { name: "Hospitality", icon: "🏨" },
                            { name: "Manufacturing", icon: "🏭" },
                            { name: "Healthcare", icon: "🏥" },
                            { name: "Education", icon: "🏫" },
                            { name: "Government", icon: "🏛️" },
                            { name: "Export & Import", icon: "🚢" },
                            { name: "Cleaning Services", icon: "🧹" },
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="text-3xl mb-3">
                                    {industry.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">
                                    {industry.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your requirements and get a
                        customized solution that meets your specific needs.
                    </p>
                    <button
                        onClick={() => setActiveSection("contact")}
                        className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Request Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
