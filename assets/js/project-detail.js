/**
 * Project Detail Page JavaScript
 * Handles dynamic content loading and interactions for project pages
 */

class ProjectDetailManager {
  constructor() {
    this.currentProjectId = this.getProjectIdFromUrl();
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.loadRelatedProjects();
    this.setupProjectNavigation();
    this.initializeGallery();
    this.setupLightbox();
    
    // Add smooth scrolling
    this.setupSmoothScrolling();
    
    // Initialize animations
    this.initializeAnimations();
  }

  getProjectIdFromUrl() {
    // Extract project ID from current page filename
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    const nameWithoutExt = filename.replace('.html', '');
    
    // Map filenames to project IDs
    const fileToIdMap = {
      'Michael_jansen': 'michael-jansen',
      'mapping': 'robot-mapping',
      'robocon': 'robocon-2017',
      'quadcopter': 'quadcopter-controller',
      'dip': 'face-mask-detection'
    };
    
    return fileToIdMap[nameWithoutExt] || null;
  }

  loadRelatedProjects() {
    const container = document.getElementById('related-projects');
    if (!container || !this.currentProjectId) return;

    const currentProject = projectsData.getProjectById(this.currentProjectId);
    if (!currentProject) return;

    // Find related projects (same category, excluding current)
    let relatedProjects = projectsData.getProjectsByCategory(currentProject.category)
      .filter(p => p.id !== this.currentProjectId);

    // If less than 3 related projects in same category, add from other categories
    if (relatedProjects.length < 3) {
      const otherProjects = projectsData.projects
        .filter(p => p.id !== this.currentProjectId && p.category !== currentProject.category)
        .slice(0, 3 - relatedProjects.length);
      relatedProjects = relatedProjects.concat(otherProjects);
    }

    // Limit to 3 projects
    relatedProjects = relatedProjects.slice(0, 3);

    const relatedHTML = relatedProjects.map(project => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up">
        <div class="related-project-card">
          <img src="${project.thumbnail}" alt="${project.title}">
          <div class="card-body">
            <h5>${project.title}</h5>
            <p>${project.shortDescription}</p>
            <a href="${project.detailPage}" class="btn btn-outline-primary btn-sm">
              View Project <i class="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = relatedHTML;
  }

  setupProjectNavigation() {
    const prevContainer = document.getElementById('prev-project');
    const nextContainer = document.getElementById('next-project');
    
    if (!prevContainer || !nextContainer || !this.currentProjectId) return;

    const currentIndex = projectsData.projects.findIndex(p => p.id === this.currentProjectId);
    if (currentIndex === -1) return;

    // Previous project
    if (currentIndex > 0) {
      const prevProject = projectsData.projects[currentIndex - 1];
      prevContainer.innerHTML = `
        <a href="${prevProject.detailPage}" class="nav-project-card">
          <div class="nav-direction">
            <i class="bx bx-left-arrow-alt"></i> Previous Project
          </div>
          <h6>${prevProject.title}</h6>
        </a>
      `;
    }

    // Next project
    if (currentIndex < projectsData.projects.length - 1) {
      const nextProject = projectsData.projects[currentIndex + 1];
      nextContainer.innerHTML = `
        <a href="${nextProject.detailPage}" class="nav-project-card">
          <div class="nav-direction">
            Next Project <i class="bx bx-right-arrow-alt"></i>
          </div>
          <h6>${nextProject.title}</h6>
        </a>
      `;
    }
  }

  initializeGallery() {
    // Initialize Swiper for project gallery
    const gallerySwiper = document.querySelector('.project-gallery-slider');
    if (gallerySwiper && typeof Swiper !== 'undefined') {
      new Swiper(gallerySwiper, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
    }
  }

  setupLightbox() {
    // Initialize GLightbox for images
    if (typeof GLightbox !== 'undefined') {
      const lightbox = GLightbox({
        selector: '.project-gallery-slider img',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initializeAnimations() {
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // Utility methods for project data updates
  updateProjectMeta(projectId, updates) {
    const project = projectsData.getProjectById(projectId);
    if (project) {
      Object.assign(project, updates);
      this.refreshCurrentPage();
    }
  }

  refreshCurrentPage() {
    // Refresh related projects and navigation
    this.loadRelatedProjects();
    this.setupProjectNavigation();
  }

  // Method to add custom content sections
  addContentSection(containerId, content) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML += content;
    }
  }

  // Method to create formatted content sections
  createProjectSection(title, content, type = 'default') {
    const sectionClasses = {
      default: 'project-section',
      highlight: 'highlight-box',
      code: 'code-block'
    };

    return `
      <div class="${sectionClasses[type] || sectionClasses.default}">
        <h4>${title}</h4>
        <div>${content}</div>
      </div>
    `;
  }

  // Method to create image galleries
  createImageGallery(images, title) {
    const imageItems = images.map(img => `
      <div class="col-md-4 mb-3">
        <img src="${img.src}" alt="${img.alt || title}" class="img-fluid rounded" 
             data-lightbox="gallery" data-title="${img.caption || ''}">
      </div>
    `).join('');

    return `
      <div class="project-section">
        <h4>${title}</h4>
        <div class="row">
          ${imageItems}
        </div>
      </div>
    `;
  }

  // Method to create technical specifications table
  createSpecsTable(specs) {
    const specRows = Object.entries(specs).map(([key, value]) => `
      <tr>
        <td><strong>${key}</strong></td>
        <td>${value}</td>
      </tr>
    `).join('');

    return `
      <div class="project-section">
        <h4>Technical Specifications</h4>
        <div class="table-responsive">
          <table class="table table-striped">
            <tbody>
              ${specRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Method to create timeline
  createTimeline(events) {
    const timelineItems = events.map(event => `
      <div class="timeline-item">
        <div class="timeline-date">${event.date}</div>
        <div class="timeline-content">
          <h6>${event.title}</h6>
          <p>${event.description}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="project-section">
        <h4>Project Timeline</h4>
        <div class="timeline">
          ${timelineItems}
        </div>
      </div>
    `;
  }
}

// Initialize project detail manager
const projectDetailManager = new ProjectDetailManager();

// Export for global access
window.projectDetailManager = projectDetailManager;

// Helper functions for content creation
window.addProjectSection = (title, content, type) => {
  return projectDetailManager.createProjectSection(title, content, type);
};

window.addImageGallery = (images, title) => {
  return projectDetailManager.createImageGallery(images, title);
};

window.addSpecsTable = (specs) => {
  return projectDetailManager.createSpecsTable(specs);
};

window.addTimeline = (events) => {
  return projectDetailManager.createTimeline(events);
};
