import React from "react";
import { motion } from 'framer-motion';
import { Github, ExternalLink, Beaker, Globe, BrainCircuit, Microscope, Award, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Hepatotoxicity Prediction (GCN)",
            description: "End-to-end predictive modeling to identify leads for diabetes treatment using Graph Neural Networks.",
            problem: "Traditional ML models (RF, SVM) failing to capture complex molecular relationships.",
            tools: ["Python", "PyTorch Geometric", "RDKit", "Exploratory Data Analysis"],
            results: "Achieved 89% accuracy, significantly outperforming Random Forest (78%) and MLP (65%).",
            icon: <Microscope className="text-primary-500" />,
            github: "https://github.com/ASWATHIMALIYEKKAL"
        },
        {
            title: "HIV-1 RT Inhibitors Exploration",
            description: "ML-based exploration of Abacavir analogues to unveil promising HIV-1 RT inhibitors.",
            problem: "Identifying promising chemical analogues through feature selection and regression modeling.",
            tools: ["Python", "PaDELpy", "Gradient Boosting", "XGBoost"],
            results: "Reached R² = 82% with Gradient Boosting, demonstrating robust data-driven decision making.",
            icon: <Beaker className="text-emerald-500" />,
            github: "https://github.com/ASWATHIMALIYEKKAL"
        },
        {
            title: "RAG-LLM Context Aware Chatbot",
            description: "Intelligent document querying system leveraging RAG architecture for decision support.",
            problem: "Low-latency context-aware responses from large unstructured document pools.",
            tools: ["LangChain", "Chroma DB", "Ollama", "HuggingFace Embeddings"],
            results: "Reduced response latency via intelligent caching and semantic search integration.",
            icon: <BrainCircuit className="text-indigo-500" />,
            github: "https://github.com/ASWATHIMALIYEKKAL"
        },
        {
            title: "Ayurveda Knowledge Graph Extraction",
            description: "NLP-driven pipeline to extract structured medicinal knowledge from thousands of PDF documents.",
            problem: "Structuring entities and relationships from legacy Sanskrit documents.",
            tools: ["Neo4j", "Spacy", "Tesseract OCR", "Python"],
            results: "Mapped 500+ medicinal plants and their properties into a queryable graph database.",
            icon: <Globe className="text-rose-500" />,
            github: "https://github.com/ASWATHIMALIYEKKAL"
        },
        {
            title: "AI Automation Deployment",
            description: "Successfully built and deployed an AI-driven digital marketing automation platform for lead capture and qualification.",
            problem: "Manual lead capture processes were inefficient and failed to qualify data in real-time.",
            tools: ["Python", "Automation", "Lead Qualification", "AI Engines"],
            results: "Deployed a functional AI pipeline that automates lead capture and qualification for digital marketing.",
            icon: <Award className="text-emerald-500" />,
            github: "https://github.com/ASWATHIMALIYEKKAL"
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="gradient-text">Projects</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                        Selected work focusing on Deep Learning, Molecular Analytics, and RAG systems.
                    </p>
                </div>
                <a
                    href="https://github.com/ASWATHIMALIYEKKAL"
                    className="flex items-center text-primary-500 font-bold hover:underline group"
                >
                    View GitHub
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass group rounded-3xl overflow-hidden border-white/5 flex flex-col h-full"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
                                    {project.icon}
                                </div>
                                <div className="flex space-x-3">
                                    <a href={project.github} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
                                        <Github size={18} />
                                    </a>
                                    <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {project.description}
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Challenge</h4>
                                    <p className="text-sm italic">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Key Outcome</h4>
                                    <p className="text-sm border-l-2 border-primary-500/50 pl-4 py-1">{project.results}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tools.map((tool, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-lg border border-primary-500/20"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};



export default Projects;
