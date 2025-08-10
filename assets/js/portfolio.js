/**
 * Simple Portfolio Display
 * Loads and displays project tiles with links to detail pages
 */

class SimplePortfolio {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be loaded and ensure projectsData is available
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    try {
      if (typeof projectsData !== 'undefined') {
        this.loadProjects();
        // Initialize AOS for new elements
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      } else {
        // Retry if projectsData is not yet available
        setTimeout(() => this.setup(), 100);
      }
    } catch (error) {
      console.error('Portfolio setup error:', error);
    }
  }

  loadProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container || !projectsData.projects) return;

    const projectsHTML = projectsData.projects.map(project => this.createProjectCard(project)).join('');
    container.innerHTML = projectsHTML;
    
    // Initialize lightbox for project images
    this.initializeLightbox();
  }

  createProjectCard(project) {
    if (!project) return '';
    
    const tags = (project.tags || []).slice(0, 3).map(tag => 
      `<span class="portfolio-tag">${tag}</span>`
    ).join('');

    const technologies = (project.technologies || []).slice(0, 2).join(', ');

    return `
      <div class="col-lg-4 col-md-6 portfolio-item" data-aos="fade-up">
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img src="${project.thumbnail || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZjNzU3ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='}" class="img-fluid" alt="${project.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZjNzU3ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='">
          </div>
          
          <div class="portfolio-content">
            <h4 class="portfolio-title">${project.title}</h4>
            <p class="portfolio-description">${project.shortDescription || ''}</p>
            <div class="portfolio-tags">
              ${tags}
            </div>
            <div class="portfolio-technologies">
              <small class="text-muted">
                <i class="bx bx-code-alt"></i> ${technologies}
              </small>
            </div>
            
            <div class="portfolio-actions">
              ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" title="GitHub" class="btn btn-sm btn-outline-primary"><i class="bx bxl-github"></i> GitHub</a>` : ''}
              ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" title="Live Demo" class="btn btn-sm btn-outline-success"><i class="bx bx-link-external"></i> Demo</a>` : ''}
              <a href="${project.detailPage || '#'}" title="More Details" class="btn btn-sm btn-primary">
                <i class="bx bx-link"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initializeLightbox() {
    // Initialize GLightbox for project images
    if (typeof GLightbox !== 'undefined') {
      try {
        const lightbox = GLightbox({
          selector: '.portfolio-lightbox'
        });
      } catch (error) {
        console.warn('GLightbox initialization failed:', error);
      }
    }
  }
}

// Initialize simple portfolio
function initializeSimplePortfolio() {
  try {
    if (typeof projectsData !== 'undefined') {
      new SimplePortfolio();
    } else {
      // Retry initialization if projectsData is not available
      setTimeout(initializeSimplePortfolio, 200);
    }
  } catch (error) {
    console.error('Portfolio initialization failed:', error);
  }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSimplePortfolio);
} else {
  initializeSimplePortfolio();
}
