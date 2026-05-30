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
import Creators from '../components/Creators';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#F5FAF8] overflow-x-hidden">
            <PixelBackground />
            <div className="relative z-10 w-full">
                <div className="w-full">
                    <div className="w-full">
                        <Navbar />
                        <Hero />
                        <Creators />
                        <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:bg-white/40 lg:backdrop-blur-md lg:rounded-[48px] lg:border lg:border-white/80 lg:overflow-hidden lg:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] lg:mt-12">
                            <div className="lg:border-r lg:border-teal/5"><AppPreview /></div>
                            <div className="lg:border-b-[0px]"><CompanionShowcase /></div>
                            <div className="lg:border-t lg:border-r lg:border-teal/5"><Features /></div>
                            <div className="lg:border-t lg:border-teal/5"><WorldEnvironment /></div>
                            <div className="lg:border-t lg:border-r lg:border-teal/5"><DownloadPath /></div>
                            <div className="lg:border-t lg:border-teal/5"><SafetyTrust /></div>
                            <div className="lg:col-span-2 lg:border-t lg:border-teal/5"><Philosophy /></div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <FloatingDownload />
        </main>
    );
}
