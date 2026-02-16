import { motion } from 'framer-motion';
import remmy from '../../assets/images/remmy.png'

const About = () => {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:block"
                >
                    {/* Placeholder for Profile Image */}
                    <div className="aspect-square rounded-2xl bg-surface border-2 border-white/5 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-full h-full flex items-center justify-center text-secondary">
                            <span className="text-lg"><img src={remmy} alt="" /></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About <span className="text-primary">Me</span></h2>
                    <p className="text-secondary text-lg mb-6 leading-relaxed">
                        I am a passionate <span className="text-white font-medium">UI/UX Designer</span> and <span className="text-white font-medium">Graphic Designer</span> with over 5 years of experience in creating intuitive digital experiences.
                    </p>
                    <p className="text-secondary text-lg mb-8 leading-relaxed">
                        My journey began in graphic design, mastering the art of visual storytelling. I then transitioned into product design, where I combine aesthetics with usability to solve complex problems.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-4" />
                            <div>
                                <h4 className="text-white font-bold">Senior UI/UX Designer</h4>
                                <p className="text-secondary text-sm">TechStartup Inc. • 2021 - Present</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-accent mr-4" />
                            <div>
                                <h4 className="text-white font-bold">Graphic Designer</h4>
                                <p className="text-secondary text-sm">Creative Agency • 2018 - 2021</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
