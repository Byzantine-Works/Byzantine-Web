<?php
$a=0;
$frstname = $_POST['frstname'];
$lastemail = $_POST['lastemail'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
console.log($name);
$formcontent="From: First Name: $frstname \n Message: $message";
$recipient = "jamilahmad88771@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: index.html");
echo "Thank You!";
?>