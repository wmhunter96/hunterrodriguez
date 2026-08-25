// Footer year
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile nav toggle
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Expandable full experience section on the resume page
var toggleExperience = document.getElementById('toggleExperience');
var extraExperience = document.querySelectorAll('.extra-experience');
if (toggleExperience && extraExperience.length) {
  toggleExperience.addEventListener('click', function () {
    var isExpanded = toggleExperience.getAttribute('aria-expanded') === 'true';
    extraExperience.forEach(function (el) {
      el.hidden = isExpanded;
    });
    toggleExperience.setAttribute('aria-expanded', String(!isExpanded));
    toggleExperience.textContent = isExpanded ? 'Show full experience' : 'Show less';
  });
}

// Export resume to PDF via the browser's print dialog. The .extra-experience
// entries are always omitted from the export (see the print styles in
// css/style.css), regardless of whether they're currently shown on-page.
var exportPdfBtn = document.getElementById('exportPdf');
if (exportPdfBtn) {
  exportPdfBtn.addEventListener('click', function () {
    window.print();
  });
}
