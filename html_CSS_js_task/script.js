document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('basicForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(checkbox => checkbox.value);
        const country = document.getElementById('country').value;

        // Validate form fields
        if (!fullName || !email || !dob || !gender || interests.length === 0 || !country) {
            alert("Please fill out all fields.");
            return;
        }

        // Create an object with the form data
        const formData = {
            fullName,
            email,
            dob,
            gender,
            interests,
            country
        };

        // Convert the object to JSON
        const dataToSave = JSON.stringify(formData, null, 2);

        // Create a Blob and download it as a file
        const blob = new Blob([dataToSave], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'form_response.json';  // File name
        link.click();
    });
});
