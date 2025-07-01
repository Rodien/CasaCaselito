// List of gallery images
const galleryImages = [
  { src: 'src/images/692064231.jpg', category: 'interior' },
  { src: 'src/images/692064232.jpg', category: 'interior' },
  { src: 'src/images/692064233.jpg', category: 'interior' },
  { src: 'src/images/692064236.jpg', category: 'surroundings' },
  { src: 'src/images/692064237.jpg', category: 'surroundings' },
  { src: 'src/images/692064238.jpg', category: 'surroundings' },
  { src: 'src/images/692064239.jpg', category: 'exterior' },
  { src: 'src/images/692064244.jpg', category: 'exterior' },
  { src: 'src/images/692064245.jpg', category: 'exterior' },
  { src: 'src/images/692064246.jpg', category: 'exterior' },
  { src: 'src/images/692064248.jpg', category: 'exterior' },
  { src: 'src/images/692064250.jpg', category: 'exterior' },
  { src: 'src/images/692064252.jpg', category: 'exterior' },
  { src: 'src/images/692064254.jpg', category: 'interior' },
  { src: 'src/images/692064255.jpg', category: 'interior' },
  { src: 'src/images/692064256.jpg', category: 'interior' },
  { src: 'src/images/692064257.jpg', category: 'interior' },
  { src: 'src/images/692064260.jpg', category: 'interior' },
  { src: 'src/images/692064261.jpg', category: 'interior' },
  { src: 'src/images/692064263.jpg', category: 'interior' },
  { src: 'src/images/692064264.jpg', category: 'interior' },
  { src: 'src/images/692064267.jpg', category: 'interior' },
  { src: 'src/images/692064269.jpg', category: 'interior' },
  { src: 'src/images/692064270.jpg', category: 'interior' },
  { src: 'src/images/692064271.jpg', category: 'interior' },
  { src: 'src/images/692064274.jpg', category: 'interior' },
  { src: 'src/images/692064276.jpg', category: 'interior' },
];

function renderGalleryGrid(category = 'all') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  let filtered = galleryImages;
  if (category !== 'all') {
    filtered = galleryImages.filter(img => img.category === category);
  }
  grid.innerHTML = `<div class="row g-2">` +
    filtered.map(img => `
      <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch">
        <img src="${img.src}" alt="Gallery photo" class="img-fluid rounded shadow-sm w-100 h-100 object-fit-cover">
      </div>
    `).join('') + '</div>';
}

function renderGalleryCarousel() {
  if (document.getElementById('galleryCarousel')) return;
  const section = document.getElementById('gallery');
  if (!section) return;
  const carousel = document.createElement('div');
  carousel.className = 'carousel slide gallery-carousel d-block d-md-none';
  carousel.id = 'galleryCarousel';
  carousel.setAttribute('data-bs-ride', 'carousel');
  carousel.innerHTML = `
    <div class="carousel-inner">
      ${galleryImages.map((img, i) => `
        <div class="carousel-item${i === 0 ? ' active' : ''}">
          <img src="${img.src}" class="d-block w-100" alt="Gallery photo">
        </div>
      `).join('')}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  `;
  section.appendChild(carousel);
}

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryGrid();
  // Gallery tab filter
  document.querySelectorAll('.gallery-tabs .btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.gallery-tabs .btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-category');
      renderGalleryGrid(cat);
    });
  });
});
