'use strict';
document.addEventListener('DOMContentLoaded', function () {

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;


  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);


  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
    });
  }


  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isActive = navLinks.classList.contains('active');

      if (isActive) {
        navLinks.classList.remove('active');
      } else {
        navLinks.classList.add('active');
      }

      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }

      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));

      if (window.innerWidth <= 768) {
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
      }
    });
  }

  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768 && navLinks) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.className = 'fa-solid fa-bars';
        }
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (navLinks && navLinks.classList.contains('active')) {
      if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.className = 'fa-solid fa-bars';
        }
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-bars';
      }
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });


  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href === '#' || href === '#!') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  }

  let scrollTimeout;
  window.addEventListener('scroll', function () {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(updateActiveLink);
  });

  updateActiveLink();

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }
  });

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name) {
        showFormMessage('Please enter your name.', 'error');
        nameInput.focus();
        return;
      }

      if (!email) {
        showFormMessage('Please enter your email.', 'error');
        emailInput.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      if (!message) {
        showFormMessage('Please enter your message.', 'error');
        messageInput.focus();
        return;
      }

      if (message.length < 10) {
        showFormMessage('Message must be at least 10 characters long.', 'error');
        messageInput.focus();
        return;
      }

      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      emailjs.send('Enter your service id from email.js', 'template id here from email.js', {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Vyan Madai',
        reply_to: email
      })
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          showFormMessage('Thank you, ' + name + '! Your message has been sent successfully. I will get back to you soon!', 'success');
          contactForm.reset();
        })
        .catch(function (error) {
          console.error('FAILED...', error);
          showFormMessage('Oops! Something went wrong. Please email me directly at {add your gmail here}', 'error');
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  function showFormMessage(message, type) {
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.classList.remove('hidden');

    setTimeout(function () {
      formMessage.classList.add('hidden');
    }, 6000);
  }

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .cell, .about-content .text, .skills-grid, .contact-content form, .contact-details');

    animateElements.forEach(function (el, index) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
      observer.observe(el);
    });
  }

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.className = 'fa-solid fa-bars';
        }
        document.body.style.overflow = '';
      }
    }, 200);
  })

});


window.addEventListener('error', function (e) {
  console.error('Error:', e.error);
});

window.addEventListener('unhandledrejection', function (e) {
  console.error('Unhandled Promise:', e.reason);
});