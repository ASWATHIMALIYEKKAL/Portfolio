import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "AI ASSOCIATE (Remote)",
            company: "Pramana Ayurtech Solutions Pvt Ltd",
            period: "JULY 2025 - Present",
            description: "Leading the development of advanced AI solutions including RAG-LLM chatbots and automated marketing platforms.",
            highlights: [
                "Designed and developed an LLM-powered RAG chatbot for intelligent document querying using HuggingFace embeddings and Chroma DB.",
                "Integrated Ollama LLM for context-aware responses with embedding and query-level caching to reduce latency.",
                "Built a Knowledge Graph from PDF documents using Neo4j and NLP pipelines for structured retrieval.",
                "Developed an AI-driven digital marketing automation tool for lead capture, qualification, and campaign reporting.",
                "Leveraged Antigravity + Claude AI for content generation and GitHub Copilot for optimized development."
            ]
        },
        {
            role: "R&D INTERN",
            company: "Digital University Kerala",
            period: "APRIL 2024 - JUNE 2025",
            description: "Developed AI-driven judgment file processing systems for judicial intelligence.",
            highlights: [
                "Applied NLP and LayoutLM to extract and analyze structured/unstructured legal data from High Court documents.",
                "Trained models for document understanding and layout-aware information extraction using Label Studio.",
                "Implemented handwritten content extraction using TrOCR and DocTR for enhanced accuracy.",
                "Created As-Is and To-Be process documentation to propose data-driven improvements in judicial workflows.",
                "Collaborated with stakeholders to translate legal requirements into technical specifications."
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional <span className="gradient-text">Journey</span></h2>

                <div className="space-y-16">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 border-l-2 border-primary-500/30"
                        >
                            <div className="absolute -left-3 top-0 p-1.5 bg-primary-500 rounded-full text-white">
                                <Briefcase size={12} />
                            </div>

                            <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <span className="px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold rounded-full whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-4">
                                {exp.company}
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl border-b border-slate-100 dark:border-slate-800 pb-4">
                                {exp.description}
                            </p>

                            <ul className="space-y-3">
                                {exp.highlights.map((item, hIdx) => (
                                    <li key={hIdx} className="flex items-start">
                                        <span className="mt-1.5 mr-3 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                                        <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
