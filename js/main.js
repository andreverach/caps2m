document.addEventListener('DOMContentLoaded', () => {
  // Navbar Elements
  const navbar = document.getElementById('navbar')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  // Scroll to Top Button Elements
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('shadow-md')
    } else {
      navbar.classList.remove('shadow-md')
    }

    // Scroll to Top Button Visibility
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10')
      scrollToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0')
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10')
      scrollToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0')
    }
  })

  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  // Scroll to Top Action
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  // Lightbox Logic
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const lightboxClose = document.getElementById('lightbox-close')
  const productImages = document.querySelectorAll('.group img') // Select all product images

  if (lightbox && lightboxImg && lightboxClose) {
    // Open Lightbox
    productImages.forEach((img) => {
      img.style.cursor = 'zoom-in' // Add zoom cursor
      // Fix: Add relative and z-10 to ensure image is above the full-card link span
      img.classList.add('relative', 'z-10')

      img.addEventListener('click', (e) => {
        //console.log('Image clicked:', img.src) // Debug log
        e.preventDefault() // Prevent default if wrapped in link
        e.stopPropagation() // Stop event from bubbling to the card link
        const src = img.getAttribute('src')
        lightboxImg.setAttribute('src', src)
        lightbox.classList.remove('hidden')
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
          lightbox.classList.remove('opacity-0')
        }, 10)
        document.body.style.overflow = 'hidden' // Prevent scrolling
      })
    })

    // Close Lightbox Function
    const closeLightbox = () => {
      lightbox.classList.add('opacity-0')
      setTimeout(() => {
        lightbox.classList.add('hidden')
        lightboxImg.setAttribute('src', '')
      }, 300) // Match transition duration
      document.body.style.overflow = '' // Restore scrolling
    }

    // Close on Button Click
    lightboxClose.addEventListener('click', closeLightbox)

    // Close on Background Click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox()
      }
    })

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox()
      }
    })
  }
})
