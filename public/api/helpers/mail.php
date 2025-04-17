<?php
require $_SERVER['DOCUMENT_ROOT'] . '/tools/PHPMailer/PHPMailerAutoload.php';

function send_mail($sender, $receiver, $subject, $content)
{
    if (isset($sender) && !empty($sender)) {
        if (isset($receiver) && !empty($receiver)) {
            if (isset($subject) && !empty($subject)) {
                if (isset($content) && !empty($content)) {
                    // Validación de email
                    if (!filter_var($sender, FILTER_VALIDATE_EMAIL) || !filter_var($receiver, FILTER_VALIDATE_EMAIL)) {
                        $response = array(
                            'success' => false,
                            'message' => 'Invalid email format'
                        );
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
                        $mail->setFrom($smtp_config['username'], $smtp_config['from_name']);
                        $mail->addReplyTo($sender, $sender);
                        $mail->addAddress($receiver, $receiver);
                        $mail->CharSet = 'UTF-8';
                        $mail->isHTML(true);
                        $mail->Subject = utf8_decode($subject);

                        $mail->Body = $content;
                        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $content));

                        // Añadir headers para mejor entregabilidad
                        $mail->addCustomHeader('X-Mailer', 'Influencer Funds Mailer');
                        $mail->addCustomHeader('X-Priority', '1');
                        $mail->addCustomHeader('X-MSMail-Priority', 'High');
                        $mail->addCustomHeader('Importance', 'high');

                        if ($mail->send()) {
                            $response = array(
                                'success' => true,
                                'message' => 'Email sent successfully'
                            );
                        } else {
                            $response = array(
                                'success' => false,
                                'message' => 'Failed to send email',
                                'error' => $mail->ErrorInfo
                            );
                        }
                    } catch (Exception $e) {
                        return [
                            'success' => false,
                            'message' => 'Email exception: ' . $e->getMessage()
                        ];
                    }
                } else {
                    $response = array(
                        'success' => false,
                        'message' => 'You must provide the email content'
                    );
                }
            } else {
                $response = array(
                    'success' => false,
                    'message' => 'You must provide an email subject'
                );
            }
        } else {
            $response = array(
                'success' => false,
                'message' => 'You must provide the recipients email'
            );
        }
    } else {
        $response = array(
            'success' => false,
            'message' => 'You must provide the senders email'
        );
    }
    return $response;
}
