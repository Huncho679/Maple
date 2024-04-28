import NavBar from "./NavBar";
import Start from "./Start";
import '../Styles/Hero.style.css';

export default function Home() {

    return <div className='w-screen h-screen bg-black flex flex-col items-center px-[30px] gap-[50px] pb-[30px]'>
        <NavBar />

        <div className='flex flex-col items-center'>
            <p className='hey-there text-[48px] text-white font-bold tracking-wide'>Hey There!</p>
            <p className='safeguard text-[32px] text-white font-semibold'>Maple Here</p>     
        </div>

        <Start />
    </div>
}