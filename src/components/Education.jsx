import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Master of Science, Data Analytics and Bio AI",
            institution: "Digital University Kerala, Thiruvananthapuram, Kerala",
            period: "AUG.2022 - JULY 2024",
            details: "Specialized in advanced data analytical techniques and bio-inspired artificial intelligence."
        },
        {
            degree: "Bachelor of Science, Physics",
            institution: "University of Calicut, Malappuram, Kerala",
            period: "JUNE 2019 – APRIL 2022",
            details: "Foundation in physical sciences, mathematical modeling, and analytical reasoning."
        }
    ];

    return (
        <section id="education" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Academic <span className="gradient-text">Journey</span></h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <GraduationCap size={160} />
                            </div>

                            <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl w-fit mb-6">
                                <GraduationCap size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 leading-tight">{edu.degree}</h3>
                            <div className="text-slate-700 dark:text-slate-300 font-semibold mb-2">{edu.institution}</div>
                            <div className="text-sm font-bold text-slate-500 mb-6">{edu.period}</div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
