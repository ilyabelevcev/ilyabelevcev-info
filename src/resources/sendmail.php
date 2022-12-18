<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'PHPMailer/src/Exception.php';
   require 'PHPMailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'PHPMailer/language/');
   $mail->isHTML(true);

   $name = $_POST['name'];
   $email = $_POST['email'];
   $msg = $_POST['msg'];

   // От кого
   $mail->setFrom('ilyabelevcev01@gmail.com', 'Письмо от пользователя сайта');
   // Кому
   $mail->addAddress('ilyabelevcev00@gmail.com');
   // Тема
   $mail->Subject = 'Привет! Хочу предложить работу';
   // $mail->Subject = $topic;

   // Тело письма
   $body = '<h1>Вам письмо!</h1>';

   if(trim(!empty($name))){
      $body.='<p><strong>Имя:</strong> '.$name.'</p>';
   }
   if(trim(!empty($email))){
      $body.='<p><strong>Эл. почта:</strong> '.$email.'</p>';
   }
   if(trim(!empty($msg))){
      $body.='<p><strong>Сообщение:</strong> '.$msg.'</p>';
   }

   $mail->Body = $body;

   // Отправка
   if(!$mail->send()) {
      $message = 'Ошибка!';
   } else {
      $message = 'Данные отправлены!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>
