$(document).ready(function() {
    // Wait for the document (DOM) is fully loaded and ready

    $("#submitBtn").click(function(e) {
        // When the button with the ID "submitBtn" is clicked
        e.preventDefault(); // Prevent the form from submitting normally

        let message = $("#Message"); // Select the element with ID "Message" and store it in the variable "message"
        let value = $("#username").val(); // Get the value of the input field with ID "username" and store it in the variable "value"

        if (value === "") {
            // If the value is empty, set the text of "message" to a warning message
            message.css("color", "red");
            message.text("Please input a username first");
        } else {
            // If the value is not empty, create a data string in the format "username=value"
            let data = "username=" + value;

            // Send an AJAX request to the server
            $.ajax({
                url: "info.php", 
                method: 'POST', 
                data: data, 
                success: function(res) {  // If the AJAX request is successful
                    if (res=== "Verified") {
                        // If it is verified, set the text of "message" color to green
                        message.css("color", "forestgreen");
                        message.text(res);
                    } else {
                        // If not verified  set the text of "message" color to red
                        message.css("color", "red");
                        message.text(res);
                    }
                }
            });
        }
    });
});