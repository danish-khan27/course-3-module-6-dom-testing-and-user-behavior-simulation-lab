// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function addElementToDOM(targetId, text) {
  const container = document.getElementById(targetId);
  const el = document.createElement('p');
  el.textContent = text;
  container.appendChild(el);
}

function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.remove();
}

function simulateClick(targetId, text) {
  addElementToDOM(targetId, text);
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const input = form.querySelector('input');
  const value = input.value.trim();
  const error = document.getElementById('error-message');

  error.textContent = '';
  error.classList.add('hidden');

  if (value === '') {
    error.textContent = 'Input cannot be empty';
    error.classList.remove('hidden');
  } else {
    addElementToDOM(targetId, value);
  }
}

// Export for testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
};
