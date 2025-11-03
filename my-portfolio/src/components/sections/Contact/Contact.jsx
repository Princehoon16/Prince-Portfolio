import React, { useState } from 'react';
import { contactInfo, contactFormConfig } from './contactData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateField = (name, value) => {
    const fieldConfig = contactFormConfig.fields.find(field => field.name === name);
    if (!fieldConfig) return '';

    if (fieldConfig.required && !value.trim()) {
      return 'This field is required';
    }

    if (fieldConfig.validation) {
      const { minLength, maxLength, pattern } = fieldConfig.validation;
      
      if (minLength && value.length < minLength) {
        return `Must be at least ${minLength} characters`;
      }
      
      if (maxLength && value.length > maxLength) {
        return `Must be less than ${maxLength} characters`;
      }
      
      if (pattern && !pattern.test(value)) {
        return 'Please enter a valid value';
      }
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    contactFormConfig.fields.forEach(field => {
      const error = validateField(field.name, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(contactFormConfig.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIconForMethod = (method) => {
    switch (method) {
      case 'email':
        return '✉️';
      case 'phone':
        return '📞';
      case 'address':
        return '📍';
      default:
        return '📧';
    }
  };

  const getIconForSocial = (platform) => {
    switch (platform) {
      case 'github':
        return '💻';
      case 'linkedin':
        return '💼';
      case 'twitter':
        return '🐦';
      case 'instagram':
        return '📷';
      default:
        return '🔗';
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background Elements */}
      <div className="contact-bg-element bg-1"></div>
      <div className="contact-bg-element bg-2"></div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            
            <div className="contact-methods">
              <div 
                className="contact-method"
                onClick={() => window.location.href = `mailto:${contactInfo.email}`}
              >
                <div className="method-icon">
                  {getIconForMethod('email')}
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              
              <div 
                className="contact-method"
                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
              >
                <div className="method-icon">
                  {getIconForMethod('phone')}
                </div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  {getIconForMethod('address')}
                </div>
                <div className="method-content">
                  <h4>Location</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {contactInfo.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">
                      {getIconForSocial(social.icon)}
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              {contactFormConfig.fields.map((field) => (
                <div key={field.name} className="form-group">
                  <label htmlFor={field.name} className="form-label">
                    {field.label}
                    {field.required && <span style={{ color: '#ef4444' }}> *</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`form-textarea ${errors[field.name] ? 'error' : ''}`}
                      rows="5"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`form-input ${errors[field.name] ? 'error' : ''}`}
                    />
                  )}
                  
                  {errors[field.name] && (
                    <span className="error-message">{errors[field.name]}</span>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;