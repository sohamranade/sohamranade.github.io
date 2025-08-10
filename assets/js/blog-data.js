// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "My Journey into Robotics",
    excerpt: "How a childhood fascination with robots led me to pursue a career in robotics engineering and what I've learned along the way.",
    content: `
      <h2>The Beginning</h2>
      <p>My fascination with robotics began when I was just a child. I remember watching movies like "Wall-E" and "Big Hero 6" and being completely mesmerized by the idea of creating machines that could think, feel, and help humans.</p>
      
      <p>What started as simple LEGO Mindstorms projects in middle school has now evolved into a serious pursuit of robotics engineering at Columbia University. The journey has been nothing short of incredible.</p>
      
      <h2>Key Learnings</h2>
      <p>Throughout my journey, I've learned several important lessons:</p>
      <ul>
        <li><strong>Interdisciplinary Approach:</strong> Robotics isn't just about mechanical engineering or programming - it's about combining multiple disciplines seamlessly.</li>
        <li><strong>Iteration is Key:</strong> Every successful robot I've built has gone through countless iterations and failures.</li>
        <li><strong>Human-Centered Design:</strong> The best robots are those that truly understand and serve human needs.</li>
      </ul>
      
      <h2>Current Projects</h2>
      <p>Currently, I'm working on designing a dancing robot as part of my course project. This project combines my love for robotics with my appreciation for the arts, creating something that's both technically challenging and artistically beautiful.</p>
      
      <blockquote>
        "The future of robotics isn't about replacing humans, but about augmenting human capabilities and creating new possibilities."
      </blockquote>
      
      <h2>Looking Forward</h2>
      <p>As I continue my studies and work on various projects, I'm excited about the possibilities that lie ahead. The field of robotics is evolving rapidly, and I want to be at the forefront of these innovations.</p>
    `,
    date: "2024-01-15",
    category: "Robotics",
    image: "assets/img/robot.jpg",
    readTime: "5 min read",
    tags: ["robotics", "engineering", "personal"]
  }
];

// Function to get all blog posts
function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get a specific blog post by ID
function getBlogPostById(id) {
  return blogPosts.find(post => post.id === parseInt(id));
}

// Function to get recent blog posts (for homepage)
function getRecentBlogPosts(limit = 3) {
  return getAllBlogPosts().slice(0, limit);
}

// Function to get blog posts by category
function getBlogPostsByCategory(category) {
  return getAllBlogPosts().filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Function to search blog posts
function searchBlogPosts(query) {
  const searchTerm = query.toLowerCase();
  return getAllBlogPosts().filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
