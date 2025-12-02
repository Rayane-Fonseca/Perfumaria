// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;
  
      event.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70, // altura da navbar
        behavior: 'smooth'
      });
    });
  });
  
  // Botão "Découvrir" leva para a coleção
  const btnDiscover = document.getElementById('btnDiscover');
  if (btnDiscover) {
    btnDiscover.addEventListener('click', () => {
      const collection = document.getElementById('collection');
      if (collection) {
        window.scrollTo({
          top: collection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Pequeno efeito de sombra/elevação nos cards ao focar via teclado
  document.querySelectorAll('.product-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', () => card.classList.add('is-focused'));
    card.addEventListener('blur', () => card.classList.remove('is-focused'));
  });
  