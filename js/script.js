// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Welcome Heading (Letter by Letter)
gsap.to(".welcome-heading .letter", {
  opacity: 1,
  y: 0,
  stagger: 0.1, // Delay between each letter
  duration: 0.5,
  ease: "power2.out",
  delay: 0.5,
});

// Animate Welcome Text
gsap.to(".welcome-text", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1.5, // Delay after heading animation
  ease: "power2.out",
});

// Animate Image Grid
gsap.to(".grid-item img", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".image-grid",
    start: "top 80%",
  },
});

// Number Counting Animation
function animateCounters() {
  const counters = document.querySelectorAll(".count");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

// Trigger Counting Animation on Scroll
ScrollTrigger.create({
  trigger: ".welcome-stats",
  start: "top 80%",
  onEnter: animateCounters,
  once: true,
});

// Gradient Background Transition
gsap.to(".welcome-section", {
  background: "linear-gradient(135deg, #e9ecef, #d3d9df)",
  scrollTrigger: {
    trigger: ".welcome-section",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

// Floating Animation for Images
gsap.to(".grid-item img", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "power1.inOut",
});

// Animate Filters Menu
gsap.from(".filters_menu li", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out",
});

// Animate Food Cards
gsap.from(".box", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
  },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Parallax Background Effect
gsap.to(".parallax-background", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".sec1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".parallax-title", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".sec1",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".parallax-subtitle", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".sec1",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Dishes
gsap.to(".dish", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5, // Delay between each dish animation
  scrollTrigger: {
    trigger: ".special-event",
    start: "top 80%", // Animation starts when the top of the section is 80% in the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Service Cards
gsap.to(".service-card", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.3, // Delay between each card animation
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 70%", // Animation starts when the top of the section is 70% in the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Parallax Background Effect
gsap.to(".parallax-background", {
  yPercent: 30, // Adjust the parallax speed
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-title-section",
    start: "top bottom", // Animation starts when the top of the section hits the bottom of the viewport
    end: "bottom top", // Animation ends when the bottom of the section hits the top of the viewport
    scrub: true, // Smooth scrubbing effect
  },
});

// Animate Title and Subtitle
gsap.to(".parallax-title", {
  opacity: 1,
  y: 0,
  duration: 1.5, // Longer duration for a smoother effect
  scrollTrigger: {
    trigger: ".parallax-title-section",
    start: "top 80%", // Animation starts when the top of the section is 80% in the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
});

gsap.to(".parallax-subtitle", {
  opacity: 1,
  y: 0,
  duration: 1.5, // Longer duration for a smoother effect
  delay: 0.5, // Delay the subtitle animation
  scrollTrigger: {
    trigger: ".parallax-title-section",
    start: "top 80%", // Animation starts when the top of the section is 80% in the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
});

// Animate Chef Cards
gsap.to(".card", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.3, // Delay between each card animation
  scrollTrigger: {
    trigger: ".chef-section",
    start: "top 70%", // Animation starts when the top of the section is 70% in the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
});

gsap.registerPlugin(ScrollTrigger);

// Animate contact info
gsap.from(".contact-info", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-info",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate contact form
gsap.from(".contact-form", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate map container
gsap.from(".map-container", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".map-container",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);

// Animate testimonial section
gsap.from(".testimonial-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate testimonial items
gsap.from(".testimonial-item", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".testimonial-carousel",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);

// Animate reservation info
gsap.from(".reservation-info", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".reservation-info",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate reservation form
gsap.from(".reservation-form", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".reservation-form",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// SweetAlert on form submission
document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Show SweetAlert
  Swal.fire({
    title: "Booking Successful!",
    text: "Your table has been reserved. We look forward to seeing you!",
    icon: "success",
    confirmButtonText: "OK",
  });

  // Optionally, reset the form
  this.reset();
});