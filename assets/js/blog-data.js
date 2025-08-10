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
  },
  {
    id: 2,
    title: "The Art of Mechanical Design",
    excerpt: "Exploring the creative and technical aspects of mechanical design, from concept to final product.",
    content: `
      <h2>Design Philosophy</h2>
      <p>Mechanical design is often seen as purely technical, but I believe it's as much an art as it is a science. The best designs are those that balance functionality, aesthetics, and manufacturability.</p>
      
      <h2>The Design Process</h2>
      <p>My approach to mechanical design follows a systematic yet creative process:</p>
      <ol>
        <li><strong>Problem Definition:</strong> Understanding the core problem and user needs</li>
        <li><strong>Concept Generation:</strong> Brainstorming multiple solutions</li>
        <li><strong>Analysis & Simulation:</strong> Using tools like FEA and CFD</li>
        <li><strong>Prototyping:</strong> Building and testing physical models</li>
        <li><strong>Iteration:</strong> Refining based on feedback and testing</li>
      </ol>
      
      <h2>Tools of the Trade</h2>
      <p>Modern mechanical design relies heavily on software tools:</p>
      <ul>
        <li>SolidWorks for 3D modeling</li>
        <li>ANSYS for finite element analysis</li>
        <li>MATLAB for calculations and simulations</li>
        <li>3D printing for rapid prototyping</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>One of the biggest challenges in mechanical design is balancing competing requirements. For example, making something lighter often means making it weaker. The key is finding the optimal solution through careful analysis and creative problem-solving.</p>
    `,
    date: "2024-01-10",
    category: "Design",
    image: "assets/img/cover_pic.jpg",
    readTime: "4 min read",
    tags: ["mechanical design", "engineering", "creativity"]
  },
  {
    id: 3,
    title: "Deep Learning in Robotics: A Personal Perspective",
    excerpt: "How deep learning is revolutionizing robotics and my experiences implementing AI in robotic systems.",
    content: `
      <h2>The AI Revolution in Robotics</h2>
      <p>Deep learning has fundamentally changed how we approach robotics. What once required explicit programming of every behavior can now be learned from data. This shift has opened up incredible possibilities.</p>
      
      <h2>My Experience with AI in Robotics</h2>
      <p>Working with deep learning in robotics has taught me several important lessons:</p>
      <ul>
        <li><strong>Data Quality Matters:</strong> The quality of training data directly impacts the performance of AI systems</li>
        <li><strong>Simulation is Crucial:</strong> Training robots in simulation before real-world deployment saves time and resources</li>
        <li><strong>Interpretability is Important:</strong> Understanding why an AI system makes certain decisions is crucial for safety</li>
      </ul>
      
      <h2>Current Applications</h2>
      <p>Some of the most exciting applications of deep learning in robotics include:</p>
      <ul>
        <li>Computer vision for object recognition and manipulation</li>
        <li>Natural language processing for human-robot interaction</li>
        <li>Reinforcement learning for autonomous navigation</li>
        <li>Predictive maintenance using sensor data</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>As AI continues to advance, I believe we'll see even more sophisticated robotic systems that can adapt to new environments and tasks with minimal human intervention. The key will be ensuring these systems are safe, reliable, and beneficial to society.</p>
    `,
    date: "2024-01-05",
    category: "AI",
    image: "assets/img/profile_pic.jpg",
    readTime: "6 min read",
    tags: ["deep learning", "AI", "robotics", "technology"]
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
