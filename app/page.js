import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoFeatures from '../components/BentoFeatures';
import DownloadSteps from '../components/DownloadSteps';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <BentoFeatures />
            <DownloadSteps />
            <Philosophy />
            <Footer />
        </main>
    );
}
