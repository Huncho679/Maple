import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();
    
    let user_name = "4086646543";
    let user_email = ["@tmomail.net", "@vtext.com", "@txt.att.net"];
    let message = "Hello there! This is Maple. This is an automated email sent from an acquaintance of yours! They have signed up to use the app, and are in trouble. (their phone number)";
    let email = "4086646543@tmomail.net";
   //user_email.forEach((domain) => {
     // const email = user_name + domain;

    console.log('Sending email to:', email); // Log the email address before sending

    emailjs.send('service_maple', 'template_fxptqef', {
    to_email_address: email, // Set the recipient's email address directly here
    message: message,
    }, 'gvC4cl9GrbJCZm67a')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
        console.log('FAILED...', error);
    });
    //});
  };

  return (
    <form onSubmit={sendEmail}>
      {/* Your form fields here */}
      <button type="submit">Send Email</button>
    </form>
  );
}