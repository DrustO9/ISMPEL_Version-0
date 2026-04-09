import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Info, MapPin, Mail, Phone, CheckCircle2, FlaskConical, Target, Library, Atom } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const SML_LOGO = "/sml-assets/SML Logo2_edited.jpg";
  const HERO_BG = "/sml-assets/cf1216_10bf3bc3cec748318875b13e6ffccf06~mv2.jpg";

  const navItems = [
    'Home',
    'Our Members',
    'Research Focus',
    'Publications and Patents',
    'Teaching',
    'Gallery',
    'Openings',
    'Contact'
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col items-center bg-sml-bg">
      {/* Absolute Header Area */}
      <div className="w-full relative h-[450px]">
        {/* Banner Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${HERO_BG}')`, filter: 'brightness(0.7)' }}
        ></div>

        {/* Navy Navigation Bar */}
        <nav className="absolute top-0 w-full bg-sml-navy/95 backdrop-blur z-50 text-white flex justify-center py-4 px-4 shadow-md">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider">
            {navItems.map(item => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className={`cursor-pointer transition-colors ${activeTab === item
                  ? "bg-sml-yellow text-black px-5 py-2 rounded-full font-bold"
                  : "hover:text-gray-300 py-2"
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area Container - Overlapping Banner */}
      <div className="w-full max-w-6xl -mt-64 relative z-10 px-6">

        {/* White Identity Card Section */}
        <div className="bg-white rounded-lg shadow-xl p-10 flex flex-col items-center justify-center text-center mb-12 relative overflow-hidden">
          {/* ISMPEL Branding Header */}
          <div className="w-full bg-sml-navy text-white rounded-lg p-6 md:p-8 mb-8 text-center shadow-md border-b-4 border-sml-yellow relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <Atom className="w-64 h-64" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest mb-2 relative z-10">ISMPEL</h2>
            <p className="text-sm md:text-lg font-light tracking-wide text-gray-300 relative z-10">
              Integrated Sustainable Materials and Process Engineering Laboratory
            </p>
          </div>

          {/* Main Name */}
          <h1 className="font-serif text-5xl font-normal text-sml-navy mb-4 tracking-wide relative z-10">
            Dr. Suverna Trivedi
          </h1>
          <div className="h-[2px] w-1/4 bg-sml-yellow rounded mb-6 relative z-10"></div>

          {/* Affiliation / Bilingual Details */}
          <div className="space-y-1 relative z-10">
            <h2 className="text-xl font-bold tracking-wide text-gray-800">
              सुवर्णा त्रिवेदी | Suverna Trivedi
            </h2>
            <h3 className="text-md text-gray-600 font-medium tracking-wide">
              सहायक प्रोफेसर | Assistant professor
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              रासायनिक अभियांत्रिकी विभाग | Department of Chemical Engineering
            </p>
            <p className="text-sm font-bold text-sml-navy">
              भारतीय प्रौद्योगिकी संस्थान खड़गपुर | IIT Kharagpur
            </p>
          </div>

          {/* Contact Bar within Identity */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-6 text-sm text-gray-600 relative z-10">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-sml-yellow" /> +91-3222-28914 (O)</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-sml-yellow" /> +91-9451811492</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-sml-yellow" /> strivedi@che.iitkgp.ac.in</span>
          </div>
        </div>

        {/* Tab Content Rendering */}
        <div className="min-h-[400px]">
          {activeTab === 'Home' && <HomeContent />}
          {activeTab === 'Openings' && <OpeningsContent />}
          {activeTab === 'Research Focus' && <ResearchFocusContent />}
          {activeTab === 'Contact' && <ContactContent />}

          {['Our Members', 'Publications and Patents', 'Teaching', 'Gallery'].includes(activeTab) && (
            <div className="bg-white p-20 text-center rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <h2 className="text-4xl font-light text-gray-300 mb-4">{activeTab}</h2>
              <p className="text-gray-500">This section is currently under construction. Content will be added here soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f1f1f1] py-16 px-6 mt-10 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          <div className="flex flex-col items-center md:items-start">
            <img src="/sml-assets/SML Logo2_edited.jpg" alt="Logo" className="w-32 mb-4 grayscale pointer-events-none max-w-full" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<div class="w-20 h-20 bg-gray-200 border text-center flex flex-col items-center justify-center font-bold text-xs"><Atom class="w-6 h-6 mb-1"/>ISMPEL</div>') }} />
            <p className="text-gray-500 text-sm font-medium tracking-wide text-center md:text-left">
              © {new Date().getFullYear()} Dr. Suverna Trivedi.<br />
              ISMPEL | IIT Kharagpur.<br />All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:bg-sml-navy hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:bg-sml-navy hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:bg-sml-navy hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
            <div className="text-center md:text-right text-gray-500 text-sm space-y-1">
              <p className="flex items-center justify-center md:justify-end gap-2"><MapPin className="w-3 h-3" /> IIT Kharagpur, West Bengal 721302</p>
              <p className="flex items-center justify-center md:justify-end gap-2"><Mail className="w-3 h-3" /> strivedi@che.iitkgp.ac.in</p>
              <p className="flex items-center justify-center md:justify-end gap-2"><Mail className="w-3 h-3" /> suverna.chemical@gmail.com</p>
              <p className="flex items-center justify-center md:justify-end gap-2"><Phone className="w-3 h-3" /> +91-3222-28914 (O)</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

// -----------------------------------------------------
// Home Component
// -----------------------------------------------------
const HomeContent = () => {
  return (
    <>


      {/* Dynamic Carousel / Group Photo Placeholder */}
      <div className="w-full h-[500px] bg-slate-200 rounded-lg shadow-lg overflow-hidden mb-16 relative group cursor-pointer border border-gray-100">
        <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-slate-50 flex items-center justify-center flex-col">
          <span className="bg-sml-navy text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg">Group Photo & Research Highlights</span>
          <p className="text-gray-500 mt-4 text-sm font-medium">Auto-scrolling Carousel Area</p>
        </div>
      </div>

      {/* Welcome Block */}
      <section className="text-center max-w-4xl mx-auto mb-20 relative px-4">
        <h2 className="text-3xl font-bold text-sml-navy mb-8 tracking-[0.2em] relative inline-block">
          WELCOME TO ISMPEL
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sml-yellow"></span>
        </h2>
        <p className="text-lg text-gray-700 leading-9 font-light">
          We focus on developing advanced systems for <strong className="font-semibold">wearable electronics, soft robotics, sensing arrays, and clean energy harvesting</strong>. Our multidisciplinary team sits at the interface of chemistry, materials science, and device engineering.
        </p>
      </section>
    </>
  );
};

// -----------------------------------------------------
// Openings Component
// -----------------------------------------------------
const OpeningsContent = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sml-navy tracking-tight uppercase mb-4">Call for PhD Students</h2>
        <div className="w-24 h-1 bg-sml-yellow mx-auto"></div>
        <p className="mt-6 text-gray-600 text-lg">Join the Integrated Sustainable Materials and Process Engineering Laboratory (ISMPEL) at IIT Kharagpur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Prerequisites */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-sml-navy mb-6 flex items-center gap-3">
            <Target className="text-sml-yellow" /> Prerequisites
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed"><strong>Academic eligibility:</strong> For BTech - GATE required. For MTech - GATE not required.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">Background in Chemical Engineering / Chemistry / Physics / Material Science.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">High resilience & research curiosity.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">Smart diligence in experiments.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">Basic reaction engineering knowledge.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">Knowledge of characterization tools.</span>
            </li>
          </ul>
        </div>

        {/* Skillsets */}
        <div className="bg-sml-navy text-white p-8 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <FlaskConical className="w-64 h-64" />
          </div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10 text-sml-yellow">
            <Library /> What You Will Learn
          </h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">Optical & Chromatographic Analytical Techniques</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">Nanomaterial Synthesis and Characterization</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">Four-State Reaction Engineering + Radical Chemistry</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">Techno-Economic + DFT Analysis</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">Aspen Plus & HYSYS Simulations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sml-yellow"></span>
              <span className="font-light tracking-wide">MATLAB + Python + AI/ML for Material Discovery</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-amber-50 border-l-4 border-sml-yellow p-6 rounded-r-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-gray-800 text-lg mb-1">Ready to Apply?</h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Interested candidates should email their detailed CV highlighting their research interests and academic background.
          </p>
        </div>
        <a
          href="mailto:strivedi@che.iitkgp.ac.in"
          className="shrink-0 bg-sml-navy text-white px-8 py-3 rounded uppercase tracking-widest font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
        >
          Email Dr. Trivedi
        </a>
      </div>
    </div>
  );
};

// -----------------------------------------------------
// Research Focus Component
// -----------------------------------------------------
const ResearchFocusContent = () => {
  const focuses = [
    { title: "Advanced Heterogenous Catalysts", desc: "Efficient vehicular emission control." },
    { title: "Biomass Conversion", desc: "Converting renewable feedstocks into clean hydrogen." },
    { title: "Photocatalysis", desc: "Wastewater treatment coupled with hydrogen production." },
    { title: "Chemical Looping", desc: "CH₄ processing facilitating carbon-neutral cycles." },
    { title: "AI/ML Applications", desc: "Accelerating material discovery and advanced molecular analysis." }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-sml-navy tracking-widest uppercase mb-4">Key Research Ideas</h2>
        <div className="w-20 h-1 bg-sml-yellow mx-auto"></div>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          ISMPEL focuses on creating sustainable chemical processes and engineered materials to tackle the pressing global challenges in energy and environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {focuses.map((focus, idx) => (
          <div key={idx} className="group flex flex-col bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-sml-navy font-bold text-xl mb-6">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sml-navy transition-colors">{focus.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {focus.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// -----------------------------------------------------
// Contact Component
// -----------------------------------------------------
const ContactContent = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-16 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-sml-navy tracking-widest uppercase mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-sml-yellow mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Principal Investigator</h3>
            <p className="text-2xl font-serif text-sml-navy">Dr. Suverna Trivedi</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Laboratory</h3>
            <p className="text-lg font-medium text-gray-800">ISMPEL</p>
            <p className="text-gray-600 italic text-sm mt-1">Integrated Sustainable Materials and Process Engineering Laboratory</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h3>
            <p className="text-gray-700 bg-gray-50 p-4 rounded border">
              Department of Chemical Engineering<br />
              Indian Institute of Technology Kharagpur<br />
              West Bengal 721302, India
            </p>
          </div>
        </div>

        <div className="bg-sml-navy text-white p-8 rounded-lg shadow-md space-y-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sml-yellow opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>

          <div>
            <h3 className="text-sml-yellow font-bold uppercase tracking-widest text-sm mb-3">Email Address</h3>
            <a href="mailto:strivedi@che.iitkgp.ac.in" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
              <Mail className="w-5 h-5 opacity-70" /> strivedi@che.iitkgp.ac.in
            </a>
            <a href="mailto:suverna.chemical@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 mt-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 opacity-50" /> suverna.chemical@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sml-yellow font-bold uppercase tracking-widest text-sm mb-3">Phone Numbers</h3>
            <p className="flex items-center gap-3 text-lg">
              <Phone className="w-5 h-5 opacity-70" /> +91-3222-28914 (Office)
            </p>
            <p className="flex items-center gap-3 text-lg mt-3">
              <Phone className="w-5 h-5 opacity-70" /> +91-9451811492 (Mobile)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
