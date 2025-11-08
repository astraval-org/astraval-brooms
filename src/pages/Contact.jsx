import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Clock,
    XCircle,
    Calendar,
    Send,
    AlertTriangle,
    Zap,
    Package,
    Building,
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            inquiry_type: formData.inquiryType,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Astraval Brooms Team'
        };

        emailjs.send(
            'service_8fqyysj',
            'template_78ajesx', 
            templateParams,
            '2JM97dpZppSy0IfKL'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("✅ Thank you for your inquiry! We will get back to you soon.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: "",
                inquiryType: "general",
            });
        })
        .catch((error) => {
            console.log('FAILED...', error);
            alert("❌ Sorry, there was an error sending your message. Please try again.");
        });
    };

    const contactCards = [
        {
            title: "Head Office",
            icon: <Building className="w-8 h-8" />,
            details: [
                "📍 Manufacturing Unit, Industrial Area, India",
                "📞 +91 XXXXX XXXXX",
                "✉️ notify@astraval.com",
            ],
        },
        {
            title: "Export Department",
            icon: <Globe className="w-8 h-8" />,
            details: [
                "🌍 Serving 15+ Countries",
                "📞 +91 XXXXX XXXXX",
                "✉️ export@astraval.com",
            ],
        },
        {
            title: "Sales & Marketing",
            icon: <Phone className="w-8 h-8" />,
            details: [
                "💼 Bulk Orders & Partnerships",
                "📞 +91 XXXXX XXXXX",
                "✉️ sales@astraval.com",
            ],
        },
    ];

    const faqs = [
        {
            q: "What is the minimum order quantity?",
            a: "Our minimum order quantity varies by product type. For standard products, it's typically 100 pieces. For custom orders, please contact us for specific requirements.",
        },
        {
            q: "Do you provide international shipping?",
            a: "Yes, we export to 15+ countries worldwide. We handle all export documentation and offer competitive shipping rates.",
        },
        {
            q: "Can you manufacture custom designs?",
            a: "Absolutely! We offer custom manufacturing services including specific sizes, designs, and private labeling options.",
        },
        {
            q: "What are your payment terms?",
            a: "We offer flexible payment terms such as advance payment, letter of credit, or other arrangements for established clients.",
        },
        {
            q: "How long does production take?",
            a: "Standard orders typically take 7–14 days. Custom orders may take 2–4 weeks depending on specifications and quantity.",
        },
    ];

    return (
        <div className="pt-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-gray-800">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center py-24 px-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 mb-6"
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Ready to discuss your broom manufacturing needs? Get in
                    touch with our team for bulk orders, custom solutions, and
                    export inquiries.
                </motion.p>
            </motion.section>

            {/* Contact Cards */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
                {contactCards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{
                            delay: i * 0.15,
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white/70 backdrop-blur-md border border-white/30 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all"
                    >
                        <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            {card.title}
                        </h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            {card.details.map((line, j) => (
                                <li key={j}>{line}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </section>

            {/* Form + Info */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -60, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/40"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white">
                            <Send className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Send Us a Message
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Two-column inputs */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="general">General Inquiry</option>
                            <option value="bulk">Bulk Order</option>
                            <option value="export">Export Inquiry</option>
                            <option value="custom">Custom Manufacturing</option>
                            <option value="partnership">Partnership</option>
                        </select>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject *"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500 resize-none"
                        />

                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" /> Send Message
                            </div>
                        </motion.button>
                    </form>
                </motion.div>

                {/* Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {/* Business Hours + Quick Response Section */}
                    <div className="flex flex-col justify-start gap-10 h-full pt-20">
                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-7 h-7 text-blue-600" />
                                <h3 className="text-2xl font-bold">
                                    Business Hours
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM – 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM – 4:00 PM</span>
                                </li>
                                <li className="flex justify-between text-red-600 font-semibold">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Quick Response Guarantee */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }} // 👈 starts from bottom
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-7 h-7 text-emerald-600" />
                                <h3 className="text-2xl font-bold">
                                    Quick Response Guarantee
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li>⚡ Email inquiries: Within 2 hours</li>
                                <li>📞 Phone calls: Immediate response</li>
                                <li>💼 Bulk orders: Same day quote</li>
                                <li>🌍 Export inquiries: Within 4 hours</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50/30 to-pink-50/20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-800 mb-8"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="space-y-6 text-left">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.01, x: 5 }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-white to-purple-50/40 p-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-200/30 border border-purple-100/30 transition-all"
                            >
                                <h3 className="font-semibold text-lg mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50/50 to-purple-100/30 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-800 mb-4"
                >
                    Visit Our Facility
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 mb-8"
                >
                    Located in the heart of India's manufacturing hub
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-300/20 border border-purple-200/30"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.621766267434!2d77.85812279999999!3d8.3403268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b047fd70590914f%3A0x596d2521298aabb0!2sAstraval%20Brooms!5e0!3m2!1sen!2sin!4v1760859969891!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}                                         
                        loading="lazy"
                        allowFullScreen
                        title="Astraval Brooms Location"
                    ></iframe>
                </motion.div>
                
                {/* View on Google Maps Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('https://www.google.com/maps/place/Astraval+Brooms/@8.3403268,77.85812279999999,17z/data=!3m1!4b1!4m6!3m5!1s0x3b047fd70590914f:0x596d2521298aabb0!8m2!3d8.3403268!4d77.85812279999999!16s%2Fg%2F11y3k8qr8q', '_blank')}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 mx-auto"
                    >
                        <MapPin className="w-6 h-6" />
                        View on Google Maps
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}
