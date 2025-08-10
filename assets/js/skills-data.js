// Skills Data - Easy to add and manage
const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      icon: "bx bx-code-alt",
      skills: [
        "Python",
        "SQL",
        "Go",
        "JavaScript",
        "MATLAB",
        "C++"
      ]
    },
    {
      name: "Machine Learning & AI",
      icon: "bx bx-brain",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "Scikit-learn",
        "Transformers",
        "Vector Databases",
        "LLM Fine-tuning",
        "Computer Vision"
      ]
    },
    {
      name: "Data Processing & Analytics",
      icon: "bx bx-data",
      skills: [
        "Pandas",
        "NumPy",
        "Apache Spark",
        "Data Visualization",
        "Statistical Analysis",
        "Time Series Analysis"
      ]
    },
    {
      name: "API Development & DevOps",
      icon: "bx bx-server",
      skills: [
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Git",
        "AWS/GCP",
        "REST APIs",
        "Microservices"
      ]
    },
    {
      name: "Robotics & Control",
      icon: "bx bx-cog",
      skills: [
        "ROS (Robot Operating System)",
        "Motion Planning",
        "Control Systems",
        "Computer Vision",
        "Sensor Fusion",
        "Path Planning",
        "Kinematics & Dynamics"
      ]
    },
    {
      name: "Mechanical Design",
      icon: "bx bx-wrench",
      skills: [
        "SolidWorks",
        "CAD Modeling",
        "3D Printing",
        "Finite Element Analysis",
        "Prototyping",
        "Product Design"
      ]
    }
  ],
  
  specialties: [
    {
      name: "LLM Fine-tuning",
      icon: "bx bx-cog",
      description: "Custom model training and optimization"
    },
    {
      name: "Agentic Workflows",
      icon: "bx bx-network-chart",
      description: "Intelligent automation systems"
    },
    {
      name: "Microservices",
      icon: "bx bx-cube",
      description: "Scalable architecture design"
    },
    {
      name: "CI/CD Pipelines",
      icon: "bx bx-git-branch",
      description: "Automated deployment workflows"
    },
    {
      name: "ML Modeling",
      icon: "bx bx-brain",
      description: "End-to-end model development"
    },
    {
      name: "ML Monitoring",
      icon: "bx bx-line-chart",
      description: "Production model oversight"
    }
  ]
};

// Function to get all skill categories
function getAllSkillCategories() {
  return skillsData.categories;
}

// Function to get all specialties
function getAllSpecialties() {
  return skillsData.specialties;
}

// Function to add a new skill to a category
function addSkillToCategory(categoryName, skillName) {
  const category = skillsData.categories.find(cat => cat.name === categoryName);
  if (category && !category.skills.includes(skillName)) {
    category.skills.push(skillName);
    return true;
  }
  return false;
}

// Function to add a new category
function addSkillCategory(categoryName, icon, skills = []) {
  if (!skillsData.categories.find(cat => cat.name === categoryName)) {
    skillsData.categories.push({
      name: categoryName,
      icon: icon,
      skills: skills
    });
    return true;
  }
  return false;
}

// Function to add a new specialty
function addSpecialty(name, icon, description) {
  if (!skillsData.specialties.find(spec => spec.name === name)) {
    skillsData.specialties.push({
      name: name,
      icon: icon,
      description: description
    });
    return true;
  }
  return false;
}
