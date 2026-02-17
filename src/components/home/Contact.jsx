import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! This forms is a demo.");
    };

    return (
        <section id="contact" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Let's Work <span className="text-primary">Together</span></h2>
                    <p className="text-secondary text-lg mb-8 leading-relaxed">
                        Have a project in mind or want to discuss a potential collaboration? I'm currently available for freelance projects and remote opportunities.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold mb-1">Email</h4>
                            <p className="text-secondary">remmyyoungkay@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Socials</h4>
                            <div className="flex gap-4 text-secondary">
                                <a href="https://www.linkedin.com/in/remmyyoung" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="https://x.com/Vibekhay" className="hover:text-primary transition-colors">Twitter</a>
                                {/* <a href="#" className="hover:text-primary transition-colors">Behance</a> */}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-background p-8 rounded-2xl border border-white/5"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <Button variant="primary" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
