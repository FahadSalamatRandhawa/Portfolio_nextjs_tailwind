import {GoMarkGithub} from 'react-icons/go'
import {BiLinkExternal} from 'react-icons/bi'

export default function Projects(){

    return(
        <>
            <div className=" flex flex-col justify-center w-full h-auto">
                <div className=" flex text-3xl justify-center p-5">Proje<div className=" text-indigo-500">cts</div></div>
                <div className=" flex flex-wrap p-5 ">
                    <div className="grid grid-cols-1 gap-2 overflow-auto hover:scale-110 p-3 transition-transform min-h-40 h-auto w-44 border-orange-500 border-2 rounded-md">
                        <div>Project Name</div>
                        <em className=' h-auto'>Detailsad aasd adasd asd asd sad asd ad</em>
                        <div className=" pt-5 flex justify-around self-end"><GoMarkGithub/><BiLinkExternal/></div>
                    </div>
                </div>
            </div>
        </>
    )
}