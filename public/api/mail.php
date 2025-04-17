<?
require $_SERVER['DOCUMENT_ROOT'] . '/api/helpers/response.php';
require $_SERVER['DOCUMENT_ROOT'] . '/api/helpers/mail.php';
require $_SERVER['DOCUMENT_ROOT'] . '/api/views/contact.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $email_send = 'contact@influencerfunds.com';
        $subject = 'Thank you for your inquiry.';
        $mailer = array(
            'email' => $_POST['email'],
            'name' => $_POST['name'],
            'job_title' => $_POST['job_title'],
            'company' => $_POST['company']
        );
        $content = get_mail_contact($mailer);

        $response = send_mail($_POST['email'], $email_send, $subject, $content);
    } catch (Exception $e) {
        $response = array(
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        );
        print_all($response);
        exit;
    }
} else {
    $response = array(
        'success' => false,
        'message' => 'Without authorization'
    );
}
print_all($response);
