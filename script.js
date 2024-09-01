document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    
    // Get the values from the form fields
    var gmail = document.getElementById("gmail").value;
    var fullName = document.getElementById("fullName").value;
    var age = document.getElementById("age").value;
    
    // Display the values in an alert (optional)
    alert("Gmail: " + gmail + "\nFullName: " + fullName + "\nAge: " + age);
    
    // Print the values to the page
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p><strong>Gmail:</strong> " + gmail + "</p>" +
                          "<p><strong>Full Name:</strong> " + fullName + "</p>" +
                          "<p><strong>Age:</strong> " + age + "</p>";
}



