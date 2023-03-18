'use client'
import { TypeAnimation } from "react-type-animation";
import { setInterval } from "timers";

export default function Header(){
    
    return (
        <>
            <div className=" flex h-36 justify-center gap-4 text-4xl items-center bg-slate-600">
                <div className=" h-auto w-auto ">Fahad Salamat <div>Randhawa</div></div>
                <div className="  h-auto w-[200px] text-lg mt-10 flex"> I am a &nbsp; <TypeAnimation sequence={['Software Engineer',2000,'Web3 Developer',2000,'Metaverse Developer',2000]} repeat={Infinity} /></div>
            </div>
        </>
    )
}