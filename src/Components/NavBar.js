import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../Context/Context";

export default function NavBar() {

    const navigate = useNavigate();

    const { onAbout, handleSetOnAbout } = useApp();

    return <div className='bg-slate-800 h-[100px] flex flex-col items-center text-white w-screen justify-start gap-6'>
        <div className='uppercase font-bold tracking-wider text-[20px] mt-[10px]'>Maple</div>
        <div className='flex w-full'>
            <p className='w-[50%] text-center uppercase tracking-wide font-semibold' onClick={() => {
                navigate('/login');
            }}>Log Out</p>
            <p className={`w-[50%] text-center pb-[10px] uppercase tracking-wide font-semibold ${onAbout ? 'border-white border-b-2' : ''}`} onClick={() => {
                navigate('/home');
                handleSetOnAbout(onAbout);
            }}>Home</p>
        </div>
    </div>
}

//${onAbout ? 'border-b border-white' : 'border-b'}