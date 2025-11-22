import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { homeConfig } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello There! <br />
              I'm <span className="text-primary">Harikesh Kushwaha</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px]">
              <Typewriter
                options={{
                  strings: homeConfig.titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              {homeConfig.about.start}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              >
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="mailto:harikeshkumar0926@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background text-base font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Optional: Add a 3D element or image here for the right side */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* Placeholder for a profile image or 3D object */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center border border-border">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
