/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  FlaskConical, 
  Users, 
  BookOpen, 
  Image as ImageIcon, 
  Send,
  Calendar,
  Award,
  ArrowRight,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import data from './data.json';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Research', 
      path: '/research',
      dropdown: [
        { name: 'Overview', path: '/research' },
        { name: 'Funding', path: '/research/funding' },
        { name: 'Projects', path: '/research/projects' },
      ]
    },
    { name: 'Publications', path: '/publications' },
    { name: 'Members', path: '/members' },
    { name: 'Memories', path: '/memories' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-white border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div className="hidden md:block">
              <h1 className="text-sm font-bold text-slate-900 leading-tight uppercase tracking-wider">
                Physics Lab
              </h1>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
                IIT Kharagpur
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center">
                    <button className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                      location.pathname.startsWith(link.path) ? "text-indigo-600 bg-indigo-50" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                    )}>
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === link.path ? "text-indigo-600 bg-indigo-50" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {link.name}
                      </div>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Lab of Soft Matter & Biophysics</h3>
          <p className="text-sm leading-relaxed mb-6">
            Exploring the physics of interfaces, complex systems, and biological mechanics at IIT Kharagpur.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/research" className="hover:text-white transition-colors">Research Areas</Link></li>
            <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
            <li><Link to="/members" className="hover:text-white transition-colors">Lab Members</Link></li>
            <li><Link to="/join-us" className="hover:text-white transition-colors">Join the Lab</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>{data.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>{data.contact.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>{data.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        <p className="mt-2">Department of Physics, Indian Institute of Technology Kharagpur.</p>
      </div>
    </div>
  </footer>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="pt-24 pb-20"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const HomePage = () => (
  <PageWrapper>
    {/* Hero Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            IIT Kharagpur
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
            {data.name}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            {data.welcome}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/research" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
              Explore Research <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/join-us" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Join the Lab
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/lab-hero/1000/1000" 
              alt="Lab Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
            <p className="text-indigo-600 font-serif italic text-lg mb-2">"{data.tagline}"</p>
            <p className="text-slate-500 text-sm">— Dr. Joydip Chaudhuri</p>
          </div>
        </div>
      </div>
    </section>

    {/* Research Highlights */}
    <section className="bg-slate-50 py-24 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Research Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We work at the cutting edge of soft matter physics and biophysics, combining experimental and theoretical approaches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.researchAreas.map((area) => (
            <Link key={area.id} to="/research" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{area.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* News Feed */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Latest in Lab</h2>
        <div className="h-px bg-slate-200 flex-grow mx-8 hidden sm:block"></div>
      </div>
      <div className="space-y-6">
        {data.news.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="w-16 h-16 rounded-xl bg-indigo-50 flex flex-col items-center justify-center text-indigo-600 shrink-0">
              <Calendar className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-bold uppercase">{new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
              <p className="text-xs text-slate-400 mt-2 font-medium">{new Date(item.date).toLocaleDateString()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </PageWrapper>
);

const ResearchPage = () => (
  <PageWrapper>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Research Overview</h1>
        <p className="text-xl text-slate-600 italic">"{data.tagline}"</p>
      </div>

      <div className="space-y-24">
        {data.researchAreas.map((area, idx) => (
          <div key={area.id} className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            idx % 2 === 1 && "lg:flex-row-reverse"
          )}>
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{area.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {area.description}
              </p>
              <div className="flex gap-4">
                <Link to="/publications" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View Publications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const FundingPage = () => (
  <PageWrapper>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-12">Research Funding</h1>
      <div className="space-y-8">
        {data.funding.map((grant, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
                Active Grant
              </div>
              <span className="text-slate-400 font-mono text-sm">{grant.period}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{grant.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Agency</p>
                <p className="text-slate-700 font-medium">{grant.agency}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Role</p>
                <p className="text-slate-700 font-medium">{grant.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const ProjectsPage = () => (
  <PageWrapper>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Ongoing Projects</h1>
        <p className="text-xl text-slate-600">Detailed look into our current research initiatives.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.projects.map((project) => (
          <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.media[0].url} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                  project.status === 'Ongoing' ? "bg-indigo-600 text-white" : "bg-slate-800 text-white"
                )}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">{project.area}</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3">Team Members</h4>
                <div className="flex flex-wrap gap-2">
                  {project.team.map(name => (
                    <span key={name} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 pt-0 mt-auto">
              <button className="w-full py-4 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const PublicationsPage = () => {
  const years = Array.from(new Set(data.publications.map(p => p.year))).sort((a, b) => b - a);
  
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Publications</h1>
          <p className="text-xl text-slate-600">What we've learned so far.</p>
        </div>

        <div className="space-y-16">
          {years.map(year => (
            <div key={year}>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                {year}
                <div className="h-px bg-slate-200 flex-grow"></div>
              </h2>
              <div className="space-y-8">
                {data.publications.filter(p => p.year === year).map((pub, idx) => (
                  <div key={idx} className="group">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-slate-600 mb-2">{pub.authors}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                          <span className="font-bold text-slate-900">{pub.journal}</span>
                          <span className="text-slate-400">{pub.year}</span>
                          <a 
                            href={`https://doi.org/${pub.doi}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-medium flex items-center gap-1 hover:underline"
                          >
                            DOI <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

const MembersPage = () => (
  <PageWrapper>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Lab Members</h1>
        <p className="text-xl text-slate-600">The crew behind the chaos, calculus, and curiosity.</p>
      </div>

      {/* PI Section */}
      <section className="mb-24">
        <div className="bg-indigo-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-square lg:aspect-auto h-full">
              <img 
                src={data.members.pi.image} 
                alt={data.members.pi.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">Principal Investigator</span>
              <h2 className="text-4xl font-bold text-white mb-6">{data.members.pi.name}</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-10">
                {data.members.pi.bio}
              </p>
              <div className="flex gap-4">
                <a href={data.members.pi.links.scholar} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm font-bold flex items-center gap-2">
                  Google Scholar <ExternalLink className="w-4 h-4" />
                </a>
                <a href={data.members.pi.links.orcid} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm font-bold flex items-center gap-2">
                  ORCID <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Current Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.current.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
                  </div>
                  <a href={`mailto:${member.email}`} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Research Area</p>
                    <p className="text-slate-700 text-sm">{member.area}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 italic text-sm">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    <span>Loves: {member.loves}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni & Collaborators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Alumni</h2>
          <div className="space-y-4">
            {data.members.alumni.map((alumnus, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900">{alumnus.name}</h4>
                <p className="text-sm text-slate-500 mb-2">{alumnus.role}</p>
                <p className="text-xs text-indigo-600 font-medium">Currently: {alumnus.current}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Collaborators</h2>
          <div className="space-y-4">
            {data.members.collaborators.map((collab, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900">{collab.name}</h4>
                <p className="text-sm text-slate-500">{collab.institution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </PageWrapper>
);

const MemoriesPage = () => (
  <PageWrapper>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Memories</h1>
        <p className="text-xl text-slate-600">Snapshots of our journey.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, idx) => (
          <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <img 
              src={`https://picsum.photos/seed/memory-${idx}/600/600`} 
              alt={`Memory ${idx}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const JoinUsPage = () => (
  <PageWrapper>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Join the Lab</h1>
        <p className="text-xl text-slate-600">We are always looking for curious minds to join our team.</p>
      </div>

      <div className="space-y-12">
        <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Open Positions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Postdoctoral Fellows</h3>
              <p className="text-slate-600 text-sm mb-4">
                Candidates with a PhD in Physics, Biophysics, or related fields are encouraged to apply. We support applications for NPDF, Institute PDF, and other national fellowships.
              </p>
              <div className="flex flex-wrap gap-2">
                {['NPDF', 'BioCARe', 'NBHM', 'DST-RA'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded uppercase">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">PhD Students</h3>
              <p className="text-slate-600 text-sm">
                Motivated students with a strong background in physics and an interest in soft matter are welcome. Admissions are through the IIT Kharagpur central portal.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-indigo-600" />
            How to Apply
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-4">
              If you are interested in our research, please send your CV and a brief research statement (max 1 page) to <strong>{data.contact.email}</strong>.
            </p>
            <p>
              In your email, please specify:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Your academic background and key skills.</li>
              <li>Which research area of ours interests you most and why.</li>
              <li>Your long-term research goals.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </PageWrapper>
);

const ContactPage = () => (
  <PageWrapper>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600">Get in touch or visit our laboratory.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <MapPin className="w-8 h-8 text-indigo-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {data.contact.office}<br />
                {data.contact.address}
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <FlaskConical className="w-8 h-8 text-indigo-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Laboratory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {data.contact.lab}
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <Mail className="w-8 h-8 text-indigo-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-sm mb-1">{data.contact.email}</p>
              <p className="text-slate-400 text-xs">Google Group: {data.contact.group}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <Phone className="w-8 h-8 text-indigo-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 text-sm">
                {data.contact.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          {/* Placeholder for Google Map */}
          <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 p-12 text-center">
            <MapPin className="w-16 h-16 mb-4 opacity-20" />
            <p className="font-bold text-slate-500 mb-2">IIT Kharagpur, West Bengal</p>
            <p className="text-sm max-w-xs">Map integration would be placed here. Visit us at the Department of Physics.</p>
            <a 
              href="https://www.google.com/maps/search/IIT+Kharagpur+Physics+Department" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/research/funding" element={<FundingPage />} />
              <Route path="/research/projects" element={<ProjectsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/memories" element={<MemoriesPage />} />
              <Route path="/join-us" element={<JoinUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
