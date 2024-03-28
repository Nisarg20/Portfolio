// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
  const fullName = document.getElementById('fullname').value;
  const message = document.getElementById('message').value;

  // Format the email content
  const subject = `Message from ${fullName}`;
  const body = `${message}`;

  // Compose the mailto link
  const mailtoLink = `mailto:ndoshi2@ncsu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open default email client with prefilled fields
  window.location.href = mailtoLink;
});
