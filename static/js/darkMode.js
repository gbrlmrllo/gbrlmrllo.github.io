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
  // Update the toggle switch state
  updateToggleState();
}

// Function to load the saved theme
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  // Apply the saved theme if it exists
  if (savedTheme) {
    document.body.classList.remove('light', 'dark'); // Clear classes first
    document.body.classList.add(savedTheme);
  }
  // Ensure the toggle switch is in the correct position
  updateToggleState();
}

// Function to update the toggle switch state based on the current theme
function updateToggleState() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  // Assuming the toggle is a checkbox
  const themeToggle = document.getElementById('checkbox');
  themeToggle.checked = currentTheme === 'dark';
}

// Add a listener to the theme toggle switch
document.getElementById('checkbox').addEventListener('click', toggleTheme);

// Load the theme on start
document.addEventListener('DOMContentLoaded', loadSavedTheme);
