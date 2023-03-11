
export default function Certifications(){

    return (
        <>
            <div className=" flex-col justify-center p-3">
                <div className=" flex justify-center text-3xl py-3">
                Certifica<div className=" text-indigo-400">tions</div>
                </div>
                <div className=" flex gap-4">
                    <div>
                    <div className=" flex w-60 bg-white h-0.5 justify-center items-center my-2 -z-10">
                    <div className=" absolute rounded-lg bg-indigo-600 w-4 h-4 z-1"></div>
                    </div>
                    
                    <div className=" gap-y-2 inline-block h-auto min-h-24 w-60 p-5 shadow-md shadow-indigo-400">
                        <div>Certificate Name</div>
                        <div>
                            <em>Provider</em>
                        </div>
                        <button className=" mt-3 outline-indigo-500/50 outline p-1 rounded-md outline-2">
                            Verify Certification
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}