import './Components.css'

export default function Animation(){
    return (
        <>
            <div className=" block w-auto h-auto ">
                <div className=" absolute animate-ping rounded-full opacity-70 -z-10 ml-[30%] justify-evenly duration-1000 box w-[30%] h-[30%] border-indigo-500 border-2">                    
                </div>
            </div>
        </>
    )
}