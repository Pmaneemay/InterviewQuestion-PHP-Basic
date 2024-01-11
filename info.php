<?php
header("Content-Type: text/plain");
// Set the response content type to plain text to inform the client about the data formatS

if (isset($_POST['username'])) {
    $username = $_POST['username'];  // Retrieve the value of 'username' from the POST data

    //if username is abc , send back text = verified else text = error 
    if ($username == "abc") {
        echo "Verified";
    } else {
        echo "Invalid";
    }
} else {
    echo "Error";
}
