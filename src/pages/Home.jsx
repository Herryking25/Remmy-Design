import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import FeaturedProjects from '../components/home/FeaturedProjects';
import GraphicDesign from '../components/home/GraphicDesign';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <FeaturedProjects />
            <GraphicDesign />
            <Skills />
            <Contact />
        </Layout>
    );
};

export default Home;
