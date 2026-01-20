
import React, { useState, useEffect, useMemo } from 'react';
import { SectionID, LearningSection, Topic } from './types';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionID>('home');
  const [activeTopicIndex, setActiveTopicIndex] = useState<number | null>(null);
  const [showLegal, setShowLegal] = useState<'privacy' | 'rules' | 'docs' | null>(null);

  const selectedSection = useMemo(() => SECTIONS.find(s => s.id === currentSection), [currentSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTopicIndex(null);
  }, [currentSection]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveTopicIndex(null);
        setShowLegal(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="mb-10 flex justify-center">
           <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-white text-5xl shadow-2xl">
             <i className="fa-solid fa-graduation-cap"></i>
           </div>
        </div>
        <span className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
          Learning Simplified for Students
        </span>
        <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
          HKP HUB
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate student guide for programming languages, OS installation, and Linux commands. Explained in simple words.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {SECTIONS.map((section) => (
          <div 
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className="group cursor-pointer bg-white p-10 md:p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-3"
          >
            <div className={`w-20 h-20 ${section.color} rounded-[2.2rem] flex items-center justify-center text-white text-4xl mb-10 shadow-xl group-hover:rotate-12 transition-transform`}>
              <i className={section.icon}></i>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{section.title}</h3>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">{section.shortDesc}</p>
            <div className="flex items-center text-indigo-600 font-black text-xs uppercase tracking-widest">
              Explore Guide <i className="fa-solid fa-arrow-right ml-4 group-hover:translate-x-3 transition-transform"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderModal = (section: LearningSection, index: number) => {
    const topic = section.topics[index];
    if (!topic) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setActiveTopicIndex(null)} />
        <div className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
          <div className="p-8 md:px-12 md:pt-12 flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                <i className={section.icon}></i>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-1">
                  {topic.category ? `${topic.category} • ` : ''}Lesson {index + 1}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                  {topic.title}
                </h2>
              </div>
            </div>
            <button 
              onClick={() => setActiveTopicIndex(null)} 
              className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-all"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 md:px-12 pb-12">
            <div className="prose prose-slate max-w-none">
              <p className="text-xl md:text-2xl text-slate-600 font-medium whitespace-pre-wrap leading-relaxed mb-10 opacity-90">
                {topic.content}
              </p>
              {topic.codeSnippet && (
                <div className="mt-10 group">
                  <div className="bg-slate-900 text-white/40 px-8 py-4 rounded-t-3xl text-[9px] font-black uppercase tracking-widest flex justify-between items-center">
                    <span>Practical Example</span>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(topic.codeSnippet || '');
                        alert('Copied to clipboard!');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      COPY CODE
                    </button>
                  </div>
                  <pre className="bg-slate-900 text-emerald-400 p-8 md:p-10 rounded-b-3xl overflow-x-auto font-mono text-lg border border-white/5">
                    {topic.codeSnippet}
                  </pre>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 md:px-12 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <button 
              disabled={index === 0} 
              onClick={() => setActiveTopicIndex(index - 1)} 
              className="px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-400 hover:text-slate-900 disabled:opacity-20 font-black text-[10px] uppercase tracking-widest transition-all"
            >
              Previous
            </button>
            <button 
              disabled={index === section.topics.length - 1} 
              onClick={() => setActiveTopicIndex(index + 1)} 
              className={`px-10 py-4 rounded-2xl text-white shadow-xl font-black text-[10px] uppercase tracking-widest transition-all ${index === section.topics.length - 1 ? 'bg-slate-200' : `${section.color} hover:scale-105 active:scale-95`}`}
            >
              Next Topic
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderSection = (section: LearningSection) => {
    const categorized = section.topics.reduce((acc, topic, idx) => {
      const cat = topic.category || 'General';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ topic, originalIndex: idx });
      return acc;
    }, {} as Record<string, { topic: Topic, originalIndex: number }[]>);

    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-20 animate-in slide-in-from-left-4 duration-500">
          <div className="flex items-center gap-5 mb-8">
            <div className={`w-16 h-16 ${section.color} rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl`}>
              <i className={section.icon}></i>
            </div>
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400">Section Modules</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            {section.title} Notes
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">{section.shortDesc}</p>
        </div>

        {Object.entries(categorized).map(([category, items]) => (
          <div key={category} className="mb-24">
            {category !== 'General' && (
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-12 pb-6 border-b-4 border-slate-100 flex items-center gap-4">
                <span className={`w-2 h-8 ${section.color} rounded-full`}></span>
                {category}
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map(({ topic, originalIndex }, idx) => (
                <div 
                  key={originalIndex} 
                  onClick={() => setActiveTopicIndex(originalIndex)} 
                  className="group cursor-pointer bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-3 flex flex-col justify-between min-h-[240px]"
                >
                  <div>
                    <div className={`w-12 h-12 ${section.color} rounded-2xl flex items-center justify-center text-white text-sm font-black mb-8 opacity-20 group-hover:opacity-100 transition-all`}>
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">
                      {topic.title}
                    </h3>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-indigo-600">Simplified Notes</span>
                    <i className="fa-solid fa-chevron-right text-[10px] text-slate-200 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {activeTopicIndex !== null && renderModal(section, activeTopicIndex)}
      </div>
    );
  };

  const renderLegalModal = () => {
    if (!showLegal) return null;
    const isPrivacy = showLegal === 'privacy';
    const isRules = showLegal === 'rules';
    const isDocs = showLegal === 'docs';
    
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowLegal(null)} />
        <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                {isPrivacy ? 'Privacy Policy' : isRules ? 'Platform Rules' : 'Platform Documentation'}
              </h2>
              <button onClick={() => setShowLegal(null)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
              {isPrivacy && (
                <>
                  <p>• HKP HUB is built for students. We do NOT collect any personal data or track your behavior.</p>
                  <p>• This platform is completely free and will remain free forever for students.</p>
                  <p>• We don't use cookies to serve ads. Your learning experience is uninterrupted.</p>
                </>
              )}
              {isRules && (
                <>
                  <p>• All content is for educational purposes only. Do not use for commercial gain.</p>
                  <p>• Respect the intellectual work; if you share this, please credit HKP HUB.</p>
                  <p>• Learning is a community effort. Help your fellow students whenever possible.</p>
                  <p>• No piracy of copyrighted software is encouraged here; we focus on open-source logic.</p>
                </>
              )}
              {isDocs && (
                <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100">
                  <p className="mb-4 text-indigo-900 font-black uppercase text-xs tracking-widest flex items-center gap-2">
                    <i className="fa-solid fa-bolt"></i> System Note
                  </p>
                  <p className="mb-4">HKP HUB is an <strong>AI-based learning platform</strong>. We utilize advanced AI technologies to simplify complex topics specifically for student understanding.</p>
                  <p className="mb-4">This site is running on AI-driven logic, which means our data is <strong>updated day-by-day</strong> to ensure accuracy and relevance.</p>
                  <p>We believe in constant evolution. We will keep going, making <strong>constant changes</strong> and improvements to provide you with the best education experience.</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setShowLegal(null)}
              className="mt-12 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <header className="sticky top-0 z-50 glass border-b border-slate-200/60 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div onClick={() => setCurrentSection('home')} className="flex items-center gap-4 cursor-pointer group">
            <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 text-white text-xl shadow-lg group-hover:scale-105 transition-transform">
              {selectedSection ? (
                <i className={`${selectedSection.icon} text-2xl`}></i>
              ) : (
                <i className="fa-solid fa-graduation-cap text-2xl"></i>
              )}
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none flex items-center gap-2">
                HKP {currentSection !== 'home' && <span className="text-slate-300">|</span>} 
                <span className="text-indigo-600">
                  {currentSection === 'home' ? 'HUB' : currentSection.toUpperCase()}
                </span>
              </h1>
              <span className="text-[8px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1">Student Knowledge Hub</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <button onClick={() => setCurrentSection('home')} className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${currentSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}>Home</button>
            {SECTIONS.map(s => (
              <button 
                key={s.id} 
                onClick={() => setCurrentSection(s.id)} 
                className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${currentSection === s.id ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
              >
                {s.title}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-100 items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Live Learning
            </div>
            <button className="lg:hidden w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
               <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-slate-50/50">
        {currentSection === 'home' ? renderHome() : (selectedSection && renderSection(selectedSection))}
      </main>

      <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="h-14 w-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-xl">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">HKP HUB</h4>
          <p className="text-slate-400 text-base font-medium max-w-sm text-center mb-10">
            A simplified digital library empowering students with the skills of tomorrow.
          </p>
          
          {/* Social Links Area */}
          <div className="flex items-center gap-4 mb-12">
            <a href="https://github.com/HarshithPathipaka-Git" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshithpathipaka/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all shadow-sm">
              <i className="fa-brands fa-linkedin-in text-lg"></i>
            </a>
            <a href="mailto:hkphub@gmail.com" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
              <i className="fa-solid fa-envelope text-lg"></i>
            </a>
          </div>

          <div className="w-full h-px bg-slate-100 mb-10"></div>

          {/* Legal and fine print */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <button onClick={() => setShowLegal('privacy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
              <button onClick={() => setShowLegal('rules')} className="hover:text-indigo-600 transition-colors">Platform Rules</button>
              <button onClick={() => setShowLegal('docs')} className="hover:text-indigo-600 transition-colors">Documentation</button>
            </div>
            <div className="text-[9px] text-slate-300 font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} HKP HUB Student Portal
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {renderLegalModal()}
    </div>
  );
};

export default App;
