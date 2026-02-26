import { motion } from 'framer-motion';
import { Award, Zap, Layout, ExternalLink, BookOpen } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "Research Article Published",
            description: "Integrated Machine Learning and Molecular Simulation Approaches for Identifying HIV-1 Reverse Transcriptase Inhibitors from Abacavir Analogues.",
            icon: <BookOpen className="text-primary-500" />,
            link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/slct.202501461"
        }
    ];

    return (
        <section id="achievements" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Notable <span className="gradient-text">Achievements</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl border-transparent hover:border-primary-500/30 transition-all text-center group flex flex-col items-center h-full mx-auto"
                        >
                            <div className="p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-sm w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                {item.description}
                            </p>
                            {item.link && (
                                <a href={item.link} className="flex items-center text-primary-500 font-bold hover:underline space-x-2">
                                    <span>View Publication</span>
                                    <ExternalLink size={16} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
