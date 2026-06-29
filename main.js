// Expand box toggle (used on dashboards page)
function toggleExpand(id, toggleEl) {
  const box = document.getElementById(id);
  const icon = toggleEl.querySelector('.expand-toggle-icon');
  const isOpen = box.classList.toggle('open');
  icon.textContent = isOpen ? '−' : '+';
}
