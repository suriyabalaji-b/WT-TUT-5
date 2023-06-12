function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Display the entered data
    var output = document.getElementById('output');
    output.innerHTML = `
        <h3>Entered Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    // Reset the form
    document.getElementById('myForm').reset();
}
