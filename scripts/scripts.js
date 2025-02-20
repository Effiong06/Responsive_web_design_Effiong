// Select the menu toggle (hamburger icon) and the navigation links container
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Event listener to toggle the 'active' class on the navLinks when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
  // This will toggle the 'active' class, which controls the visibility of the mobile menu
  navLinks.classList.toggle('active');
});

// Close the menu when a navigation link is clicked
// Select all navigation links inside .nav-links
const navItems = document.querySelectorAll('.nav-links li a');

// Loop through each link and add an event listener to close the menu when the link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the 'active' class to hide the menu when a link is clicked
    navLinks.classList.remove('active');
  });
});

// Optional: Close the menu if the user clicks anywhere outside the navigation menu or the hamburger icon
document.addEventListener('click', (event) => {
  // Check if the click was outside of the navigation links or the menu toggle (hamburger icon)
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    // Remove the 'active' class to hide the menu
    navLinks.classList.remove('active');
  }
});
