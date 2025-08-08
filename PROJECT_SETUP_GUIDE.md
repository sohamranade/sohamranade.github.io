# Project Setup Guide

This guide explains how to easily add new projects to your personal portfolio website.

## Overview

Your website now features a modern, dynamic project management system that makes adding new projects simple and consistent. All project information is centralized in a single data file, and the website automatically generates project cards, filtering, and navigation.

## File Structure

```
sohamranade.github.io/
├── assets/
│   ├── css/
│   │   ├── style.css          # Original template styles
│   │   ├── custom.css         # Enhanced homepage styles
│   │   └── project-detail.css # Project page styles
│   └── js/
│       ├── main.js            # Original template functionality
│       ├── projects-data.js   # ✨ PROJECT DATA - Edit this to add projects
│       ├── portfolio.js       # Dynamic project loading
│       └── project-detail.js  # Project page functionality
├── Media/                     # Project images and media
├── index.html                 # Enhanced main page
├── project-template.html      # Template for new project pages
└── [project-name].html        # Individual project pages
```

## Adding a New Project (Quick Method)

### Step 1: Add Project Data

Edit `assets/js/projects-data.js` and add a new project object to the `projects` array:

```javascript
{
  id: "my-new-project",                    // Unique identifier (lowercase, hyphens)
  title: "My Amazing New Project",         // Display title
  shortDescription: "Brief project summary for cards",
  fullDescription: "Detailed project description for the project page",
  category: "robotics",                    // Category: robotics, machine-learning, control-systems, web-development
  tags: ["Python", "AI", "Research"],     // Technology/topic tags
  thumbnail: "Media/MyProject/thumb.jpg", // Main project image (relative path)
  images: [                               // Gallery images for project page
    "Media/MyProject/image1.jpg",
    "Media/MyProject/image2.jpg",
    "Media/MyProject/image3.jpg"
  ],
  detailPage: "my-new-project.html",      // Project detail page filename
  technologies: ["Python", "TensorFlow", "OpenCV"], // Tech stack
  date: "2023",                           // Project year
  status: "completed",                    // completed, in-progress, planned
  githubLink: "https://github.com/...",  // Optional GitHub link
  liveDemo: "https://demo.example.com",   // Optional live demo link
  featured: true                          // Show on homepage? true/false
}
```

### Step 2: Create Project Images

1. Create a folder in `Media/` for your project (e.g., `Media/MyProject/`)
2. Add your project images to this folder
3. Ensure you have at least one main thumbnail image

### Step 3: Create Project Detail Page

**Option A: Use the Template (Recommended)**
1. Copy `project-template.html` to `my-new-project.html`
2. Replace all `{{PLACEHOLDER}}` values with your project information
3. Add custom content in the designated sections

**Option B: Enhanced Auto-Generation (If you're comfortable with JavaScript)**
The project detail pages can automatically populate basic information from the data file. Simply create a minimal HTML file and the JavaScript will handle the rest.

## Project Categories

Choose from these predefined categories:
- `robotics` - Robotics and automation projects
- `machine-learning` - AI/ML projects
- `control-systems` - Control theory and systems
- `web-development` - Web applications and sites

To add a new category, edit the `categories` array in `projects-data.js`.

## Project Status Options

- `completed` - Finished projects
- `in-progress` - Currently working on
- `planned` - Future projects

## Media Guidelines

### Image Specifications
- **Thumbnail**: 400x250px (16:10 ratio) for consistent project cards
- **Gallery Images**: 800x600px or higher for detail pages
- **Format**: JPG or PNG
- **File Size**: Keep under 2MB each for good loading performance

### Recommended Media Structure
```
Media/
├── ProjectName/
│   ├── thumbnail.jpg      # Main project image
│   ├── gallery-1.jpg      # Additional project images
│   ├── gallery-2.jpg
│   └── demo-video.mp4     # Optional demo videos
```

## Advanced Project Pages

### Custom Content Sections

You can add rich content sections to project pages using these helper functions:

```javascript
// Add a highlighted information box
const highlightContent = `
  <h5>Key Innovation</h5>
  <p>This breakthrough approach revolutionized our design process...</p>
`;
document.getElementById('project-content').innerHTML += 
  addProjectSection('Highlight', highlightContent, 'highlight');

// Add an image gallery
const images = [
  {src: 'Media/Project/img1.jpg', alt: 'Description', caption: 'Caption'},
  {src: 'Media/Project/img2.jpg', alt: 'Description', caption: 'Caption'}
];
document.getElementById('project-content').innerHTML += 
  addImageGallery(images, 'Design Process');

// Add technical specifications
const specs = {
  'Programming Language': 'Python',
  'Framework': 'TensorFlow',
  'Dataset Size': '10,000 images',
  'Accuracy': '95.2%'
};
document.getElementById('project-content').innerHTML += 
  addSpecsTable(specs);
```

### Timeline Creation

For projects with multiple phases:

```javascript
const timeline = [
  {date: 'Jan 2023', title: 'Project Planning', description: 'Initial research and design'},
  {date: 'Mar 2023', title: 'Development', description: 'Core implementation phase'},
  {date: 'May 2023', title: 'Testing', description: 'Validation and optimization'},
  {date: 'Jun 2023', title: 'Deployment', description: 'Final deployment and documentation'}
];
document.getElementById('project-content').innerHTML += 
  addTimeline(timeline);
```

## Website Features

### Automatic Features (No Setup Required)
- ✅ Dynamic project loading and filtering
- ✅ Search functionality across all project content
- ✅ Related projects suggestions
- ✅ Project navigation (previous/next)
- ✅ Responsive design for all devices
- ✅ Project statistics and counters
- ✅ Image lightbox galleries
- ✅ SEO-optimized project pages

### Search and Filtering
The website automatically enables:
- **Search**: Searches project titles, descriptions, tags, and technologies
- **Category Filtering**: Filter by project type (robotics, ML, etc.)
- **Tag-based Discovery**: Related projects based on technology stack
- **Statistics**: Automatic counters and project metrics

## Best Practices

### Project Descriptions
- **Short Description**: 1-2 sentences for project cards (under 100 characters)
- **Full Description**: Detailed overview for project pages (2-3 paragraphs)
- **Clear Value Proposition**: What problem does this project solve?

### Tagging Strategy
- **Technologies**: Python, TensorFlow, React, etc.
- **Domains**: Computer Vision, Robotics, Web Development
- **Context**: University Project, Professional Work, Personal Project

### Image Optimization
- Use descriptive filenames: `robot-assembly-process.jpg` not `IMG_1234.jpg`
- Compress images before uploading (use tools like TinyPNG)
- Provide alt text for accessibility

### Content Writing
- Use active voice and clear language
- Include specific metrics and achievements
- Explain technical concepts for general audience
- Add links to demos, code, or additional resources

## Troubleshooting

### Project Not Appearing
1. Check that the project ID is unique
2. Verify all image paths are correct
3. Ensure the project object syntax is valid JSON
4. Clear browser cache and refresh

### Images Not Loading
1. Verify image file paths in `projects-data.js`
2. Check that images exist in the `Media/` folder
3. Ensure image file extensions match exactly (.jpg vs .JPG)

### Styling Issues
1. Custom styles can be added to `assets/css/custom.css`
2. Project-specific styles go in `assets/css/project-detail.css`
3. Use browser developer tools to debug CSS issues

## Future Enhancements

Consider these additions for your portfolio:
- Blog integration for project updates
- Contact forms for project inquiries
- Analytics to track project page views
- PDF resume downloads
- Social media integration
- Multi-language support

## Need Help?

The website is built using:
- **Framework**: Bootstrap 5
- **Template**: iPortfolio by BootstrapMade
- **Icons**: BoxIcons
- **Animations**: AOS (Animate On Scroll)
- **Image Gallery**: GLightbox
- **Sliders**: Swiper.js

For technical issues, check the browser console for error messages and verify all file paths are correct.

---

**Quick Start Checklist:**
- [ ] Add project data to `projects-data.js`
- [ ] Upload project images to `Media/ProjectName/`
- [ ] Create or copy project detail page
- [ ] Test on local browser
- [ ] Deploy to GitHub Pages

Your enhanced portfolio website is now ready to showcase your projects professionally! 🚀
