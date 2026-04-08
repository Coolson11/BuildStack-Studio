/**
 * BuildStack Studio - Main JavaScript
 * 
 * This script handles UI interactions like role filtering and navbar effects.
 * Form submission is handled automatically by @formspree/ajax.
 */

// ROLE DATA
const roles = {
    technical: [
        "Frontend Developer", 
        "Backend Developer", 
        "Full-Stack Developer", 
        "UI/UX Designer", 
        "Web Designer", 
        "QA/Tester"
    ],
    nonTechnical: [
        "Digital Marketer", 
        "Social Media Manager", 
        "SEO Specialist", 
        "Copywriter", 
        "Project Manager", 
        "Business Development", 
        "Customer Support"
    ]
};

// Update Role Dropdown
function updateRoles(type) {
    const roleSelect = document.getElementById('roleSelect');
    const appTypeInput = document.getElementById('appType');
    
    if (!roleSelect || !appTypeInput) return;

    appTypeInput.value = type;
    roleSelect.innerHTML = '<option value="" disabled selected>Select a role...</option>';
    
    const selectedRoles = type === 'technical' ? roles.technical : roles.nonTechnical;
    selectedRoles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        roleSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementById('roleSelect')) {
        updateRoles('technical');
    }

    // 3. Navbar Background Change on Scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('navbar-scrolled', 'shadow');
        } else {
            nav.classList.remove('navbar-scrolled', 'shadow');
        }
    });

    // Smooth Auto-Close Navbar for Mobile
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            const isVisible = menuToggle.classList.contains('show');
            if (window.innerWidth < 992 && isVisible) {
                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle);
                bsCollapse.hide();
            }
        });
    });

});
