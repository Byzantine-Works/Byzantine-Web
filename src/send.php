
<?php
if($_POST){
    $frstname = $_POST['frstname'];
    $lastemail = $_POST['lastemail'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $text = $_POST['message'];
    $formcontent="From: First Name: $frstname \n Last Name: $lastemail \n Phone: $phone \n Message: $message";

//send email
    mail("jamilahmad88771@gmail.com", "This is an email from:" .$email, $formcontent);
}
?>