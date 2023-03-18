import { verify } from 'crypto';
import Link from 'next/link';
import {GoVerified} from 'react-icons/go'
import { Url } from 'url';

interface CertificateInterface{
    Name:string;
    Provider:string;
    Identifier?:string;
    Url:string;
}

let CertificationList:CertificateInterface[]=[
    {
        Name:'AWS Certified Solutions Architect',
        Provider:'Amazon Web Services',
        Url:`https://aw.certmetrics.com/amazon/public/verification.aspx`,
        Identifier:'PL1L4Q82MNBQQFKM'
    },
    {
        Name:'JavaScript Algorithms and Data Structures',
        Provider:'Free Code Camp',
        Url:'https://www.freecodecamp.org/certification/DeadlyDuck/javascript-algorithms-and-data-structures'
    }
]

export default function Certifications(){

    return (
        <>
            <div className=" flex-col px-3 my-5">
                <div className=" flex justify-center text-3xl py-2">
                Certifica<div className=" text-indigo-400">tions</div>
                </div>
                <div className=" flex flex-wrap justify-center md:justify-start lg:justify-start gap-5">
                    {
                        CertificationList.map((cert)=>{
                            return(
                                <>
                                    <div className=" block w-64 h-auto">
                                    <div className=" flex justify-center items-center bg-white h-0.5 my-2"><span className=" bg-indigo-500 rounded-lg h-4 w-4"></span></div>
                                    <div className=" flex flex-col px-2 h-auto w-auto rounded-sm shadow-md shadow-indigo-500">
                                        <div>{cert.Name}</div>
                                        <em>{cert.Provider}</em>
                                        {cert.Identifier?<em>ID : {cert.Identifier}</em>:<></>}
                                        <Link target='_blank' href='https://aw.certmetrics.com/amazon/public/verification.aspx'>
                                        <div className=" flex justify-center items-center hover:bg-indigo-600/40 hover:duration-1000 rounded-sm my-5 outline-1 outline-indigo-400 outline gap-2">Validate Certification <GoVerified/></div>
                                        </Link>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}