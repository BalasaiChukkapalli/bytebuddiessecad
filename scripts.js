// Get the button and form elements
const openFormBtn = document.getElementById('openFormBtn');
const postForm = document.getElementById('postForm');

// Add event listener to the button
openFormBtn.addEventListener('click', function() {
    // Toggle the display of the form
    postForm.style.display = postForm.style.display === 'none' ? 'block' : 'none';
});


