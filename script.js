// Modern JS for Casa Caselito website
// Gallery filtering, smooth scroll, and more

document.addEventListener('DOMContentLoaded', function() {
  // Gallery images and categories
  const images = [
    { src: 'src/images/692064231.jpg', category: 'interior' },
    { src: 'src/images/692064232.jpg', category: 'interior' },
    { src: 'src/images/692064233.jpg', category: 'interior' },
    { src: 'src/images/692064236.jpg', category: 'exterior' },
    { src: 'src/images/692064237.jpg', category: 'exterior' },
    { src: 'src/images/692064238.jpg', category: 'surroundings' },
    { src: 'src/images/692064239.jpg', category: 'surroundings' },
    { src: 'src/images/692064244.jpg', category: 'interior' },
    { src: 'src/images/692064245.jpg', category: 'interior' },
    { src: 'src/images/692064246.jpg', category: 'exterior' },
    { src: 'src/images/692064248.jpg', category: 'exterior' },
    { src: 'src/images/692064250.jpg', category: 'interior' },
    { src: 'src/images/692064252.jpg', category: 'interior' },
    { src: 'src/images/692064254.jpg', category: 'exterior' },
    { src: 'src/images/692064255.jpg', category: 'exterior' },
    { src: 'src/images/692064256.jpg', category: 'interior' },
    { src: 'src/images/692064257.jpg', category: 'interior' },
    { src: 'src/images/692064260.jpg', category: 'surroundings' },
    { src: 'src/images/692064261.jpg', category: 'surroundings' },
    { src: 'src/images/692064263.jpg', category: 'surroundings' },
    { src: 'src/images/692064264.jpg', category: 'surroundings' },
    { src: 'src/images/692064267.jpg', category: 'exterior' },
    { src: 'src/images/692064269.jpg', category: 'exterior' },
    { src: 'src/images/692064270.jpg', category: 'exterior' },
    { src: 'src/images/692064271.jpg', category: 'exterior' },
    { src: 'src/images/692064274.jpg', category: 'surroundings' },
    { src: 'src/images/692064276.jpg', category: 'surroundings' }
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  const tabs = document.querySelectorAll('.gallery-tabs .tab');

  function renderGallery(category) {
    galleryGrid.innerHTML = '';
    const filtered = category === 'all' ? images : images.filter(img => img.category === category);
    filtered.forEach(img => {
      const el = document.createElement('img');
      el.src = img.src;
      el.alt = 'Gallery photo';
      galleryGrid.appendChild(el);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderGallery(this.dataset.category);
    });
  });

  renderGallery('all');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.addEventListener('scroll', function () {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollY = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.5;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
});
