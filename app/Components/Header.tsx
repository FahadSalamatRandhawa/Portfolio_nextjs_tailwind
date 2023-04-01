'use client'
import { IconBase } from "react-icons/lib";
import { SocialIcon } from "react-social-icons";
import { TypeAnimation } from "react-type-animation";
import {CiLinkedin,CiTwitter,CiYoutube} from 'react-icons/ci';
import {GoMarkGithub} from 'react-icons/go';

export default function Header(){
    
    return (
        <>
            <div className=" h-auto flex flex-col justify-center sm:flex sm:flex-row md:flex md:justify-around  text-4xl items-center bg-slate-600">
                <div className=" h-auto w-[300px] ">Fahad Salamat <div>Randhawa</div>
                <div className="  h-auto w-auto text-lg mt-3 flex"> I am a &nbsp; <TypeAnimation sequence={['Software Engineer',2000,'Web3 Developer',2000,'Metaverse Developer',2000]} repeat={Infinity} /></div>
                </div>
                <div className=" flex gap-3 my-3 sm:self-end text-sm text-gray-200">
                
                    <div className=" group">
                        <CiYoutube color="red" size='2rem'/>
                        <div className=" invisible group-hover:visible">Youtube</div>
                    </div>
                    <div className=" group">
                        <CiLinkedin color="skyblue" size='2rem'/>
                        <div className=" invisible group-hover:visible">Linkedin</div>
                    </div>
                    <div className=" group">
                        <CiTwitter color="lightblue" size='2rem'/>
                        <div className=" invisible group-hover:visible">Twitter</div>
                    </div>
                    <div className=" group">
                    <GoMarkGithub color="white" size='2rem'/>
                    <div className=" invisible group-hover:visible">Github</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}