<?php
if($_POST['name']){
    $userIP = $_SERVER["REMOTE_ADDR"];
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    $secretKey = "6LecfP8SAAAAAI_jjo8CNAYa8AQSC1YRwnFibq85";
    $request = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaResponse}&remoteip={$userIP}");
    if(!strstr($request, "true")){
        exit('fail-verification');
    }
    else{
		include('phpmailer.php');
		$mail = new PHPMailer;
		$mail->From = $_POST['email'];
		$mail->FromName = $_POST['name'];
		$mail->addAddress('info@websiteme.org', 'Hassan Bazzi');  // Add a recipient
		$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->IsSMTP(); // telling the class to use SMTP
		$mail->Host       = "mail.hassanbazzi.com"; // SMTP server 
		                                           // 1 = errors and messages
		                                           // 2 = messages only
		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->SMTPSecure = "tls";                 // sets the prefix to the servier
		$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
		$mail->Port       = 587;                   // set the SMTP port for the GMAIL server
		$mail->Username   = "info@websiteme.org";  // GMAIL username
		$mail->Password   = "961/underground";            // GMAIL password

		$mail->Subject = 'email from my website';
		$mail->Body    = $_POST['email'] . '<br />' . $_POST['message'];

		if(!$mail->send()) {
		   echo 'Message could not be sent.';
		   echo 'Mailer Error: ' . $mail->ErrorInfo;
		   exit;
		}
		else {
			exit('success');
		}
	}
}
?>
