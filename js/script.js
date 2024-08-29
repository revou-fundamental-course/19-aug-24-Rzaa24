document.addEventListener('DOMContentLoaded', function() {
    // Display Current Time
    const currentTime = document.querySelector('#current-time');
    const now = new Date();
    currentTime.textContent = now.toLocaleString(); // Use local string for better readability

    // Welcoming speech with name
    const savedName = localStorage.getItem('userName') || "Dea";
    document.querySelector('#user-name').textContent = savedName;

    // Form Submission and Validation
    function validateForm(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.querySelector('#name').value.trim();
        const birthdate = document.querySelector('#birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const phone = document.querySelector('#phone').value.trim();

        // Update the displayed values
        document.querySelector('#submitted-name').textContent = name;
        document.querySelector('#submitted-birthdate').textContent = birthdate;
        document.querySelector('#submitted-gender').textContent = gender;
        document.querySelector('#submitted-phone').textContent = phone;

        // Save name to localStorage
        localStorage.setItem('userName', name);
    }

    document.querySelector('#contact-form').addEventListener('submit', validateForm);
});
