 // Smooth nav active state
  const catItems = document.querySelectorAll('.cat-item');
  catItems.forEach(item => {
    item.addEventListener('click', () => {
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Form submit
  const form = document.querySelector('.contact-form');
  form && form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit span');
    btn.textContent = 'Envoyé ✓';
    form.querySelector('.form-submit').style.background = '#1a1a1a';
    form.querySelector('.form-submit').style.color = '#39ff14';
    form.querySelector('.form-submit').style.borderColor = '#39ff14';
    setTimeout(() => {
      btn.textContent = 'Envoyer →';
      form.querySelector('.form-submit').style.cssText = '';
      form.reset();
    }, 3000);
  });

  // Subtle parallax on hero title
  const heroTitle = document.querySelector('.hero-title');
  const heroBg = document.querySelector('.hero-bg');
  document.addEventListener('mousemove', e => {
    if (!heroTitle) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    heroTitle.style.transform = `translate(${x}px, ${y}px)`;
    heroBg.style.backgroundPosition = `${50 + x * 0.2}% ${50 + y * 0.2}%`;
  });