import { useApp } from "../Context/Context";
import "../Styles/Danger.style.css";
import emailjs from 'emailjs-com';


export default function Danger() {

    const { name, phoneNumber, emergencyOne, emergencyTwo, handleDisplayDanger, displayDanger } = useApp();

    console.log("sigma", emergencyOne, emergencyTwo);

    let user_email = ["@tmomail.net", "@vtext.com", "@txt.att.net"];

    function sendEmail() {
        console.log("in here send email");
        console.log("in here 2 send email");
        console.log(emergencyOne);
        console.log(emergencyTwo);
        user_email.map((el) => {
            let message = `Hello there! This is Maple. This is an automated email sent from an acquantaince of yours. ${name} has signed up to use the app, and they are in trouble. (${phoneNumber})`
            const emailOne = emergencyOne + el;
            const emailTwo = emergencyTwo + el;

            console.log("broski", emailOne, emailTwo);
    
            emailjs.send('service_9uwvh7g', 'template_gawuz2n', {
                user_email: emailOne, // Set the recipient's email address directly here
                phoneNumber: phoneNumber,
                name: name,
                }, 'M8SZ0SBj1tMrpKrWq')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                });
    
                emailjs.send('service_9uwvh7g', 'template_8masdyh', {
                    user_email: emailTwo, // Set the recipient's email address directly here
                    phoneNumber: phoneNumber,
                    name: name,
                    }, 'M8SZ0SBj1tMrpKrWq')
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    })
                    .catch((error) => {
                        console.log('FAILED...', error);
                    });
            })
    }

    return (
        <div className={`w-[95%] h-screen bg-red-500 border-red-500 rounded-xl flex flex-col items-center justify-around flashing-bg ${displayDanger ? "" : "hidden"}`}>
            <h1 className='text-[24px] text-white uppercase tracking-wide flash-title'>Are You In Danger</h1>
            <button className='text-red-500 text-[32px] tracking-wide uppercase bg-white w-[80%] rounded-full flash-button' onClick={() => {
                sendEmail();
                handleDisplayDanger(false);
            }}>Yes</button>
            <button className='text-red-500 text-[32px] tracking-wide uppercase bg-white w-[80%] rounded-full flash-button' onClick={() => {
                handleDisplayDanger(false);
            }}>No</button>
        </div> 
    );
}
