/**
 * Projects Data - Centralized project information
 * Add new projects here to automatically update the portfolio
 */

const projectsData = {
  projects: [
    {
      id: "michael-jansen",
      title: "Michael Jansen: The Dancing Robot",
      shortDescription: "A humanoid dancing robot with advanced motion control",
      fullDescription: "Designed and developed Michael Jansen, a dancing robot as part of a Columbia University course project. The robot features advanced motion control systems and can perform complex dance sequences using servo motors and custom control algorithms.",
      category: "robotics",
      tags: ["Robotics", "Control Systems", "Motion Planning", "Columbia University"],
      thumbnail: "Media/glamourshot.jpg",
      images: [
        "Media/GlamourPhoto2.jpg",
        "Media/glamourshot.jpg",
        "Media/sideview.jpg"
      ],
      detailPage: "Michael_jansen.html",
      technologies: ["Arduino", "Servo Motors", "Control Theory", "Mechanical Design"],
      date: "2022",
      status: "completed",
      githubLink: "",
      liveDemo: "",
      featured: true
    },
    {
      id: "robot-mapping",
      title: "Robot Mapping using Indoor Positioning Systems",
      shortDescription: "SLAM implementation for indoor robot navigation",
      fullDescription: "Developed a comprehensive mapping solution for indoor robots using advanced positioning systems. The project involved implementing SLAM algorithms to create accurate indoor maps for autonomous navigation.",
      category: "robotics",
      tags: ["SLAM", "Navigation", "Mapping", "ROS", "Computer Vision"],
      thumbnail: "Media/Mapping/turtle-bot.jpg",
      images: [
        "Media/Mapping/turtle-bot.jpg",
        "Media/Mapping/lab.png",
        "Media/Mapping/map-1.JPG",
        "Media/Mapping/map-2.JPG",
        "Media/Mapping/map-3.JPG"
      ],
      detailPage: "mapping.html",
      technologies: ["ROS", "Python", "OpenCV", "LIDAR", "Computer Vision"],
      date: "2021",
      status: "completed",
      githubLink: "",
      liveDemo: "",
      featured: true
    },
    {
      id: "robocon-2017",
      title: "Robocon 2017: The All-India Robotics Competition",
      shortDescription: "Competitive robotics project for national competition",
      fullDescription: "Participated in Robocon 2017, designing and building competitive robots for the all-India robotics competition. The project involved mechanical design, control systems, and strategic gameplay implementation.",
      category: "robotics",
      tags: ["Competition", "Mechanical Design", "Team Project", "BITS Pilani"],
      thumbnail: "Media/Robocon/main-pic.jpg",
      images: [
        "Media/Robocon/main-pic.jpg",
        "Media/Robocon/robots.jpg"
      ],
      detailPage: "robocon.html",
      technologies: ["Mechanical Design", "Control Systems", "Team Collaboration"],
      date: "2017",
      status: "completed",
      githubLink: "",
      liveDemo: "",
      featured: false
    },
    {
      id: "quadcopter-controller",
      title: "Quadcopter Controller Simulation",
      shortDescription: "MATLAB/Simulink quadcopter control model",
      fullDescription: "Developed a comprehensive quadcopter controller simulation using MATLAB and Simulink. The project focused on flight dynamics, control theory, and stability analysis for autonomous quadcopter flight.",
      category: "control-systems",
      tags: ["MATLAB", "Simulink", "Control Theory", "Flight Dynamics", "Simulation"],
      thumbnail: "Media/Quadcopter/quad.JPG",
      images: [
        "Media/Quadcopter/quad.JPG",
        "Media/Quadcopter/quad2.JPG",
        "Media/Quadcopter/main-quad.png",
        "Media/Quadcopter/quad2d.jpg",
        "Media/Quadcopter/quad3d.jpg"
      ],
      detailPage: "quadcopter.html",
      technologies: ["MATLAB", "Simulink", "Control Theory", "PID Controllers"],
      date: "2020",
      status: "completed",
      githubLink: "",
      liveDemo: "",
      featured: false
    },
    {
      id: "face-mask-detection",
      title: "Face Mask Detection using CNN",
      shortDescription: "Deep learning model for face mask detection",
      fullDescription: "Implemented a convolutional neural network for real-time face mask detection. The project was developed during the COVID-19 pandemic to help ensure safety compliance in public spaces.",
      category: "machine-learning",
      tags: ["Deep Learning", "CNN", "Computer Vision", "COVID-19", "Safety"],
      thumbnail: "Media/DIP/facemask.png",
      images: [
        "Media/DIP/facemask.png",
        "Media/DIP/algo.png",
        "Media/DIP/results.png"
      ],
      detailPage: "dip.html",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
      date: "2021",
      status: "completed",
      githubLink: "",
      liveDemo: "",
      featured: true
    }
  ],
  
  categories: [
    { id: "all", name: "All Projects", icon: "bx-grid-alt" },
    { id: "robotics", name: "Robotics", icon: "bx-bot" },
    { id: "machine-learning", name: "Machine Learning", icon: "bx-brain" },
    { id: "control-systems", name: "Control Systems", icon: "bx-cog" },
    { id: "web-development", name: "Web Development", icon: "bx-code-alt" }
  ],

  // Helper functions
  getProjectById: function(id) {
    return this.projects.find(project => project.id === id);
  },

  getProjectsByCategory: function(category) {
    if (category === 'all') return this.projects;
    return this.projects.filter(project => project.category === category);
  },

  getFeaturedProjects: function() {
    return this.projects.filter(project => project.featured);
  },

  getProjectsByTag: function(tag) {
    return this.projects.filter(project => 
      project.tags.some(projectTag => 
        projectTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
  },

  searchProjects: function(query) {
    const searchTerm = query.toLowerCase();
    return this.projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm) ||
      project.shortDescription.toLowerCase().includes(searchTerm) ||
      project.fullDescription.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    );
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
