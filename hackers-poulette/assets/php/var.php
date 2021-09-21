
<?php

//honeypot

if (isset($_POST['mid_name']) && $_POST['mid_name'] != "")
die();


// retrieve form

function formCompletion()
{
    if (
        isset($_POST['fname']) and isset($_POST['lname']) and isset($_POST['gender'])
        and isset($_POST['country']) and isset($_POST['mail']) and isset($_POST['message'])
    ) {
        $var = array(
            "fname" => $_POST['fname'],
            "lname" => $_POST['lname'],
            "mail" => $_POST['mail'],
            "country" => $_POST['country'],
            "message" => $_POST['message'],
            "subject" => "",
            "gender" => "",
        );

        $gender = $_POST['gender'];
        switch ($gender) {
            case 1:
                $var['gender'] = "M";
                break;
            case 2:
                $var['gender'] = "F";
                break;
            case 3:
                $var['gender'] = "Non-binary";
                break;
        }

        $subject = $_POST['subject'];
        switch ($subject) {
            case 1:
                $var['subject'] = "Other";
                break;
            case 2:
                $var['subject'] = "Missing parts";
                break;
            case 3:
                $var['subject'] = "Faulty item";
                break;
        }
       // displayArray($var);

    sendMail($var);
    }
    
}
// function displayArray($var)
// {
//     echo "<pre style='color: white; text-align: center;'>";
//     print_r($var);
//     echo "</pre>";
// }

formCompletion();


//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'assets/vendor/autoload.php';



function sendMail($var)

{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);


    //Server settings

    $mail->isSMTP();
    $mail->Host = 'smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = '2d437420b94bba';
    $mail->Password = '3ddbfef37b51e6';                                      //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('4bc02516cb-34d354@inbox.mailtrap.io', 'Mailer');
    $mail->addAddress($var['mail'], $var['fname'] . '' . $var['lname']);     //Add a recipient


    //Attachments

    $mail->addAttachment('assets/img/hackers-poulette-logo.png', 'hackers-poulette-logo.png');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $var['subject'];
    $mail->Body    = $var['message'];


    $mail->send();

    echo '<script> alert("Message has been sent, thank you.")</script>';

    
}


?>