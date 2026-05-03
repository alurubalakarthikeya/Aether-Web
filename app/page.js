import Navbar from '../components/Navbar';
import PixelBackground from '../components/PixelBackground';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppPreview from '../components/AppPreview';
import DownloadPath from '../components/DownloadSteps';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            {/* Desktop Gate */}
            <div className="desktop-gate">
                <h2 className="text-3xl tracking-[4px]">AETHER</h2>
                <p className="text-base text-sage max-w-[400px] leading-relaxed">
                    This experience is designed for mobile.<br />
                    Please visit on your phone to explore Aether.
                </p>
            </div>

            {/* Mobile Content */}
            <div className="mobile-content overflow-x-hidden">
                <PixelBackground />
                <div className="max-w-[480px] mx-auto relative z-10">
                    <Navbar />
                    <Hero />
                    <Features />
                    <AppPreview />
                    <DownloadPath />
                    <Philosophy />
                    <Footer />
                </div>
            </div>
        </>
    );
}
