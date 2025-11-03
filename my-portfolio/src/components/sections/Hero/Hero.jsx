// import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink,
  Sparkles,
  Code2,
  Zap,
  MapPin,
  CheckCircle,
  Clock,
  Laptop,
  Star
} from 'lucide-react';
import { heroData } from './heroData';
import './Hero.css';

const Hero = () => {
  const {
    personalInfo,
    professional,
    media,
    actions,
    socialLinks,
    stats
  } = heroData;

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

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-background">

        {media.background && (
          <img
            src={media.background}
            alt=""
            className="hero-bg-svg"
          />
        )}
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
        <div className="hero-bg-gradient"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location & Availability Status */}
          <motion.div
            variants={itemVariants}
            className="hero-top-info"
          >
            <div className="hero-location-status">
              <div className="hero-location">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-availability">
                <CheckCircle size={16} />
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            <div className="hero-status-badge">
              <Sparkles size={16} />
              <span>{personalInfo.status}</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            className="hero-heading"
          >
            <h1 className="hero-title">
              Hi, I'm{" "}
              <span className="hero-name-gradient">
                {personalInfo.name}
              </span>
            </h1>
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personalInfo.title}
            </motion.h2>
          </motion.div>

          {/* Tagline & Description */}
          <motion.div
            variants={itemVariants}
            className="hero-text"
          >
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {professional.tagline}
            </motion.p>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {professional.description}
            </motion.p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="hero-highlights"
          >
            {professional.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="hero-highlight-item"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Zap size={16} className="hero-highlight-icon" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <motion.button
              onClick={() => scrollToSection(actions.primaryButton.href)}
              className="hero-btn hero-btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              {actions.primaryButton.text}
            </motion.button>

            <motion.a
              href={actions.secondaryButton.href}
              download="Prince_Resume.pdf"
              className="hero-btn hero-btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              {actions.secondaryButton.text}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="hero-social"
          >
            <span className="hero-social-label">Follow me on</span>
            <div className="hero-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hero-social-link ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {social.icon === 'github' && <Github size={20} />}
                  {social.icon === 'linkedin' && <Linkedin size={20} />}
                  {social.icon === 'twitter' && <Twitter size={20} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="hero-stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero-stat-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="hero-stat-icon">
                  {stat.icon === '🚀' && <Clock size={24} />}
                  {stat.icon === '💻' && <Laptop size={24} />}
                  {stat.icon === '⭐' && <Star size={24} />}
                </div>
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="hero-image-container">
            <motion.div
              className="hero-image-bg"
              animate={{
                rotate: 360,
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.img
              src={media.image}
              alt={media.alt}
              className="hero-profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {/* Floating Elements */}
            <motion.div
              className="hero-floating-element hero-floating-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code2 size={24} />
            </motion.div>
            <motion.div
              className="hero-floating-element hero-floating-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Zap size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="hero-scroll-line"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;