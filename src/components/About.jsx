import { motion } from 'framer-motion';
import { Brain, Database, Code2, Cpu } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Brain className="text-primary-500" />,
            title: "RAG & LLMs",
            description: "Building intelligent chatbots with context-aware response generation using LangChain."
        },
        {
            icon: <Database className="text-indigo-500" />,
            title: "Knowledge Discovery",
            description: "Constructing Knowledge Graphs from unstructured PDFs using Neo4j and NLP."
        },
        {
            icon: <Cpu className="text-emerald-500" />,
            title: "Deep Learning",
            description: "Implementing GCNs and LayoutLM for drug discovery and document intelligence."
        },
        {
            icon: <Code2 className="text-orange-500" />,
            title: "Automation",
            description: "Developing scalable AI pipelines for lead capture and marketing optimization."
        }
    ];

    return (
        <section id="about" className="section-padding">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Transforming Unstructured Data into <span className="gradient-text">Actionable Insights</span>
                    </h2>
                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p>
                            I am an <strong>AI Associate</strong> with a deep passion for developing data-driven systems that enhance decision-making through automation and business efficiency. My background in <strong> Master of Science </strong> in <strong>Data Analytics & Bio AI</strong> provides a unique perspective on solving complex problems.
                        </p>
                        <p>
                            My expertise spans the entire AI lifecycle, from <strong>scalable pipeline development</strong> to <strong>semantic search</strong> and <strong>RAG systems</strong>. I specialize in turning complex, messy datasets into structured knowledge that drives value.
                        </p>
                        <p>
                            From developing RAG-based knowledge assistants to designing NLP pipelines for legal document understanding, I focus on transforming unstructured text into scalable, actionable AI systems.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl border-white/5 shadow-lg group hover:scale-105 transition-transform"
                        >
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl w-fit mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
