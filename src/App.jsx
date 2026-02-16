import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<CaseStudy />} />
            </Routes>
        </>
    )
}

export default App
