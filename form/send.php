<?php

    $to = "lakai6667@gmail.com";
    $from = $_REQUEST['name'];
    $headers = "Content-type: text/html;From: $from";

    $fields = array();
    $fields["name"] = $_REQUEST['name'];
    $fields["email"] = $_REQUEST['email'];
    $fields["message"] = $_REQUEST['message'];

    $body = "Here is what was sent:\n\n";
    $body .= 'Name : '.$fields['name']. '<br>';
    $body .= 'Email : '.$fields['email']. '<br>';
    $body .= 'Message : '.$fields['message']. '<br>';

    $send = mail($to, $body, $headers);


 
    // // Получим данные с формы

    // $name = $_POST['name'];
    // $email = $_POSY['email'];
    // $massage = $_POST['massage'];

    // // обработка данных 

    // // Метод преобразование символов в сущности
    // $name = htmlspecialchars($name);
    // $email = htmlspecialchars($email);
    // $massage = htmlspecialchars($massage);

    // // Декодирование URL
    // $name = urldecode($name);
    // $email = urldecode($email);
    // $massage = urldecode($massage);

    // // метод удаление пробельных символов
    // $name = trim($name);
    // $email = trim($email);
    // // ??? !!!
    // $massage = trim($massage);
    // // ??? !!!


    // // отправляем данные на почту contact@digitalmi.net

    // if(mail("mxnxchrxmx1@gmail.com",
    //     "New massage",
    //     "Name: ".$name."\n".,
    //     "Email: ".$email."\n".
    //     "Message: ".$massage."\n".))
    //      {
    //         echo('Massage true')
    //     }
    //     else {
    //         echo('Massage false')
    //     }
?>

