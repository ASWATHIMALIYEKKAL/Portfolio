import { motion } from 'framer-motion';
import { Terminal, Database, LineChart, Cpu, BookOpen, Layers } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming & Tools",
            icon: <Terminal className="text-primary-500" size={24} />,
            skills: ["Python", "SQL", "Excel", "GitHub", "Streamlit"]
        },
        {
            title: "Machine Learning & Data",
            icon: <Cpu className="text-indigo-500" size={24} />,
            skills: ["Classification", "Regression", "Feature Engineering", "Scikit-learn", "PyTorch", "TensorFlow"]
        },
        {
            title: "Advanced AI & NLP",
            icon: <Layers className="text-emerald-500" size={24} />,
            skills: ["LLMs", "Generative AI", "RAG Pipelines", "Transformers", "Knowledge Graphs", "GCN"]
        },
        {
            title: "Data Visualization",
            icon: <LineChart className="text-orange-500" size={24} />,
            skills: ["Power BI", "Matplotlib", "Seaborn", "Tableau"]
        },
        {
            title: "Databases & Platforms",
            icon: <Database className="text-rose-500" size={24} />,
            skills: ["Neo4j", "Chroma Vector DB", "SQL", "Google Colab"]
        },
        {
            title: "Soft Skills & Languages",
            icon: <BookOpen className="text-amber-500" size={24} />,
            skills: ["Problem-solving", "Collaboration", "English", "Malayalam"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="gradient-text">Skillset</span></h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Comprehensive expertise in advanced AI, deep learning, and data analytics.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass p-8 rounded-3xl border-transparent hover:border-primary-500/30 transition-all group"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
