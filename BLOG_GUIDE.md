# Blog Management Guide

This guide explains how to add new blog posts to your portfolio website.

## How to Add a New Blog Post

### Step 1: Edit the Blog Data File

Open `assets/js/blog-data.js` and add a new blog post object to the `blogPosts` array. Here's the structure:

```javascript
{
  id: 4, // Use the next available ID number
  title: "Your Blog Post Title",
  excerpt: "A brief summary of your blog post (2-3 sentences)",
  content: `
    <h2>Your First Heading</h2>
    <p>Your paragraph content goes here. You can use HTML tags like:</p>
    <ul>
      <li><strong>Bold text</strong></li>
      <li><em>Italic text</em></li>
      <li>Regular list items</li>
    </ul>
    
    <h2>Another Section</h2>
    <p>More content...</p>
    
    <blockquote>
      "You can include quotes like this"
    </blockquote>
    
    <h3>Code Examples</h3>
    <p>You can include code:</p>
    <pre><code>def hello_world():
    print("Hello, World!")</code></pre>
  `,
  date: "2024-01-20", // Use YYYY-MM-DD format
  category: "Your Category", // e.g., "Robotics", "Design", "AI", "Personal"
  image: "assets/img/your-image.jpg", // Path to your blog post image
  readTime: "5 min read", // Estimated reading time
  tags: ["tag1", "tag2", "tag3"] // Array of relevant tags
}
```

### Step 2: Add Your Blog Post Image

1. Place your blog post image in the `assets/img/` directory
2. Update the `image` field in your blog post object to point to the correct path
3. Recommended image size: 800x400 pixels for best display

### Step 3: HTML Content Guidelines

When writing your blog post content, you can use these HTML tags:

- `<h2>` and `<h3>` for headings
- `<p>` for paragraphs
- `<ul>` and `<li>` for bullet points
- `<ol>` and `<li>` for numbered lists
- `<strong>` for bold text
- `<em>` for italic text
- `<blockquote>` for quotes
- `<pre><code>` for code blocks
- `<img src="path/to/image.jpg" alt="description">` for images

### Step 4: Categories and Tags

**Categories** should be broad topics like:
- Robotics
- Design
- AI
- Personal
- Technology
- Education

**Tags** should be more specific keywords that help with searchability.

### Step 5: Testing Your Blog Post

1. Save the `blog-data.js` file
2. Refresh your website
3. Navigate to the Blog section to see your new post
4. Click on the post to view the full content

## Blog Post Examples

Here are some example blog post ideas that fit your background:

### Technical Posts
- "Building My First Quadcopter: Lessons Learned"
- "The Future of Autonomous Robotics"
- "Machine Learning in Mechanical Design"
- "3D Printing for Rapid Prototyping"

### Personal Posts
- "My Journey from India to Columbia University"
- "Life as a Robotics Student in New York"
- "Balancing Technical Skills with Creativity"
- "Lessons from Working at Amazon"

### Project Posts
- "Designing a Dancing Robot: Technical Challenges"
- "Mapping and Navigation with TurtleBot"
- "Digital Image Processing Projects"
- "Robocon Competition Experience"

## Tips for Writing Great Blog Posts

1. **Start with a compelling title** that clearly indicates what the post is about
2. **Write a clear excerpt** that summarizes the main points
3. **Use headings** to break up content into digestible sections
4. **Include images** to make your posts more visually appealing
5. **Keep paragraphs short** for better readability
6. **Use lists** to organize information clearly
7. **Include personal insights** to make your posts unique
8. **Add relevant tags** to improve discoverability

## File Structure

Your blog system consists of these files:

- `blog.html` - Main blog listing page
- `blog-post.html` - Individual blog post template
- `assets/css/blog.css` - Blog styling
- `assets/js/blog-data.js` - Blog post data
- `assets/js/blog.js` - Blog functionality

## Adding Advanced Features

If you want to add more features later, you can:

1. **Search functionality** - Add a search bar to filter posts
2. **Category filtering** - Add buttons to filter by category
3. **Comments system** - Integrate with a commenting service
4. **Social sharing** - Add more social media sharing options
5. **Related posts** - Show related posts at the bottom of each post

## Need Help?

If you need help adding a blog post or have questions about the system, you can:

1. Check the existing blog posts in `blog-data.js` for examples
2. Look at the HTML structure in the existing posts
3. Test your changes locally before publishing

Remember to keep your blog posts professional but personal, and share insights that showcase your expertise and personality!
