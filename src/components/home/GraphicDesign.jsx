import { motion } from 'framer-motion';

const graphicDesignDetails = [
    {
        title: "Photoshop",
        description: "Advanced photo manipulation, retouching, and compositing for stunning visuals."
    },
    {
        title: "Illustrator",
        description: "Scalable vector graphics, precise illustrations, and complex iconography."
    },
    {
        title: "Canva",
        description: "Rapid prototyping and creating accessible templates for social media."
    },
    {
        title: "Branding",
        description: "Developing cohesive visual identities that resonate with audiences."
    },
    {
        title: "Logo Design",
        description: "Crafting memorable, timeless marks as the cornerstone of identity."
    },
    {
        title: "Typography",
        description: "Mastering type hierarchy to enhance readability and visual impact."
    },
    {
        title: "Layout",
        description: "Structuring content for logical flow and aesthetic balance."
    }
];

const GraphicDesign = () => {
    // Helper to determine grid span based on index for a bento feel
    const getGridSpan = (index) => {
        if (index === 0) return "md:col-span-2 md:row-span-2";
        if (index === 3) return "md:col-span-2";
        return "md:col-span-1";
    };

    const getGradient = (index) => {
        const gradients = [
            "from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30",
            "from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
            "from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30",
            "from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30",
            "from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30",
            "from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30",
            "from-indigo-500/20 to-violet-500/20 hover:from-indigo-500/30 hover:to-violet-500/30",
        ];
        return gradients[index % gradients.length];
    };

    return (
        <section id="graphics" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Graphic <span className="text-primary">Playground</span></h2>
                    <p className="text-secondary max-w-xl mx-auto md:mx-0">
                        A showcase of my creative expertise in visual design, focusing on typography, layout, and brand identity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {graphicDesignDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`
                                ${getGridSpan(index)} 
                                relative group overflow-hidden rounded-3xl border border-white/5 
                                bg-gradient-to-br ${getGradient(index)}
                                flex flex-col justify-end p-6 transition-all duration-500
                            `}
                        >
                            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="text-white text-xs">0{index + 1}</span>
                                </div>
                            </div>

                            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0">
                                    {item.description}
                                </p>
                                <div className="h-1 w-12 bg-white/50 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
                        </motion.div>
                    ))}

                    {/* Call to Action Card if we have an odd number of items or just to fill space */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="md:col-span-1 md:row-span-1 rounded-3xl border border-white/10 bg-surface flex items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-white">Let's Work Together</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GraphicDesign;
