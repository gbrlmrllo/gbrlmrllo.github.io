// Function to toggle the theme and save the preference
function toggleTheme() {
  let theme;
  // Check if the current theme is dark
  if (document.body.classList.contains('dark')) {
    // Switch to light and update the theme variable
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    theme = 'light';
  } else {
    // Switch to dark and update the theme variable
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    theme = 'dark';
  }
  // Save the selection in localStorage
  localStorage.setItem('theme', theme);
}

// Function to load the saved theme
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  // Apply the saved theme if it exists
  if (savedTheme) {
    document.body.classList.remove('light', 'dark'); // Clear classes first
    document.body.classList.add(savedTheme);
  }
}

// Add a listener to the theme toggle switch
document.getElementById('checkbox').addEventListener('click', toggleTheme);

// Load the theme on start
document.addEventListener('DOMContentLoaded', loadSavedTheme);
