import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Open for collaborations and opportunities in Advanced AI & Data Analytics.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass p-6 rounded-3xl flex items-center space-x-6 hover:border-primary-500/30 transition-all group">
                            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-2xl group-hover:rotate-12 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</h4>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">aswathi.official.in@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-3xl flex items-center space-x-6 hover:border-emerald-500/30 transition-all group">
                            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-2xl group-hover:rotate-12 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone</h4>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">+91 9895846526</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-3xl flex items-center space-x-6 hover:border-indigo-500/30 transition-all group">
                            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 rounded-2xl group-hover:rotate-12 transition-transform">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">LinkedIn</h4>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">http://www.linkedin.com/in/aswathi-56ab6924a</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-3xl flex items-center space-x-6 hover:border-slate-500/30 transition-all group">
                            <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl group-hover:rotate-12 transition-transform">
                                <Github size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">GitHub</h4>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">https://github.com/ASWATHIMALIYEKKAL</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-10 rounded-3xl border-transparent shadow-xl h-full"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all placeholder-slate-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all placeholder-slate-400"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all resize-none placeholder-slate-400"
                                    placeholder="Describe your project or inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all group"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
