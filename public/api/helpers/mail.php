<?php
require $_SERVER['DOCUMENT_ROOT'] . '/tools/PHPMailer/PHPMailerAutoload.php';

function send_mail($sender, $receiver, $subject, $content)
{
    // Validación de email
    if (!filter_var($sender, FILTER_VALIDATE_EMAIL) || !filter_var($receiver, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Invalid email format'
        ];
    }

    // Cargar configuración desde archivo o variables de entorno
    $smtp_config = [
        'host' => 'smtp.hostinger.com',
        'port' => 587,
        'username' => 'no-reply@luiscruz.com.ar',
        'password' => '@UZ8sU%hn47?_i5T+',
        'from_name' => 'Influencer Funds'
    ];

    try {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Host = $smtp_config['host'];
        $mail->Port = $smtp_config['port'];
        $mail->SMTPAuth = true;


        $mail->Username = $smtp_config['username'];
        $mail->Password = $smtp_config['password'];

        // Configuración de remitente fijo institucional (mejor para entregabilidad)
        $mail->setFrom($smtp_config['username'], $smtp_config['from_name']);
        $mail->addReplyTo($sender, $sender); // El usuario puede responder al remitente original
        $mail->addAddress($receiver, $receiver);

        // Configuración de caracteres y formato
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64'; // Mejor codificación para contenido internacional
        $mail->isHTML(true);
        $mail->Subject = $subject; // No usar utf8_decode
        $mail->Body = $content;

        // Versión plain text alternativa (importante para entregabilidad)
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $content));

        // Añadir headers para mejor entregabilidad
        $mail->addCustomHeader('X-Mailer', 'Influencer Funds Mailer');
        $mail->addCustomHeader('X-Priority', '1');
        $mail->addCustomHeader('X-MSMail-Priority', 'High');
        $mail->addCustomHeader('Importance', 'high');

        if ($mail->send()) {
            return [
                'success' => true,
                'message' => 'Email sent successfully',
                'mail' => $mail
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Failed to send email: ' . $mail->ErrorInfo
            ];
        }
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Email exception: ' . $e->getMessage()
        ];
    }
}
