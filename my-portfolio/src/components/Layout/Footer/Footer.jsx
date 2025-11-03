// import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  Code2,
  // Download,
  FileText
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/princehoon16', 
      icon: <Github size={20} />,
      color: 'hover:text-gray-700 dark:hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/princehoon', 
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/yourusername', 
      icon: <Twitter size={20} />,
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: 'princehoon399@gmail.com',
      href: 'mailto:princehoon399@gmail.com'
    },
    {
      icon: <Phone size={18} />,
      text: '+91 8077366775',
      href: 'tel:+918077366775'
    },
    {
      icon: <MapPin size={18} />,
      text: 'Hapur, India',
      href: 'https://www.google.com/maps/place/Hapur,+Uttar+Pradesh',
      external:true
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const handleResumeDownload = () => {
    // Google Analytics event (if using)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'resume_download', {
        'event_category': 'engagement',
        'event_label': 'footer_section'
      });
    }
    console.log('Resume downloaded from footer');
  }

  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-brand"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="footer-logo"
            >
              <Code2 size={32} className="footer-logo-icon" />
              <span className="footer-logo-text">Prince</span>
            </motion.div>
            
            <p className="footer-tagline">
              Full Stack Developer passionate about creating digital solutions 
              that make a difference.
            </p>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer-social-link ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-links"
          >
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-contact"
          >
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="footer-contact-list">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="footer-contact-item"
                   target={contact.external ? "_blank" : "_self"} 
                  rel={contact.external ? "noopener noreferrer" : ""}
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="footer-contact-icon">
                    {contact.icon}
                  </span>
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Resume Download Button */}
            {/* <motion.a
              href="/resume.pdf"
              download
              className="footer-resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a> */}

             <motion.a
              href="/Documents/Prince_Resume.pdf" // ✅ Professional path
              download="Prince_Resume.pdf" // ✅ Clear filename
              className="footer-resume-btn"
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FileText size={18} /> {/* ✅ Better icon for resume */}
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="footer-copyright"
          >
            <span>© {currentYear} Prince. Made with </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="footer-heart"
            >
              <Heart size={16} />
            </motion.span>
            <span> and lots of coffee</span>
          </motion.div>

          {/* Additional Links */}
          <div className="footer-legal">
            <a href="/privacy" className="footer-legal-link">
              Privacy Policy
            </a>
            <span className="footer-legal-separator">•</span>
            <a href="/terms" className="footer-legal-link">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => scrollToSection('#home')}
          className="footer-back-to-top"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ExternalLink size={20} />
        </motion.button>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-background">
        <div className="footer-bg-circle footer-bg-circle-1"></div>
        <div className="footer-bg-circle footer-bg-circle-2"></div>
        <div className="footer-bg-gradient"></div>
      </div>
    </footer>
  );
};

export default Footer;