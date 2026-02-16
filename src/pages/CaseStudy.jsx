import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const CaseStudy = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <h2 className="text-2xl font-bold">Project Not Found</h2>
                    <Link to="/" className="ml-4 text-primary underline">Go Home</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="min-h-screen bg-background pb-20">
                {/* Hero Image */}
                <div className="w-full h-[50vh] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
                    <Link to="/" className="inline-flex items-center text-secondary hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        {project.title}
                    </motion.h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-surface p-6 rounded-2xl border border-white/5">
                        <div>
                            <h4 className="text-sm text-secondary uppercase tracking-wider mb-1">Client</h4>
                            <p className="font-medium text-white">{project.client || "Confidential"}</p>
                        </div>
                        <div>
                            <h4 className="text-sm text-secondary uppercase tracking-wider mb-1">Role</h4>
                            <p className="font-medium text-white">{project.role || "Designer"}</p>
                        </div>
                        <div>
                            <h4 className="text-sm text-secondary uppercase tracking-wider mb-1">Duration</h4>
                            <p className="font-medium text-white">{project.duration || "N/A"}</p>
                        </div>
                        <div>
                            <h4 className="text-sm text-secondary uppercase tracking-wider mb-1">Category</h4>
                            <p className="font-medium text-white">{project.category}</p>
                        </div>
                    </div>

                    <div className="space-y-12 text-secondary text-lg leading-relaxed">
                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">Overview</h2>
                            <p>{project.overview}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">The Problem</h2>
                            <p>{project.problem}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">The Solution</h2>
                            <p>{project.solution}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">Results</h2>
                            <p>{project.results}</p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">Next Project</h3>
                        <Link to={`/project/${project.id === projects.length ? 1 : project.id + 1}`} className="text-primary hover:underline">
                            View Next
                        </Link>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default CaseStudy;
