import { useEffect, useState, useRef } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaDatabase
} from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { SiTailwindcss, SiVite, SiC, SiExpress } from 'react-icons/si';

const App = () => {
  const sections = ['home', 'about', 'portfolio', 'contact'];
  const [activeSection, setActiveSection] = useState('home');
 const [activeTab, setActiveTab] = useState<'projects' | 'internships' | 'certifications' | 'techstack'>('projects');
 const [showLoader, setShowLoader] = useState(true);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    home: null,
    about: null,
    portfolio: null,
    contact: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold text-purple-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to My Portfolio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showLoader && (
        <>
          {/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg shadow-md">
  <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
    {/* Logo + Name */}
    <div className="flex items-center gap-3">
      <img
        src="/djlogo.jpg"
        alt="Logo"
        className="w-10 h-10 rounded-full shadow-purple-500/40 shadow-lg hover:rotate-6 hover:scale-105 transition-all duration-300"
      />
      <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 tracking-widest">
        DHARSAN B
      </span>
    </div>

    {/* Navigation Links */}
    <ul className="flex gap-6 text-sm font-medium text-white">
      {sections.map((sec) => (
        <li key={sec} className="cursor-pointer relative group">
          <a
            onClick={() => scrollTo(sec)}
            className={`transition-all ${
              activeSection === sec ? 'text-purple-400' : 'hover:text-purple-300'
            }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-500 group-hover:w-full ${
                activeSection === sec ? 'w-full' : 'w-0'
              }`}
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>



          {/* Sections */}
          <main className="pt-20">
            {/* Home */}
            <motion.section
  id="home"
  ref={(el) => { sectionRefs.current.home = el }}

  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col md:flex-row items-center justify-between min-h-screen text-center md:text-left px-4 gap-8"
>
  {/* Text Content */}
  <div className="md:w-1/2">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-400 mb-4">
      Hi, I'm <span className="text-white">DHARSAN</span>
    </h1>

    <motion.h2
      className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      A Passionate <span className="text-purple-300">Full Stack Developer</span> who builds modern web applications.
    </motion.h2>

    <motion.p
      className="max-w-xl text-base sm:text-lg text-gray-400 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      I specialize in developing high-performance, responsive, and accessible web applications using the latest technologies like React, Express, Tailwind, and more.
    </motion.p>

    <div className="flex gap-4 justify-center md:justify-start">
      <button
        onClick={() => scrollTo('portfolio')}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
      >
        View Projects
      </button>
      <button
        onClick={() => scrollTo('contact')}
        className="border border-purple-400 hover:bg-purple-600/30 text-purple-300 px-6 py-2 rounded-lg transition-all duration-300"
      >
        Contact Me
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="md:w-1/2">
    <img
      src="/home.jpg"
      alt="Full Stack Developer"
      className="w-full max-w-md mx-auto rounded-xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform duration-500"
    />
  </div>
</motion.section>

            {/* About */}
           <motion.section
  id="about"
  ref={(el) => { sectionRefs.current.home = el }}

  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 gap-10"
>
  {/* Profile Image */}
  <motion.div
  className="md:w-1/2 flex justify-center items-center"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <div className="relative group">
    {/* Glowing Ring */}
    <div className="absolute inset-0 rounded-full animate-pulse border-4 border-purple-500/30 blur-xl opacity-50 group-hover:opacity-70 group-hover:blur-md transition-all duration-300 z-0"></div>

    {/* Image Container with Hover Animations */}
    <img
      src="/profile.jpg"
      alt="Profile"
      className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl shadow-purple-500/40 object-cover transition-transform duration-500 transform hover:scale-105 hover:rotate-1"
    />
  </div>
</motion.div>


  {/* About Text */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-4xl font-bold text-purple-400 mb-4">About<span className="text-white"> Me</span></h2> 


    <p className="text-gray-300 text-lg leading-relaxed mb-4">
      I’m a <span className="text-purple-300 font-semibold">Full Stack Developer</span> with a passion for building elegant, high-performance, and user-focused web experiences. I thrive on challenges and enjoy solving real-world problems through technology.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mb-4">
      I'm skilled in technologies like <span className="text-purple-300">React, Express, Tailwind CSS,</span> and more, focusing on clean code and responsive design. I enjoy working on end-to-end development and staying up-to-date with the latest tools.
    </p>

    <div className="border-t border-purple-400 pt-4 text-sm text-gray-400 space-y-2">
      <p>🧠 Scored a perfect <span className="text-purple-300 font-medium">100/100 in Mathematics</span> in my board exams.</p>
      <p>♟️ Avid Chess player with strategic thinking and tournament experience.</p>
    </div>
  </div>
</motion.section>

            {/* Portfolio */}
<motion.section
  id="portfolio"
  ref={(el) => { sectionRefs.current.home = el }}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center min-h-screen flex flex-col justify-center"
>
  <h2 className="text-4xl font-bold text-purple-400 mb-6">Portfolio</h2>

  {/* Tab Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mb-6">
    {['projects', 'internships', 'certifications', 'techstack'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab as typeof activeTab)}
        className={`px-6 py-2 rounded-md transition-all duration-300 text-sm capitalize ${
          activeTab === tab
            ? 'bg-purple-500 text-white'
            : 'bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-600/40'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <div className="bg-white/5 p-6 rounded-xl border border-purple-500 shadow-lg backdrop-blur-md max-w-4xl mx-auto">
    {activeTab === 'projects' && (
      <div>
        <h3 className="text-2xl font-semibold text-purple-300 mb-2">Agrigenius – Smart Farming Platform</h3>
        <img src="/project.jpg" alt="Project" className="rounded-lg mb-4 w-full object-cover max-h-[300px]" />
        <p className="text-gray-300 text-left">
          Agrigenius is a full-stack smart farming assistant web app. It includes weather-based crop suggestions,
          soil optimization, and irrigation alerts. Built using React, Node.js, Express, MySQL, and Tailwind.
        </p>
      </div>
    )}

    {activeTab === 'internships' && (
      <div>
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">Internship – Ariv Executions</h3>
        <img
          src="/intern.jpg"
          alt="Internship Offer Letter"
          className="w-full rounded-lg shadow-md max-h-[500px] object-contain"
        />
        <p className="text-gray-300 mt-4 text-left">
          Completed a frontend internship from <span className="text-purple-300 font-medium">18 June 2025 to 10 July 2025</span>,
          working on UI frameworks including Bootstrap, HTML5, CSS3, JavaScript, and jQuery.
        </p>
      </div>
    )}

{activeTab === 'certifications' && (
  <div>
    <h3 className="text-2xl font-semibold text-purple-300 mb-6">Certifications</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { title: 'AIML With Deep Learning Workshop - IITM', img: '/iitmworkshop.jpg' },
        { title: '24 Hrs Hackathon - Hack-O-Holics', img: '/hackoholics.jpg' },
        { title: 'Embedded C Programming Workshop - TCE', img: '/teletec.jpg' },
        { title: 'Python Basics - SoloLearn', img: '/python.jpg' },
        { title: 'Exemplary Performance - Mindspark', img: '/mindspark.jpg' },
        { title: 'Sparkie Champ - Mindspark', img: '/sparkie.jpg' },    
        { title: 'Mathematics Exemplary - Cambridge', img: '/cambridge.jpg' }
      ].map((cert, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-transparent p-4 rounded-xl shadow-xl hover:shadow-purple-600/20 transition-shadow duration-300"
        >
          <img
            src={cert.img}
            alt={cert.title}
            className="rounded-xl w-full h-48 object-contain mb-3 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-purple-300 text-sm text-center">{cert.title}</p>
        </motion.div>
      ))}
    </div>
  </div>
)}

{activeTab === 'techstack' && (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center mt-4">
        {[
          { name: 'Python', icon: <FaPython /> },
          { name: 'Java', icon: <FaJava /> },
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'CSS', icon: <FaCss3Alt /> },
          { name: 'React', icon: <FaReact /> },
          { name: 'Bootstrap', icon: <FaBootstrap /> },
          { name: 'Tailwind', icon: <SiTailwindcss /> },
          { name: 'Vite', icon: <SiVite /> },
          { name: 'SQL', icon: <FaDatabase /> },
          { name: 'C', icon: <SiC /> },
          { name: 'Express', icon: <SiExpress /> },
        ].map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center text-purple-300 hover:text-white transition-transform transform hover:scale-110"
          >
            <div className="text-4xl">{tech.icon}</div>
            <p className="mt-1 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
</motion.section>



            {/* Contact */}
<motion.section
  id="contact"
  ref={(el) => { sectionRefs.current.home = el }}
initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center min-h-screen px-4"
>
  <h2 className="text-4xl font-bold text-white mb-2">Contact Me</h2>
  <p className="text-purple-300 mb-8 text-center">
    Reach out through the form or connect with me directly!
  </p>

  {/* Contact Details */}
  <div className="flex flex-wrap justify-center gap-6 mb-8 text-white">
    <div className="flex items-center gap-2">
      <FaPhone className="text-purple-400" />
      <span>+91 70104 55302</span>
    </div>
    <div className="flex items-center gap-2">
      <FaEnvelope className="text-purple-400" />
      <span>dharsanb2020.2021@gmail.com</span>
    </div>
    <div className="flex items-center gap-2">
      <FaLinkedin className="text-purple-400" />
      <a
        href="https://linkedin.com/in/dharsan"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-purple-300 transition"
      >
        linkedin.com/in/dharsan
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaInstagram className="text-purple-400" />
      <a
        href="https://www.instagram.com/_dharsan_jevold_?igsh=YWNxMWx3bHo2OTE5"
        target="https://www.instagram.com/_dharsan_jevold_?igsh=YWNxMWx3bHo2OTE5"
        rel="noopener noreferrer"
        className="hover:underline hover:text-purple-300 transition"
      >
        @_dharsan_jevold_
      </a>
    </div>
  </div>

  {/* Contact Form */}
<form
  action="https://formsubmit.co/dharsanb2020.2021@gmail.com"
  method="POST"
  className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6"
>
  {/* Anti-spam and redirect */}
  <input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_next" value="https://portfolio-zl8m.vercel.app/#thanks" />
<input type="hidden" name="_next" value="https://dharsan-jevold-portfolio.vercel.app/thanks" />


  <div className="flex flex-col sm:flex-row gap-6">
    <div className="flex-1">
      <label htmlFor="name" className="block text-sm text-white mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded-md bg-black/50 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        required
      />
    </div>

    <div className="flex-1">
      <label htmlFor="email" className="block text-sm text-white mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        className="w-full px-4 py-2 rounded-md bg-black/50 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        required
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm text-white mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      placeholder="Your message..."
      className="w-full px-4 py-2 rounded-md bg-black/50 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300"
  >
    Send Message
  </button>
</form>

</motion.section>
<section id="thanks" className="min-h-screen flex items-center justify-center text-center px-4">
  <div className="bg-white/10 p-10 rounded-xl shadow-xl max-w-xl">
    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Thank You! 🙌</h2>
    <p className="text-gray-300 text-lg">
      Your message has been successfully sent. <br />
      I’ll get back to you as soon as possible.
    </p>
  </div>
</section>



          </main>
        </>
      )}
    </div>
  );
};

export default App;