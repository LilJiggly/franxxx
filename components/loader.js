// Component loader for navigation and footer
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("nav-placeholder", "components/nav.html");
  loadComponent("footer-placeholder", "components/footer.html");
});
