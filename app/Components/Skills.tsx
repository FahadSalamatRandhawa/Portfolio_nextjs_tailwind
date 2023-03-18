interface SkillInterface{
    Name:string
    Description:string
}

let skillList:SkillInterface[]=[
    {Name:'C++',Description:'A backend framework'},
    {Name:'JavaScript',Description:'A framwork to work on web'},
    {Name:'TypeScript',Description:'TypeSafe compiler for JavaScript'},
    {Name:'Solidity',Description:'Smart contract lanuage for blockchains'},
    {Name:'Java',Description:'For designing interfaces'},
    {Name:'AWS Architecture',Description:'Cloud Service Architecture'},
    {Name:'Linux',Description:'Basic skills and understanding'},
    {Name:'TailWind CSS',Description:'a fast version of CSS'},
    {Name:'Chakra UI',Description:'Pre built components for client side applications'}
]

export default function Skills(){

    return (
        <>
            <div className=" flex text-3xl justify-center py-3">Technology <div className=" text-indigo-400"> Skills</div></div>
            <div className=" flex flex-wrap p-3 gap-5 justify-center md:justify-start lg:justify-start">
                {
                    skillList.map(({Name,Description})=>{
                        return (
                            <>
                                <div className=" justify-center flex-col w-40 h-auto rounded-sm hover:animate-pulse shadow-orange-400 shadow-md">
                                <div className=" flex justify-center">
                                    <div className=" text-xl">
                                        {Name}
                                    </div>
                                </div>
                                <div className="border-t-[1px]  mx-2 my-1 border-t-orange-400"></div>
                                <div className=" text-center">      
                                        {Description}                 
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}