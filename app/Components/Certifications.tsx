
export default function Certifications(){

    return (
        <>
            <div className=" flex-col px-3">
                <div className=" flex justify-center text-3xl py-2">
                Certifica<div className=" text-indigo-400">tions</div>
                </div>
                <div className=" flex flex-wrap gap-5 border-green-300 border-2">
                    <div className=" block w-60 h-40">
                        <div className=" flex justify-center items-center bg-white h-0.5 my-2"><span className=" bg-indigo-500 rounded-lg h-4 w-4"></span></div>
                        <div className=" flex flex-col px-2 h-32 min-w-24 rounded-sm shadow-md shadow-indigo-500">
                            <div>Name</div>
                            <em>Provider</em>
                            <button className=" rounded-sm mt-10 outline-1 outline-indigo-400 outline">Validate Certification</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}