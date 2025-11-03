import { useState, useEffect } from 'react';
import { projectData, projectCategories } from './projectData';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
    
    let filtered = projectData;
    
    if (activeFilter === 'featured') {
      filtered = projectData.filter(project => project.featured);
    } else if (activeFilter !== 'all') {
      filtered = projectData.filter(project => project.category === activeFilter);
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter]);

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work showcasing full-stack development, 
            modern design principles, and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {projectCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="project-image-content"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback">
                  <div className="project-icon">{project.icon}</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                  {project.featured && (
                    <span style={{ fontSize: '1rem', color: '#667eea' }}>⭐</span>
                  )}
                </h3>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {/* <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    <span>Live Demo</span>
                    <span>→</span>
                  </a> */}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    <span>GitHub</span>
                    <span>📁</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#888'
          }}>
            <h3>No projects found for this category</h3>
            <p>Try selecting a different filter to see more projects.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;