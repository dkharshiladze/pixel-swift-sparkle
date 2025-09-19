// Georgian Designated Driver Service - Interactive Functionality

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('mobile-menu-button');
  const menuIcon = menuButton.querySelector('.menu-icon');
  const closeIcon = menuButton.querySelector('.close-icon');
  
  if (mobileMenu.classList.contains('hidden')) {
    // Open menu
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    menuButton.setAttribute('aria-label', 'მენიუს დახურვა');
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    // Close menu
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    menuButton.setAttribute('aria-label', 'მენიუს გახსნა');
    menuButton.setAttribute('aria-expanded', 'false');
  }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
    
    // Smooth scroll to section
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Make phone call
function makeCall() {
  window.open('tel:+995595100334');
}

// Open Facebook page
function openFacebook() {
  window.open('https://www.facebook.com/pxizelimdzgoli.ge/', '_blank');
}

// Header scroll effect
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'hsl(var(--background) / 0.98)';
  } else {
    header.style.backgroundColor = 'hsl(var(--background) / 0.95)';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll event listener for header
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (!mobileMenu.classList.contains('hidden') && 
        !mobileMenu.contains(event.target) && 
        !menuButton.contains(event.target)) {
      toggleMobileMenu();
    }
  });
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(event) {
    // Close mobile menu with Escape key
    if (event.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    }
  });
  
  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.service-card, .stat-card, .testimonial-card, .contact-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
  
  // Add loading state removal (if needed)
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.remove();
  }
  
  // Add click tracking for analytics (if needed in the future)
  document.querySelectorAll('.btn-call').forEach(button => {
    button.addEventListener('click', function() {
      // Track call button clicks
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
          event_category: 'engagement',
          event_label: 'header_call_button'
        });
      }
    });
  });
  
  // Add form validation (if forms are added later)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle form submission
    });
  });
});

// Handle window resize
window.addEventListener('resize', function() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 768) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  }
});

// Service worker registration for caching (if sw.js exists)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed - continue without caching
    });
  });
}