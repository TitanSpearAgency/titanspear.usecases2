
import React from 'react';
import './index.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import UseCasesDashboard from './components/UseCasesDashboard.tsx';
import Process from './components/Process.tsx';
import ROICalculator from './components/ROICalculator.tsx';
import FAQ from './components/FAQ.tsx';
import CTASection from './components/CTASection.tsx';
import Footer from './components/Footer.tsx';
import ChatBot from './components/ChatBot.tsx';
import TrustSection from './components/TrustSection.tsx';
import TechSpecs from './components/TechSpecs.tsx';

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <UseCasesDashboard />
        <Process />
        <TrustSection />
        <TechSpecs />
        <ROICalculator />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
