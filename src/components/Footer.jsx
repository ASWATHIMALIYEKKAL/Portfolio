import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 py-12 px-6 border-t border-slate-200 dark:border-slate-800 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-8 md:mb-0">
                    <div className="text-2xl font-bold gradient-text mb-2">Aswathi.</div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                        AI Associate specialized in RAG systems, Knowledge Graphs, and Predictive Analytics.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-4">
                    <div className="flex space-x-6">
                        <a href="https://github.com/ASWATHIMALIYEKKAL" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-primary-500/20 hover:text-primary-500 transition-all">
                            <Github size={20} />
                        </a>
                        <a href="http://www.linkedin.com/in/aswathi-56ab6924a" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-indigo-500/20 hover:text-indigo-500 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:aswathi.official.in@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-emerald-500/20 hover:text-emerald-500 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">
                        Based in Kerala, India
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Aswathi. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
