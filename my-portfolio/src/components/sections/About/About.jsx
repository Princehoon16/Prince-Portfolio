// import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Rocket, 
  Palette, 
  Wrench, 
  GraduationCap, 
  MapPin, 
  Calendar,
//   ExternalLink,
  ArrowRight
} from 'lucide-react';
import { aboutData } from './aboutData';
import './About.css';

const About = () => {
  const { 
    personal, 
    details, 
    highlights, 
    skillsPreview, 
    media, 
    callToAction 
  } = aboutData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconComponents = {
    '💻': Code2,
    '🚀': Rocket,
    '🎨': Palette,
    '🔧': Wrench
  };

  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="about-bg-shape about-bg-shape-1"></div>
        <div className="about-bg-shape about-bg-shape-2"></div>
        <div className="about-bg-gradient"></div>
      </div>

      <div className="about-container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="about-header"
          >
            <h2 className="about-title">{personal.title}</h2>
            <p className="about-subtitle">{personal.subtitle}</p>
            <div className="about-title-underline"></div>
          </motion.div>

          <div className="about-main-content">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="about-text-content"
            >
              {/* Intro */}
              <motion.p
                variants={itemVariants}
                className="about-intro"
              >
                {personal.intro}
              </motion.p>

              {/* Story */}
              <motion.p
                variants={itemVariants}
                className="about-story"
              >
                {personal.story}
              </motion.p>

              {/* Mission */}
              <motion.p
                variants={itemVariants}
                className="about-mission"
              >
                {personal.mission}
              </motion.p>

              {/* Details Cards */}
              <motion.div
                variants={itemVariants}
                className="about-details-cards"
              >
                {/* Experience */}
                <motion.div 
                  className="about-detail-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="about-detail-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="about-detail-content">
                    <div className="about-detail-number">{details.experience.years}</div>
                    <div className="about-detail-label">{details.experience.label}</div>
                    <div className="about-detail-description">{details.experience.description}</div>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div 
                  className="about-detail-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="about-detail-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="about-detail-content">
                    <div className="about-detail-text">{details.education.degree}</div>
                    <div className="about-detail-label">{details.education.institution}</div>
                    <div className="about-detail-description">{details.education.period}</div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="about-detail-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="about-detail-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="about-detail-content">
                    <div className="about-detail-text">{details.location.city}</div>
                    <div className="about-detail-label">{details.location.country}</div>
                    <div className="about-detail-description">{details.location.status}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="about-image-section"
            >
              <div className="about-image-container">
                <motion.div
                  className="about-image-bg"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                />
                <motion.img
                  src={media.image}
                  alt={media.alt}
                  className="about-profile-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="about-floating-badge"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code2 size={20} />
                  <span>Developer</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Section */}
          <motion.div
            variants={itemVariants}
            className="about-highlights"
          >
            <h3 className="about-highlights-title">What I Do</h3>
            <div className="about-highlights-grid">
              {highlights.map((highlight, index) => {
                const IconComponent = iconComponents[highlight.icon];
                return (
                  <motion.div
                    key={highlight.title}
                    className="about-highlight-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400 ,delay: index * 0.1}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}

                  >
                    <div className="about-highlight-icon">
                      {IconComponent ? <IconComponent size={32} /> : highlight.icon}
                    </div>
                    <h4 className="about-highlight-title">{highlight.title}</h4>
                    <p className="about-highlight-description">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            variants={itemVariants}
            className="about-skills-preview"
          >
            <h3 className="about-skills-title">{skillsPreview.title}</h3>
            <div className="about-skills-tags">
              {skillsPreview.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="about-skill-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="about-cta"
          >
            <p className="about-cta-text">{callToAction.text}</p>
            <motion.button
              onClick={() => scrollToSection(callToAction.href)}
              className="about-cta-button"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{callToAction.buttonText}</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;