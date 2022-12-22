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

   // Кому
   $mail->addAddress('ilyabelevcev@j72076024.myjino.ru');
   // Тема
   $mail->Subject = 'Письмо от пользователя сайта';

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
