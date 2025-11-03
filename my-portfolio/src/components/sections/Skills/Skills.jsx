import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Settings, 
  Award, 
  Rocket, 
  Clock, 
  Star,
  Laptop,
  // ChevronDown,
  ExternalLink
} from 'lucide-react';
import { skillsData } from './skillsData';
import './Skills.css';

const Skills = () => {
  const { 
    title, 
    subtitle, 
    description, 
    categories, 
    certifications, 
    stats 
  } = skillsData;

  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedCert, setExpandedCert] = useState(null);
  const [progressAnimated, setProgressAnimated] = useState(false);

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

  // ✅ Fixed Progress Bar Animation
  const progressVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const iconComponents = {
    '🎨': Code2,
    '⚙️': Server, 
    '🛠️': Settings,
    '🚀': Rocket,
    '⏳': Clock,
    '⭐': Star,
    '💻': Laptop
  };

  // ✅ Fixed Certificate Toggle Function
  const toggleCertificate = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  // ✅ Fixed Progress Bar Trigger
  const handleInView = () => {
    setProgressAnimated(true);
  };

   const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background Elements */}
      <div className="skills-background">
        <div className="skills-bg-shape skills-bg-shape-1"></div>
        <div className="skills-bg-shape skills-bg-shape-2"></div>
        <div className="skills-bg-gradient"></div>
      </div>

      <div className="skills-container">
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={handleInView} // ✅ Progress bar trigger
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="skills-header"
          >
            <h2 className="skills-title">{title}</h2>
            <p className="skills-subtitle">{subtitle}</p>
            <div className="skills-title-underline"></div>
            <p className="skills-description">{description}</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="skills-stats"
          >
            {stats.map((stat, index) => {
              const IconComponent = iconComponents[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  className="skills-stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300,delay: index * 0.1  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                >
                  <div className="skills-stat-icon">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <div className="skills-stat-number">{stat.number}</div>
                  <div className="skills-stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            variants={itemVariants}
            className="skills-categories-section"
          >
            {/* Category Tabs */}
            <div className="skills-category-tabs">
              {categories.map((category, index) => {
                const IconComponent = iconComponents[category.icon];
                return (
                  <motion.button
                    key={category.title}
                    className={`skills-category-tab ${activeCategory === index ? 'active' : ''}`}
                    onClick={() => setActiveCategory(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {IconComponent && <IconComponent size={20} />}
                    <span>{category.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skills-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {categories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <div 
                        className="skill-icon"
                        style={{ backgroundColor: `${skill.color}20`, borderColor: skill.color }}
                      >
                        <span style={{ color: skill.color, fontWeight: 'bold' }}>
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        style={{ backgroundColor: skill.color }}
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        animate={progressAnimated ? "visible" : "hidden"} // ✅ Fixed trigger
                      />
                    </div>
                    
                    <div className="skill-dots">
                      {[0, 25, 50, 75, 100].map((dot) => (
                        <div 
                          key={dot}
                          className={`skill-dot ${skill.level >= dot ? 'active' : ''}`}
                          style={{ backgroundColor: skill.level >= dot ? skill.color : '#e5e7eb' }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Certifications - FIXED SECTION */}
          <motion.div
            variants={itemVariants}
            className="skills-certifications"
          >
            <h3 className="certifications-title">
              <Award size={32} />
              Certifications & Achievements
            </h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="certification-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="certification-badge">
                    {cert.badge}
                  </div>
                  
                  <div className="certification-content">
                    <h4 className="certification-name">{cert.name}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <div className="certification-date">{cert.date}</div>
                    
                    {/* ✅ Certificate Details - Show when expanded */}
                    <AnimatePresence>
                      {expandedCert === index && (
                        <motion.div
                          className="certification-details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                         
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* <motion.button
                    className="certification-toggle"
                    onClick={() => toggleCertificate(index)} // ✅ Fixed function call
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronDown 
                      size={20} 
                      className={expandedCert === index ? 'expanded' : ''} 
                    />
                  </motion.button> */}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="skills-cta"
          >
            <p className="skills-cta-text">Ready to bring your ideas to life?</p>
            <motion.button
              className="skills-cta-button"
               onClick={scrollToContact}
              whileHover={{ scale: 1.05, x: 5,  backgroundColor: "#667eea",color:"#ffffff",transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;