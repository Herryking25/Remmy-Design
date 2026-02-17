import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-heading font-bold mb-2">Remmy<span className="text-primary">.design</span></h2>
                    <p className="text-secondary text-sm">Building digital experiences that matter.</p>
                </div>

                <div className="flex space-x-6">
                    {/* <a href="" className="text-secondary hover:text-white transition-colors">
                        <Github size={20} />
                    </a> */}
                    <a href="https://www.linkedin.com/in/remmyyoung" className="text-secondary hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/Vibekhay" className="text-secondary hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="remmyyoungkay@gmail.com" className="text-secondary hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-secondary text-sm">
                    &copy; {currentYear} Remmy Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
