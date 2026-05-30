import Navbar from '../components/Navbar';
import PixelBackground from '../components/PixelBackground';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppPreview from '../components/AppPreview';
import CompanionShowcase from '../components/CompanionShowcase';
import WorldEnvironment from '../components/WorldEnvironment';
import SafetyTrust from '../components/SafetyTrust';
import DownloadPath from '../components/DownloadSteps';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';
import FloatingDownload from '../components/FloatingDownload';

export default function Home() {
    return (
        <>
            {/* Main Application Layout */}
            <div className="main-content overflow-x-hidden bg-[#F5FAF8] min-h-screen">
                <PixelBackground />
                <div className="w-full relative z-10 px-0 lg:px-6 max-w-[1440px] mx-auto">
                    <Navbar />
                    <Hero />
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:p-6 pb-24">
                        <AppPreview />
                        <CompanionShowcase />
                        <Features />
                        <WorldEnvironment />
                        <DownloadPath />
                        <SafetyTrust />
                    </div>
                    <Philosophy />
                    <Footer />
                </div>
                <FloatingDownload />
            </div>
        </>

    );
}
