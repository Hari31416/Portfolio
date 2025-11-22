import React from 'react';
import { skillsConfig } from '@/data/portfolio';
import { motion } from 'framer-motion';

const SkillBadge = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
  >
    <Icon size={40} className="mb-2 text-primary" />
    <span className="text-sm font-medium text-center">{text}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Main Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skillsConfig.mainSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-32 sm:w-40"
              >
                <SkillBadge icon={skill.icon} text={skill.text} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Complementary Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skillsConfig.complementarySkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-32 sm:w-40"
              >
                <SkillBadge icon={skill.icon} text={skill.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
