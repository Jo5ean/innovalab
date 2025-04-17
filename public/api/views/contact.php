<?php
function get_mail_contact($send)
{
    $name_template = $send['name'];
    $email_template = $send['email'];
    $job_title_template = $send['job_title'];
    $company_template = $send['company'];
    $content = '
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    padding: 20px;
                    background-color: #ffffff;
                    max-width: 600px;
                    margin: 20px auto;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .header {
                    background-color: #74f3d1;
                    color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                .content {
                    padding: 20px;
                }
                .content h2 {
                    color: #333;
                }
                .content p {
                    color: #555;
                    line-height: 1.5;
                }
                .footer {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f4f4f4;
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Contact Message</h1>
                </div>
                <div class="content">
                    <h2>Message Details</h2>
                    <p><strong>Name:</strong> ' . $name_template . '</p> 
                    <p><strong>Email:</strong> ' . $email_template . '</p>
                    <p><strong>Job Title:</strong> ' . $job_title_template . '</p>
                    <p><strong>Company:</strong> ' . $company_template . '</p>
                </div>
                <div class="footer">
                    <p>This email is an automatic notification. Please do not reply to this message.</p>
                </div>
            </div>
        </body>
        </html>
    ';
    return $content;
}
