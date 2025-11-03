export const contactInfo = {
  email: "princehoon399@gmail.com",
  phone: "+91 8077366775",
  address: "Hapur , India",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/Princehoon16",
      icon: "github",
      username: "@Princehoon16"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/princehoon",
      icon: "linkedin",
      username: "@princehoon"
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: "twitter",
    //   username: "@yourusername"
    // },
    {
      name: "Instagram",
      url: "https://instagram.com/imprince_hoon",
      icon: "instagram",
      username: "@imprince_hoon"
    }
  ]
};

export const contactFormConfig = {
  formspreeEndpoint: "https://formspree.io/f/meopdaow", 
  fields: [
    {
      name: "name",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
      validation: {
        minLength: 2,
        maxLength: 50
      }
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true,
      validation: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      }
    },
    {
      name: "subject",
      type: "text",
      label: "Subject",
      placeholder: "Enter the subject of your message",
      required: true,
      validation: {
        minLength: 5,
        maxLength: 100
      }
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message here...",
      required: true,
      validation: {
        minLength: 10,
        maxLength: 1000
      }
    }
  ]
};