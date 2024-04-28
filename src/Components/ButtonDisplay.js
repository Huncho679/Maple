import { useEffect } from "react";
import { useApp } from "../Context/Context";
import Button from "./Button/test/src/Button";
import NavBar from "./NavBar";
import emailjs from 'emailjs-com';
import Danger from "./Danger";

export default function ButtonDisplay() {

    const { name, phoneNumber, emergencyOne, emergencyTwo, color, handleDisplayDanger, displayDanger } = useApp();

    let user_email = ["@tmomail.net", "@vtext.com", "@txt.att.net"];

    console.log(emergencyOne, emergencyTwo)

    useEffect(function() {
        if (color === 0) {
            handleDisplayDanger(true);
            setTimeout(() => {
                handleDisplayDanger(false);
            }, 8000)
            sendEmail();
        }


    }, [color])


    function sendEmail() {
        console.log('IN here');
        user_email.map((el) => {
            let message = `Hello there! This is Maple. This is an automated email sent from an acquantaince of yours. ${name} has signed up to use the app, and they are in trouble. (${phoneNumber})`
            const emailOne = emergencyOne + el;
            const emailTwo = emergencyTwo + el;
    
            emailjs.send('service_9uwvh7g', 'template_gawuz2n', {
                user_email: emailOne, // Set the recipient's email address directly here
                message: message,
                }, 'M8SZ0SBj1tMrpKrWq')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                });
    
                emailjs.send('service_9uwvh7g', 'template_gawuz2n', {
                    user_email: emailTwo, // Set the recipient's email address directly here
                    message: message,
                    }, 'M8SZ0SBj1tMrpKrWq')
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    })
                    .catch((error) => {
                        console.log('FAILED...', error);
                    });
            })
    }

    
     return <div className='w-screen h-screen bg-black flex flex-col items-center px-[30px] gap-[50px] pb-[30px]'>
            <NavBar />
            <Button />
            <Danger />
        </div>
}