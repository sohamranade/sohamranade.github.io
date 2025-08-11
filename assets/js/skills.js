// Skills functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a page with skills section
  if (document.getElementById('skills-container')) {
    loadSkills();
  }
  
  if (document.getElementById('specialties-container')) {
    loadSpecialties();
  }
});

// Load skills on the skills section
function loadSkills() {
  const container = document.getElementById('skills-container');
  const categories = getAllSkillCategories();
  
  if (categories.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center">
          <i class="bx bx-wrench" style="font-size: 3rem; color: #6c757d; opacity: 0.5;"></i>
          <h3 class="mt-3">No skills listed yet</h3>
          <p>Add your skills to the skills-data.js file</p>
        </div>
      </div>
    `;
    return;
  }
  
  categories.forEach((category, index) => {
    const categoryElement = createSkillCategory(category, index);
    container.appendChild(categoryElement);
  });
}

// Create a skill category element
function createSkillCategory(category, index) {
  const col = document.createElement('div');
  col.className = 'col-xl-4 col-lg-6';
  col.setAttribute('data-aos', 'fade-up');
  if (index > 0) {
    col.setAttribute('data-aos-delay', (index * 100).toString());
  }
  
  const skillsList = category.skills.map(skill => 
    `<span class="skill-tag">${skill}</span>`
  ).join('');
  
  col.innerHTML = `
    <div class="skill-category">
      <div class="skill-header">
        <i class="${category.icon}"></i>
        <h4>${category.name}</h4>
      </div>
      <div class="skill-items">
        ${skillsList}
      </div>
    </div>
  `;
  
  return col;
}

// Load specialties
function loadSpecialties() {
  const container = document.getElementById('specialties-container');
  const specialties = getAllSpecialties();
  
  if (specialties.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center">
          <i class="bx bx-star" style="font-size: 3rem; color: #6c757d; opacity: 0.5;"></i>
          <h3 class="mt-3">No specialties listed yet</h3>
          <p>Add your specialties to the skills-data.js file</p>
        </div>
      </div>
    `;
    return;
  }
  
  specialties.forEach(specialty => {
    const specialtyElement = createSpecialtyItem(specialty);
    container.appendChild(specialtyElement);
  });
}

// Create a specialty item element
function createSpecialtyItem(specialty) {
  const div = document.createElement('div');
  div.className = 'specialty-item';
  
  div.innerHTML = `
    <i class="${specialty.icon}"></i>
    <h5>${specialty.name}</h5>
    <p>${specialty.description}</p>
  `;
  
  return div;
}
