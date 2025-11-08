import { motion } from "framer-motion";
import { companyInfo } from "../data/products";
import broom1 from "../assets/brooms_image/IMG_20200820_103326.jpg";
import broom2 from "../assets/brooms_image/IMG_20200825_135236.jpg";
import broom3 from "../assets/brooms_image/IMG-20200807-WA0009.jpeg";
import broom4 from "../assets/brooms_image/iso_certificate.jpg";

const About = () => {
    const milestones = [
        {
            year: "1999",
            event: "Company Founded",
            description: "Started with a vision to manufacture quality brooms",
        },
        {
            year: "2005",
            event: "Mass Manufacturing",
            description: "Smart, Scalable Manufacturing Solutions.",
        },
        {
            year: "2010",
            event: "20K Monthly Manufacturing",
            description:
                "Achieved a milestone of producing 20,000 brooms per month through process innovation.",
        },
        {
            year: "2015",
            event: "Bulk Order Supply",
            description:
                "Expanded production capacity to 10,000+ brooms/monthBegan large-scale bulk order supply to distributors and institutional clients.",
        },
        {
            year: "2020",
            event: "New Model Broom Launch",
            description:
                "Launched new ergonomic broom models designed for improved performance and durability.",
        },
        {
            year: "2025",
            event: "Digital Presence",
            description:
                "Launched modern digital platform for global customers",
        },
    ];

    const values = [
        {
            title: "Quality First",
            description:
                "We never compromise on quality. Every broom undergoes rigorous quality checks.",
            icon: "⭐",
        },
        {
            title: "Sustainability",
            description: (
                <>
                    Using 100% natural <b>Coco & Nipah brooms</b>, we promote
                    eco-friendly cleaning solutions.
                </>
            ),
            icon: "🌱",
        },
        {
            title: "Innovation",
            description:
                "Combining traditional craftsmanship with modern manufacturing techniques.",
            icon: "💡",
        },
        {
            title: "Customer Focus",
            description:
                "Our customers' success is our success. We build lasting relationships.",
            icon: "🤝",
        },
    ];

    const achievements = [
        { metric: "25+", label: "Years of Excellence" },
        { metric: "40,000+", label: "Brooms per Month" },
        { metric: "500+", label: "Satisfied Clients" },
        { metric: "99%", label: "Customer Satisfaction" },
    ];

    return (
        <div className="">
            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 pt-20">
                            About Astraval Brooms
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            {companyInfo.experience} Years of Manufacturing
                            Excellence in Coconut Fiber Brooms
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Our Journey
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Established in {companyInfo.established},
                                Astraval Brooms has grown from a small local
                                manufacturer to a leading producer of premium{" "}
                                <b>Coco & Nipah brooms</b>. With over{" "}
                                <b>{companyInfo.experience} years</b> of
                                experience, we’ve built a reputation for
                                quality, reliability, and innovation in the
                                cleaning industry.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our commitment to excellence has enabled us to
                                serve customers across India and export
                                globally. We take pride in our traditional
                                craftsmanship combined with modern manufacturing
                                processes.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {achievements
                                    .slice(0, 4)
                                    .map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                            className="text-center p-4 bg-white rounded-lg shadow-md"
                                        >
                                            <div className="text-2xl font-bold text-green-600">
                                                {achievement.metric}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {achievement.label}
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>

                        {/* Right Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {/* First 3 normal images */}
                            <img
                                src={broom1}
                                alt="Manufacturing"
                                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                            <img
                                src={broom2}
                                alt="Quality Control"
                                className="rounded-lg shadow-lg mt-8 hover:scale-105 transition-transform duration-500"
                            />
                            <img
                                src={broom3}
                                alt="Products"
                                className="rounded-lg shadow-lg -mt-8 hover:scale-105 transition-transform duration-500"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-700 group"
                            >
                                {/* Background ISO certificate image */}
                                <img
                                    src={broom4} // Replace with actual ISO certificate image
                                    alt="25+"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Blur & overlay */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-700"></div>

                                {/* Centered overlay text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-4xl font-extrabold tracking-wide drop-shadow-lg"
                                    >
                                        25+
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.8,
                                        }}
                                        className="text-lg font-medium text-green-50 uppercase tracking-wider"
                                    >
                                        Years of Excellence
                                    </motion.div>
                                </div>

                                {/* Animated glowing border */}
                                <div className="absolute inset-0 rounded-lg border border-green-400/30 shadow-[0_0_20px_4px_rgba(34,197,94,0.25)] group-hover:shadow-[0_0_25px_6px_rgba(34,197,94,0.35)] transition-shadow duration-700"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.7,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
                            >
                                <div className="text-4xl mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Our Milestones
                        </h2>
                        <p className="text-xl text-gray-600">
                            Key moments in our journey of excellence
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                    }}
                                    className={`flex items-center ${
                                        index % 2 === 0
                                            ? "flex-row"
                                            : "flex-row-reverse"
                                    }`}
                                >
                                    <div
                                        className={`w-1/2 ${
                                            index % 2 === 0
                                                ? "pr-8 text-right"
                                                : "pl-8 text-left"
                                        }`}
                                    >
                                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
                                            <div className="text-2xl font-bold text-green-600 mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {milestone.event}
                                            </h3>
                                            <p className="text-gray-600">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                                    <div className="w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS SECTION */}
            <section className="py-20 bg-green-600">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our Achievements
                        </h2>
                        <p className="text-xl text-green-100">
                            Numbers that speak for our excellence
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center"
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                    className="p-6 bg-green-700 rounded-xl shadow-lg hover:shadow-2xl"
                                >
                                    <div className="text-4xl font-bold text-white mb-2">
                                        {achievement.metric}
                                    </div>
                                    <div className="text-green-100">
                                        {achievement.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
