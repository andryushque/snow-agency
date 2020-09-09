<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$commentTitle = $_POST['commentTitle'];
$commentText = $_POST['commentText'];
$form = $_POST['form'];

// Формирование самого письма
if ($form == 'message-form') {
  $title = "Новый комментарий с сайта Snow Agency";
  $body = "
  <h3>Новый комментарий</h3>
  <b>Имя:</b> $name<br>
  <b>Email:</b> $email<br>
  <b>Тема:</b> $commentTitle<br>
  <b>Комментарий:</b> $commentText<br>
  ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aundrew42@gmail.com'; // Логин на почте
    $mail->Password   = 'nP7xQhZ-5%!hqF,'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aundrew42@gmail.com', 'Andrew U'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('andrew.ustinov23@gmail.com');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($form == 'message-form') {
  header('Location: message-comment.html');
};

// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);