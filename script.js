const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = form[0].value;
  response.textContent = `Thank you, ${name}! Your message has been received.`;
  form.reset();
});
