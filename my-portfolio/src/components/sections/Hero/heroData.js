export const heroData = {
  personalInfo: {
    name: "Prince",
    title: "Full Stack Developer",
    location: "Hapur, India",
    // availability: "Available for Freelance",
    // status: "Open to new opportunities"
  },
  
  professional: {
    tagline: "I create digital solutions that make a difference",
    description: "Passionate Full Stack Developer specializing in modern web technologies. I build scalable, user-friendly applications that solve real-world problems.",
    highlights: [
      "React.js & Next.js Expert",
      "Node.js Backend Development", 
      "Responsive UI/UX Design",
      "Database Architecture"
    ]
  },
  
  media: {
    image: "/images/PrinceImage.jpg",  // Aapki existing image
    alt: "Prince - Full Stack Developer",
    background: "/images/Hero/geometric-pattern.svg" // Optional background
  },
  
  actions: {
    primaryButton: {
      text: "View My Work",
      href: "#projects",
      icon: "💼"
    },
    secondaryButton: {
      text: "Get In Touch", 
      href: "/Documents/Prince_Resume.pdf",
      icon: "📞"
    }
  },
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/princehoon16",
      icon: "github",
      color: "hover:text-gray-700"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/princehoon",
      icon: "linkedin",
      color: "hover:text-blue-600"
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourusername", 
    //   icon: "twitter",
    //   color: "hover:text-blue-400"
    // }
  ],
  
  stats: [
    {
      number: "1+",
      label: "Years Experience",
      icon: "🚀"
    },
    {
      number: "5+", 
      label: "Projects Completed",
      icon: "💻"
    },
    {
      number: "100%",
      label: "Client Satisfaction", 
      icon: "⭐"
    }
  ]
};