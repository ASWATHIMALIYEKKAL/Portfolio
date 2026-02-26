import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <section id="blog" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & <span className="gradient-text">Articles</span></h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                    Future thoughts on AI, data analysis, and technical research. Stay tuned!
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-12 rounded-3xl border-dashed border-2 border-slate-200 dark:border-slate-800"
                >
                    <p className="text-slate-400 font-medium italic">
                        Content coming soon. I'm currently working on some exciting articles about RAG systems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
