/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "motion/react";
import { useState, useRef, MouseEvent, useEffect } from "react";
import { 
  Menu, 
  Wallet, 
  Coins, 
  Gamepad2, 
  Users, 
  Settings2, 
  MessageSquare, 
  Bolt, 
  ArrowRight,
  Box,
  BarChart,
  PenTool,
  TrendingUp,
  Calendar,
  ShieldCheck,
  Rocket
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] bg-transparent backdrop-blur-xl border-b-[0.6px] border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] flex justify-between items-center px-6 md:px-[120px] py-[20px]">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-white font-headline">AIFORGROWTH</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="hidden md:block px-6 py-2 rounded-full border-[0.6px] border-white/20 text-white font-headline text-xs tracking-widest uppercase hover:bg-white/5 transition-all duration-300"
          >
            Home
          </a>
          <a 
            href="#agents"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("agents");
            }}
            className="light-streak hidden md:block px-6 py-2 rounded-full border-[0.6px] border-white/40 bg-black text-white font-headline text-xs tracking-widest uppercase hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 transition-all duration-300"
          >
            Agents
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="text-2xl font-headline font-bold text-white tracking-widest uppercase hover:text-white/60 transition-colors"
            >
              Home
            </a>
            <a 
              href="#agents"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("agents");
              }}
              className="text-2xl font-headline font-bold text-white tracking-widest uppercase hover:text-white/60 transition-colors"
            >
              Agents
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white/60 font-headline text-xs tracking-widest uppercase hover:bg-white/5 transition-all"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null); 
  const { scrollY } = useScroll({
    container: containerRef 
  });
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToAgents = () => {
    const element = document.getElementById("agents");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </motion.div>
      
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gradient-aifg text-4xl md:text-[56px] font-medium leading-[1.1] md:leading-[1.28] tracking-tight max-w-4xl font-headline mb-6"
        >
          AI-Driven Growth at Scale
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-on-surface-variant text-sm md:text-[15px] leading-relaxed max-w-[680px] opacity-70 mb-10 font-body px-4"
        >
          Powering seamless experiences and real-time connections, AIForGrowth is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="#agents"
            onClick={(e) => {
              e.preventDefault();
              scrollToAgents();
            }}
            className="light-streak group relative px-10 py-4 bg-white text-on-primary rounded-full font-headline text-sm font-bold tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Explore Agents
            <div className="absolute -inset-[0.6px] rounded-full border-[0.6px] border-white/40 pointer-events-none"></div>
          </a>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      {/* Seamless transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

const Ecosystem = () => {
  const items = [
    { id: "agent-1", name: "Interview AI", link: "https://interview-ai-2jf6.onrender.com/login", task: "Technical Questions, Behavioral Questions, Preparation Road Map, Generate Resume, build a winning strategy." },
    { id: "agent-2", name: "AI Career Coach", link: "https://ai-career-coach-mj.vercel.app/", task: "Build Resume, Cover Letter, Interview Prep, Industry Insights.", featured: true },
    { id: "agent-3", name: "Interview IO", link: "https://example.com", task: "Coming Soon." },
    // { id: "agent-4", name: "AI Agent 4", link: "https://example.com", task: "Description of the AI agent." },
    // { id: "agent-5", name: "AI Agent 5", link: "https://example.com", task: "Description of the AI agent." },
  ];

  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const handleLaunch = (id: string, link: string) => {
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    
    // Simulate a loading process
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [id]: false }));
      window.open(link, '_blank');
    }, 2000);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const starsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-0.5, 0.5], ["-10%", "10%"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-10%", "10%"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const featuredItemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, filter: "brightness(0.5)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "brightness(1.1)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="agents"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 px-6 relative overflow-hidden bg-black"
    >
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      <motion.div style={{ opacity: starsOpacity }} className="stars-container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border-[0.6px] border-white/10 text-[10px] font-label text-white/60 tracking-widest uppercase mb-4"
          >
            AI AGENTS
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            id="agents-title" 
            className="text-gradient-aifg text-[40px] font-headline font-medium tracking-tight mb-4"
          >
            Meet Your AI Workforce
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-white opacity-60 text-base max-w-2xl mx-auto font-body"
          >
            Choose from a range of intelligent AI agents designed to automate tasks, boost productivity, and simplify your workflow.
          </motion.p>
        </div>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" 
          role="list"
        >
          {items.map((item) => (
            <motion.div 
              key={item.id}
              role="listitem"
              variants={item.featured ? featuredItemVariants : itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02, 
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: item.featured 
                  ? "0 20px 60px -20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.15)"
                  : "0 20px 40px -20px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)"
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`group p-8 rounded-lg border-[0.6px] transition-all duration-150 cursor-default flex flex-col relative overflow-hidden focus-within:ring-2 focus-within:ring-white/20 focus-within:y-[-10px] ${
                item.featured 
                  ? "border-white/40 bg-white/[0.07] shadow-[0_0_40px_rgba(255,255,255,0.08)]" 
                  : "border-white/10 bg-neutral-900/50 backdrop-blur-md"
              }`}
            >
              {item.featured && (
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-0"
                />
              )}
              {/* Animated Background Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={false}
              >
                <motion.div
                  animate={{
                    x: ["-50%", "50%"],
                    y: ["-50%", "50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]"
                />
              </motion.div>
              {item.featured && (
                <div 
                  className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[8px] font-bold tracking-tighter uppercase rounded-bl-lg z-10"
                  aria-label="Featured Agent"
                >
                  Featured
                </div>
              )}
              {loadingStates[item.id] && (
                <div 
                  className="space-loader-overlay backdrop-blur-sm"
                  role="status"
                  aria-live="polite"
                >
                  <div className="space-clouds">
                    <div className="space-cloud space-cloud1" />
                    <div className="space-cloud space-cloud2" />
                    <div className="space-cloud space-cloud3" />
                  </div>
                  <div className="long-fazers">
                    <span /><span /><span /><span />
                  </div>
                  <div className="loader-stars">
                    {[...Array(20)].map((_, i) => {
                      // Use a deterministic "random" based on index to avoid re-render flicker
                      const top = (i * 7) % 100;
                      const left = (i * 13) % 100;
                      const size = (i % 3) + 1;
                      const delay = (i % 20) / 10;
                      return (
                        <div 
                          key={i} 
                          className="loader-star"
                          style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDelay: `${delay}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="astronaut-mini">
                    <div className="fazers">
                      <span /><span /><span /><span />
                    </div>
                    <div className="helmet-mini">
                      <div className="visor-mini" />
                    </div>
                    <div className="body-mini">
                      <div className="backpack-mini" />
                    </div>
                  </div>
                  <div className="progress-container-mini">
                    <div className="progress-bar-mini" />
                  </div>
                  <p className="loading-text-mini">Initializing Mission</p>
                </div>
              )}
              <div className="flex justify-between items-start mb-6">
                <h3 id={`agent-name-${item.id}`} className="text-white text-[22px] font-headline font-bold">{item.name}</h3>
              </div>
              
              <div className="flex-grow mb-8">
                <p className="text-white/40 text-[10px] font-label uppercase tracking-[0.2em] mb-1">Task</p>
                <p className="text-white/70 text-sm font-body leading-relaxed">{item.task}</p>
              </div>

              <button 
                onClick={() => handleLaunch(item.id, item.link)}
                disabled={loadingStates[item.id]}
                aria-label={`Launch ${item.name}`}
                aria-busy={loadingStates[item.id]}
                className="btn-space w-full py-3 text-white font-headline text-xs font-bold tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingStates[item.id] ? (
                  <strong className="flex items-center gap-2 animate-pulse">
                    Launching Mission...
                    <Rocket className="w-3 h-3" aria-hidden="true" />
                  </strong>
                ) : (
                  <strong className="flex items-center gap-2">
                    Launch
                    <Rocket className="w-3 h-3" aria-hidden="true" />
                  </strong>
                )}
                <div id="container-stars">
                  <div id="stars" />
                </div>
                <div id="glow">
                  <div className="circle" />
                  <div className="circle" />
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_50%)] pointer-events-none"
      />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12 px-6 md:px-[120px] flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="stars-container-footer">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-4 relative z-10">
        <span className="text-xl font-black tracking-tighter text-white font-headline">AIFORGROWTH</span>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-label text-white/30 tracking-widest uppercase">© 2026 aiforgrowth labs inc. all rights reserved.</p>
          <p className="text-[10px] font-label text-white/50 tracking-widest uppercase flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> by MJ
          </p>
        </div>
      </div>
      <div className="flex gap-8 relative z-10">
        {[
          { name: "Home", id: "home" },
          { name: "Agents", id: "agents" },
          { name: "Privacy", id: "#" },
          { name: "Terms", id: "#" }
        ].map(item => (
          <a 
            key={item.name} 
            className="text-[10px] font-label text-white/40 hover:text-white tracking-widest uppercase transition-colors cursor-pointer" 
            href={item.id.startsWith("#") ? item.id : `#${item.id}`}
            onClick={(e) => {
              if (!item.id.startsWith("#")) {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void; key?: string }) => {
  const [progress, setProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  const logs = [
    "INITIALIZING CORE SYSTEMS...",
    "ESTABLISHING SECURE CONNECTION...",
    "LOADING AI AGENT WORKFORCE...",
    "OPTIMIZING GROWTH ALGORITHMS...",
    "SYSTEM BOOT SUCCESSFUL."
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
      setProgress(currentProgress);
    }, 200);

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logs.length) {
        setBootLogs(prev => [...prev, logs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-12 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black tracking-tighter text-white font-headline mb-2"
          >
            AIFORGROWTH
          </motion.div>
          <div className="h-[1px] w-12 bg-white/20"></div>
        </div>

        <div className="space-y-2 mb-8 h-32 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {bootLogs.map((log, i) => (
              <motion.p
                key={log}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-mono text-white/40 tracking-widest uppercase"
              >
                <span className="text-white/20 mr-2">[{i.toString().padStart(2, '0')}]</span>
                {log}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>

        <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">System Status: Booting</span>
          <span className="text-[9px] font-mono text-white/60 tracking-widest uppercase">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-white/10 z-20 pointer-events-none"
      />
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-black selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <Ecosystem />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
