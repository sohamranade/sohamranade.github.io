// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the blog listing page
  if (document.getElementById('blog-posts-container')) {
    loadBlogPosts();
  }
  
  // Check if we're on a blog post page
  if (document.getElementById('blog-post-content')) {
    loadBlogPost();
  }
  
  // Check if we're on the main page and need to load recent blog posts
  if (document.getElementById('recent-blog-posts')) {
    loadRecentBlogPosts();
  }
});

// Load blog posts on the listing page
function loadBlogPosts() {
  const container = document.getElementById('blog-posts-container');
  const posts = getAllBlogPosts();
  
  if (posts.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="blog-empty">
          <i class="bx bx-news"></i>
          <h3>No blog posts yet</h3>
          <p>Check back soon for new content!</p>
        </div>
      </div>
    `;
    return;
  }
  
  posts.forEach(post => {
    const postElement = createBlogPostCard(post);
    container.appendChild(postElement);
  });
}

// Load recent blog posts on the main page
function loadRecentBlogPosts() {
  const container = document.getElementById('recent-blog-posts');
  const posts = getRecentBlogPosts(3); // Get 3 most recent posts
  
  if (posts.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="blog-empty">
          <i class="bx bx-news"></i>
          <h3>No blog posts yet</h3>
          <p>Check back soon for new content!</p>
        </div>
      </div>
    `;
    return;
  }
  
  posts.forEach(post => {
    const postElement = createBlogPostCard(post);
    container.appendChild(postElement);
  });
}

// Create a blog post card element
function createBlogPostCard(post) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';
  col.setAttribute('data-aos', 'fade-up');
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  col.innerHTML = `
    <div class="blog-post-card">
      <img src="${post.image}" alt="${post.title}" class="blog-post-image">
      <div class="blog-post-content">
        <div class="blog-post-meta">
          <span class="blog-post-date">
            <i class="bx bx-calendar"></i> ${formattedDate}
          </span>
          <span class="blog-post-category">${post.category}</span>
        </div>
        <h3 class="blog-post-title">${post.title}</h3>
        <p class="blog-post-excerpt">${post.excerpt}</p>
        <a href="blog-post.html?id=${post.id}" class="blog-post-link">
          Read More <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </div>
  `;
  
  return col;
}

// Load individual blog post
function loadBlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  
  if (!postId) {
    window.location.href = 'blog.html';
    return;
  }
  
  const post = getBlogPostById(postId);
  
  if (!post) {
    document.getElementById('blog-post-content').innerHTML = `
      <div class="text-center">
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <a href="blog.html" class="btn btn-primary">Back to Blog</a>
      </div>
    `;
    return;
  }
  
  // Update page title
  document.title = `${post.title} - Soham Ranade`;
  
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Update the blog post content
  const content = document.getElementById('blog-post-content');
  content.innerHTML = `
    <div class="back-to-blog">
      <a href="blog.html" class="btn">
        <i class="bx bx-arrow-back"></i> Back to Blog
      </a>
    </div>
    
    <div class="blog-post-header">
      <h1>${post.title}</h1>
      <div class="meta">
        <span><i class="bx bx-calendar"></i> ${formattedDate}</span>
        <span class="mx-3"><i class="bx bx-time"></i> ${post.readTime}</span>
        <span><i class="bx bx-tag"></i> ${post.category}</span>
      </div>
    </div>
    
    <div class="blog-post-body">
      ${post.content}
    </div>
    
    <div class="blog-post-footer mt-5">
      <div class="row">
        <div class="col-md-6">
          <h4>Tags:</h4>
          <div class="tags">
            ${post.tags.map(tag => `<span class="badge bg-secondary me-2">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="col-md-6 text-md-end">
          <h4>Share:</h4>
          <div class="social-share">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}" 
               target="_blank" class="btn btn-outline-primary btn-sm me-2">
              <i class="bx bxl-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" 
               target="_blank" class="btn btn-outline-primary btn-sm">
              <i class="bx bxl-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Search functionality (if you want to add search later)
function searchPosts(query) {
  const results = searchBlogPosts(query);
  const container = document.getElementById('blog-posts-container');
  
  // Clear current posts
  container.innerHTML = '';
  
  if (results.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="blog-empty">
          <i class="bx bx-search"></i>
          <h3>No results found</h3>
          <p>Try adjusting your search terms.</p>
        </div>
      </div>
    `;
    return;
  }
  
  results.forEach(post => {
    const postElement = createBlogPostCard(post);
    container.appendChild(postElement);
  });
}

// Filter by category (if you want to add category filtering later)
function filterByCategory(category) {
  const results = getBlogPostsByCategory(category);
  const container = document.getElementById('blog-posts-container');
  
  // Clear current posts
  container.innerHTML = '';
  
  if (results.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="blog-empty">
          <i class="bx bx-filter"></i>
          <h3>No posts in this category</h3>
          <p>Try selecting a different category.</p>
        </div>
      </div>
    `;
    return;
  }
  
  results.forEach(post => {
    const postElement = createBlogPostCard(post);
    container.appendChild(postElement);
  });
}
