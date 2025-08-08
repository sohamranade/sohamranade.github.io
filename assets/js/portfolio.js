/**
 * Dynamic Portfolio Management
 * Handles project loading, filtering, and search functionality
 */

class PortfolioManager {
  constructor() {
    this.currentFilter = 'all';
    this.currentSearchTerm = '';
    this.isLoading = false;
    
    this.init();
  }

  init() {
    // Wait for DOM to be loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.loadFilters();
    this.loadProjects();
    this.setupEventListeners();
    this.updateStats();
    
    // Initialize AOS for new elements
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  loadFilters() {
    const filtersContainer = document.getElementById('portfolio-filters');
    if (!filtersContainer) return;

    const filters = projectsData.categories.map(category => `
      <li class="${category.id === 'all' ? 'filter-active' : ''}" 
          data-filter="${category.id}">
        <i class="bx ${category.icon}"></i>
        ${category.name}
      </li>
    `).join('');

    filtersContainer.innerHTML = filters;
  }

  loadProjects(searchTerm = '', category = 'all') {
    const container = document.getElementById('projectsContainer');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;

    // Show loading state
    this.showLoading(container);

    // Filter projects based on search and category
    let filteredProjects = projectsData.projects;
    
    if (searchTerm) {
      filteredProjects = projectsData.searchProjects(searchTerm);
    }
    
    if (category !== 'all') {
      filteredProjects = filteredProjects.filter(project => project.category === category);
    }

    // Generate HTML for filtered projects
    setTimeout(() => {
      if (filteredProjects.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
      } else {
        const projectsHTML = filteredProjects.map(project => this.createProjectCard(project)).join('');
        container.innerHTML = projectsHTML;
        noResults.style.display = 'none';
        
        // Initialize lightbox for new elements
        this.initializeLightbox();
      }
      
      // Add animation classes
      container.querySelectorAll('.portfolio-item').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in');
        }, index * 100);
      });
      
    }, 300); // Small delay for loading effect
  }

  createProjectCard(project) {
    const tags = project.tags.slice(0, 3).map(tag => 
      `<span class="portfolio-tag">${tag}</span>`
    ).join('');

    const technologies = project.technologies.slice(0, 2).join(', ');

    return `
      <div class="col-lg-4 col-md-6 portfolio-item filter-${project.category}" data-aos="fade-up">
        <div class="portfolio-wrap">
          <img src="${project.thumbnail}" class="img-fluid" alt="${project.title}">
          
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${project.shortDescription}</p>
            <div class="portfolio-tags">
              ${tags}
            </div>
            <small class="text-muted">
              <i class="bx bx-code-alt"></i> ${technologies}
            </small>
          </div>
          
          <div class="portfolio-links">
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" title="GitHub"><i class="bx bxl-github"></i></a>` : ''}
            ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" title="Live Demo"><i class="bx bx-link-external"></i></a>` : ''}
            <a href="${project.images[0]}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${project.title}">
              <i class="bx bx-plus"></i>
            </a>
            <a href="${project.detailPage}" title="More Details">
              <i class="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.currentSearchTerm = e.target.value.toLowerCase();
          this.loadProjects(this.currentSearchTerm, this.currentFilter);
        }, 300);
      });
    }

    // Filter functionality
    const filterContainer = document.getElementById('portfolio-filters');
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
          const filterItem = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
          const filter = filterItem.dataset.filter;
          
          // Update active filter
          filterContainer.querySelectorAll('li').forEach(li => li.classList.remove('filter-active'));
          filterItem.classList.add('filter-active');
          
          this.currentFilter = filter;
          this.loadProjects(this.currentSearchTerm, this.currentFilter);
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.getElementById('projectSearch');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  showLoading(container) {
    container.innerHTML = `
      <div class="col-12">
        <div class="loading-spinner">
          <div class="spinner"></div>
        </div>
      </div>
    `;
  }

  initializeLightbox() {
    // Re-initialize GLightbox for dynamically loaded content
    if (typeof GLightbox !== 'undefined') {
      const lightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    }
  }

  updateStats() {
    const projects = projectsData.projects;
    
    // Update statistics
    const totalProjects = document.getElementById('totalProjects');
    const roboticsProjects = document.getElementById('roboticsProjects');
    const mlProjects = document.getElementById('mlProjects');
    const completedProjects = document.getElementById('completedProjects');

    if (totalProjects) {
      this.animateCounter(totalProjects, projects.length);
    }
    
    if (roboticsProjects) {
      const roboticsCount = projects.filter(p => p.category === 'robotics').length;
      this.animateCounter(roboticsProjects, roboticsCount);
    }
    
    if (mlProjects) {
      const mlCount = projects.filter(p => p.category === 'machine-learning').length;
      this.animateCounter(mlProjects, mlCount);
    }
    
    if (completedProjects) {
      const completedCount = projects.filter(p => p.status === 'completed').length;
      this.animateCounter(completedProjects, completedCount);
    }
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 50);
  }

  // Public methods for external use
  filterProjects(category) {
    this.currentFilter = category;
    this.loadProjects(this.currentSearchTerm, this.currentFilter);
    
    // Update active filter
    const filterContainer = document.getElementById('portfolio-filters');
    if (filterContainer) {
      filterContainer.querySelectorAll('li').forEach(li => {
        li.classList.toggle('filter-active', li.dataset.filter === category);
      });
    }
  }

  searchProjects(term) {
    this.currentSearchTerm = term;
    this.loadProjects(this.currentSearchTerm, this.currentFilter);
    
    // Update search input
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      searchInput.value = term;
    }
  }

  resetFilters() {
    this.currentFilter = 'all';
    this.currentSearchTerm = '';
    this.loadProjects();
    
    // Reset UI
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      searchInput.value = '';
    }
    
    const filterContainer = document.getElementById('portfolio-filters');
    if (filterContainer) {
      filterContainer.querySelectorAll('li').forEach(li => {
        li.classList.toggle('filter-active', li.dataset.filter === 'all');
      });
    }
  }
}

// Initialize portfolio manager
const portfolioManager = new PortfolioManager();

// Export for global access
window.portfolioManager = portfolioManager;
