// Get the age verification form element
const ageVerificationForm = document.getElementById('age-verification-button');

// Add an event listener to the form for when it is submitted
ageVerificationForm.addEventListener('click', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  document.cookie = "ageVerified=true; path=/; expires=Thu, 01 Jan 2099 00:00:00 UTC;";

  // Redirect the user back to the homepage
  window.location.href = '/index.html';
});
