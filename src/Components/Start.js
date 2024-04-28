import { useNavigate } from "react-router";
import { useApp } from "../Context/Context"

export default function Start() {

    const { name, handleName, phoneNumber, handlePhoneNumber, emergencyOne, handleEmergencyOne, emergencyTwo, handleEmergencyTwo, loggedInEmail, setFormData } = useApp();

    const navigate = useNavigate();

    return <div className='w-full flex flex-col items-center gap-[30px] py-[30px]'>
        <h1 className='text-white font-semibold text-[28px]'>Let's Get Started!</h1>

        <div className='relative'>
            <input type='text' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={name} onChange={(e) => {
                handleName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Full Name</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>

        <div className='relative'>
            <input type='text' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={phoneNumber} onChange={(e) => {
                if (e.target.value.length === 11) return;
                handlePhoneNumber(e.target.value.replace(/\D/g, ''))
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Phone</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
        </div>

        <div className='relative'>
            <input type='text' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={emergencyOne} onChange={(e) => {
                if (e.target.value.length === 11) return;
                handleEmergencyOne(e.target.value.replace(/\D/g, ''))
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Emergency #1</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
        </div>

        <div className='relative'>
            <input type='text' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={emergencyTwo} onChange={(e) => {
                if (e.target.value.length === 11) return;
                handleEmergencyTwo(e.target.value.replace(/\D/g, ''))
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Emergency #2</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
        </div>

        <button className='bg-slate-800 text-white font-semibold px-16 py-3 text-[18px] rounded-full hover:bg-slate-700' onClick={async () => {

            const req = { name, phoneNumber, emergencyOne, emergencyTwo }

            console.log(req);
            
            const addName = await fetch('http://localhost:3001/api/v1/data/addname', {
                method: 'POST',
                body: JSON.stringify({loggedInEmail, name}),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const resAddName = await addName.json();
            console.log(resAddName);

            const addEmerOne = await fetch('http://localhost:3001/api/v1/data/addnumberOne', {
                method: 'POST',
                body: JSON.stringify({loggedInEmail, emergencyOne}),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const addEmerTwo = await fetch('http://localhost:3001/api/v1/data/addnumberTwo', {
                method: 'POST',
                body: JSON.stringify({loggedInEmail, emergencyTwo}),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const addPhoneNumber = await fetch('http://localhost:3001/api/v1/data/userNumber', {
                method: 'POST',
                body: JSON.stringify({loggedInEmail, phoneNumber}),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            navigate("/display");

        }}>Begin</button>
    </div>
}


/*

value={phoneNumber} onChange={(e) => {
                if (e.target.value.length === 11) return;
                handlePhoneNumber(e.target.value.replace(/\D/g, ''))
            }}

            */