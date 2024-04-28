import { useApp } from "../../Context/Context";

export default function Button() {

    const { name, phoneNumber, emergencyOne, emergencyTwo } = useApp();

    const sendEmail = () => {
        e.preventDefault();
        
        // let  = ["4086646543", "3604103911"];
        let user_email = ["@tmomail.net", "@vtext.com", "@txt.att.net"];

        user_email.map((el, index) => {
            let message = `Hello there! This is Maple. This is an automated email sent from an acquantaince of yours. ${name} has signed up to use the app, and they are in trouble. (${phoneNumber})`
            const emailOne = emergencyOne + el;
            const emailTwo = emergencyTwo + el;

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
            });

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
            });
        })





        let message = Hello there! This is Maple. This is an automated email sent from an acquaintance of yours! They have signed up to use the app, and are in trouble. (their phone number)";
        //let email = "4086646543@tmomail.net";
       user_email.forEach((domain) => {
         const email = user_name + domain;
    
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
        });

    return <h1>This is Button</h1>
}