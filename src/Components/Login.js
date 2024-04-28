import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../Context/Context";

export default function Login() {   

    const navigate = useNavigate();

    const { email, handleEmail, password, handlePassword, auth, handleAuth, handleLoggedInEmail, loggedInEmail } = useApp();
    
    return <div className='flex justify-center items-center h-screen w-screen bg-black'> 
        <div className='w-[80%] h-[60%] flex flex-col items-center gap-8'>
            <h1 className='text-[32px] font-semibold text-white mt-[30px]'>Welcome!</h1>

            <div className='relative'>
            <input type='text' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={email} onChange={(e) => {
                handleEmail(e.target.value)
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Email</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
            </div>

            <div className='relative'>
            <input type='password' className='border-white bg-slate-800 focus:outline-none focus:border-none text-white pt-7 pb-2 px-10 rounded-2xl font-bold' 
            value={password} onChange={(e) => {
                        handlePassword(e.target.value)
            }}
            />
            <label className='absolute text-slate-600 top-1 left-10 font-semibold uppercase text-sm tracking-wide'>Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute top-5 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            </div>

            <Link to='/register'><p className='text-white underline'>Register Now</p></Link>

            <button className='text-white bg-slate-800 rounded-full px-12 py-2' onClick={async () => {

                const data = await fetch('http://localhost:3001/api/v1/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({email, password}),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })


                const res = await data;
                if (res.status === 200) {
                    handleAuth(true)
                    console.log(email);
                    handleLoggedInEmail(email);
                    navigate('/home');
                }

                if (res.status === 401) {
                    handleAuth(false)
                }

                //navigate('/home');
            }}>
                Login
            </button>


        </div>
    </div>
}