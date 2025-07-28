function toggleSwitch(el) {
    el.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
}

function animateOnLoad() {
    document.querySelector('.new-header').classList.add('animate-in');
    document.querySelector('.hero').classList.add('animate-in');
    document.querySelector('.hero-box').classList.add('animate-in');
}

function toggleExpandBox() {
  const box = document.getElementById('expandBox');
  box.classList.toggle('open');
}
