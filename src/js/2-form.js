// Initialize formData object
let formData = {
    email: "",
    message: ""
  };
  
  // References to form and inputs
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  
  // Local storage key
  const STORAGE_KEY = 'feedback-form-state';
  
  // Load data from local storage on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || "";
      messageInput.value = formData.message || "";
    }
  });
  
  // Save form data to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };
  
  // Handle input events
  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
  });
  
  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Validate fields
    if (!formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
  
    // Log form data to console
    console.log("Form submitted:", formData);
  
    // Clear local storage, form data, and form fields
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  });
  