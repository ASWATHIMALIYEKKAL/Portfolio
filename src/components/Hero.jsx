import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary-600 uppercase bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 rounded-full">
                        AI Associate | Malappuram, Kerala, India
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="gradient-text">Aswathi</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
                        AI Associate
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Expertise in Machine Learning, Deep Learning, and LLMs. Building end-to-end RAG systems, knowledge graphs, and predictive models to transform complex data into actionable insights.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all flex items-center group"
                        >
                            View Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-semibold transition-all flex items-center"
                        >
                            Download Resume
                            <Download className="ml-2" size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="flex items-center justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary-500 blur-[60px] opacity-20 rounded-full animate-pulse"></div>
                            <div className="relative z-10 w-64 h-64 glass rounded-full overflow-hidden flex items-center justify-center border-4 border-primary-500/20 shadow-2xl">
                                <img
                                    src="/profile.jpeg"
                                    alt="Aswathi"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 glass p-3 rounded-2xl shadow-xl border-primary-500/10 z-20"
                            >
                                <div className="text-xs font-bold text-primary-500">LLM Expert</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 glass p-3 rounded-2xl shadow-xl border-primary-500/10 z-20"
                            >
                                <div className="text-xs font-bold text-indigo-500">RAG Pipelines</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
