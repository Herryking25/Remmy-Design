import { motion } from 'framer-motion';
import Button from '../ui/Button';
import remmy from '../../assets/images/remmy.png';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-surface border border-white/10 text-sm text-secondary mb-6">
                        👋 Welcome to my portfolio
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
                        Hi, I'm Remmy. <br />
                        I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Design</span> Digital Experiences.
                    </h1>

                    <p className="text-lg text-secondary max-w-lg mb-8 leading-relaxed">
                        A passionate UI/UX and Graphic Designer dedicated to crafting intuitive, beautiful, and user-centric interfaces that solve real problems.
                    </p>

                    <div className="flex flex-row gap-4">
                        <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/5 bg-surface/50 backdrop-blur-sm shadow-2xl">
                        <img src={remmy} alt="Remmy - UI/UX Designer" className="w-full h-auto object-cover" />
                    </div>

                    {/* Decorative elements behind image */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[64px] -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[64px] -z-10" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1 bg-secondary rounded-full"
                    />
                </div>
            </motion.div> */}
        </section>
    );
};

export default Hero;
