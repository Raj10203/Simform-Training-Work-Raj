<?php
$db_host = "localhost:3306";
$db_username = "ricky";
$db_pass = "123";
$db_database = "userLogin";

// // Connection 
$conn = new mysqli($db_host, $db_username, $db_pass, $db_database);

// For checking if connection is
// successful or not
if ($conn->connect_error) {
    die("Connection failed: "
        . $conn->connect_error);
}
?>