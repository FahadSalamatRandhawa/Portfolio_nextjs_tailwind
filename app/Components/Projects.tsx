import {GoMarkGithub} from 'react-icons/go'
import {BiLinkExternal} from 'react-icons/bi'
import Link from 'next/link'

interface ProjectInterface{
    Name:string,
    Description:string,
    GithubLink:string,
    LiveLink?:string,
}

let ProjectList:ProjectInterface[]=[
    {Name:'Panaverse DAO Web',Description:'Syllabus website using Next.js, Chakra UI and Tailwind',GithubLink:'https://github.com/FahadSalamatRandhawa/Panaverse_DAO_ChakraUI_Next.js/tree/main',LiveLink:'panaverse-dao-chakra-ui-next-js.vercel.app'},
    {Name:'ToDoApp Next.js',Description:'A simple todo app with next.js (using local API)',GithubLink:'https://github.com/FahadSalamatRandhawa/MW3Q2_ToDoApp_Next.js',LiveLink:''},
    {Name:'Events Blog',Description:'Made with Next.js and filebased storage with API',GithubLink:'https://github.com/FahadSalamatRandhawa/Next_Blog_App/tree/master',LiveLink:'https://next-blog-app-gules.vercel.app/'},
    {Name:'First Blog',Description:'Very first blog using Next.js documentation and file reading with status generation',GithubLink:'https://github.com/FahadSalamatRandhawa/Next_Projects/tree/master',LiveLink:'https://next-projects-eight.vercel.app/'},
]

export default function Projects(){

    return(
        <>
            <div className=" flex flex-col justify-center w-full h-auto">
                <div className=" flex text-3xl justify-center p-5">Proje<div className=" text-indigo-500">cts</div></div>
                <div className=" flex flex-wrap justify-center md:justify-start p-5 gap-5 h-auto ">
                    {ProjectList.map(({Name,Description,GithubLink,LiveLink})=>{
                        return (
                            <div className="grid grid-cols-1 gap-2 overflow-auto hover:scale-110 p-3 transition-transform min-h-40 h-auto w-44 border-orange-500 border-2 rounded-md">
                                <div>{Name}</div>
                                <em className=' h-auto'>{Description}</em>
                                <div className=" pt-5 flex justify-around self-end">
                                    <Link target='_blank' href={GithubLink}><GoMarkGithub/></Link>
                                    {LiveLink?<Link target='_blank' href={LiveLink}><BiLinkExternal/></Link>:<BiLinkExternal/>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
