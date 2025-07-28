
  // Load Tableau API once
  const script = document.createElement('script');
  script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  document.head.appendChild(script);

  // Toggle dashboards display
  const buttons = document.querySelectorAll('.button-group button');
  const dashboards = document.querySelectorAll('.dashboard-box');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-dashboard');

      // Hide all dashboards
      dashboards.forEach(d => d.style.display = 'none');

      // Show the selected dashboard
      document.getElementById(targetId).style.display = 'block';

      // Update button active state
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    });
  });
