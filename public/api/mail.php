<?
require $_SERVER['DOCUMENT_ROOT'] . '/api/helpers/response.helper.php';
require $_SERVER['DOCUMENT_ROOT'] . '/api/controllers/contact.controller.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email_send = 'luiscruzz.salta@gmail.com';
    $subject = 'Gracias por tu consulta';
    $mailer = array(
        'email' => $_POST['email'],
        'name' => $_POST['name'],
        'job_title' => $_POST['job_title'],
        'company' => $_POST['company']
    );
    $content = get_mail_contact($mailer);

    $response = send_mail($email_send, $email, $subject, $content);
} else {
    $response = array(
        'success' => false,
        'message' => 'Without authorization'
    );
}
print_all($response);
