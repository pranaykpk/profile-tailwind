import { useState } from "react"

function Profile(){
    const [open,setOpen] = useState(true);
    return( //lg:translate-x-0 -translate-x-20
        <div className="profile w-screen h-screen flex bg-blue-1">
            <div className={`${open?"w-54":"w-16"} sideBar hidden md:block  transition-all duration-500 h-full border-1 bg-amber-50 `}>
                <button onClick={()=>{setOpen(!open)}}>{open?"close":"open"}</button>
                {open && <div className="name">Side bar</div>}
            </div>
            <div className="hero-section   bg-amber-200 flex-1 h-screen ">

                <img src="" alt="image" className="  w-full h-[15%] bg-black" />

                <div className="hero-compo px-4 gap-4 md:flex md:justify-around md:w-full w-1/2 md:h-[85%] h-fit  md:items-center">
                    <div className="profile relative p-3  md:w-[18%] md:h-[45%] m-4 rounded-xl bottom-52 bg-white shadow-xl"> profile</div>

                    <div className="rounded-lg timeline  mt-12 w-130 mb-5 ">
                        <h4 className="text-sm mt-2">Monday,14 October</h4>
                        <h2 className="text-2xl font-semibold my-3">Good morning, Prableen!</h2>
                        
                        <div className="times grid grid-cols-5  h-120  gap-y-1 shadow-xl ">
                            <div className="date col-span-5  flex items-center pl-4  text-lg font-semibold border-b border-r border-gray-700 ">Monday,14 October</div>
                            <div className="row1 col-span-1 flex items-center pl-4 border-b border-r border-gray-700 ">time</div>
                            <div className="row1 col-span-4  flex items-center pl-4 border-b border-r border-gray-700 ">task</div>
                            <div className="row1 col-span-1 flex items-center pl-4 border-b border-r border-gray-700 ">time</div>
                            <div className="row1 col-span-4  flex items-center pl-4 border-b border-r border-gray-700 ">task</div>
                            <div className="row1 col-span-1 flex items-center pl-4 border-b border-r border-gray-700 ">time</div>
                            <div className="row1 col-span-4  flex items-center pl-4 border-b border-r border-gray-700 ">task</div>
                            <div className="row1 col-span-1 flex items-center pl-4 border-b border-r border-gray-700 ">time</div>
                            <div className="row1  col-span-4  flex items-center pl-4 border-b border-r border-gray-700 ">task</div>
                        </div>
                    </div>
                    <div className="button p-6 my-10 shadow-2xl w-full md:w-[20%] grid grid-cols-2 h-84 ">
                        <div className="but1 w-20 h-20 bg-blue-2"></div>
                        <div className="but1 w-20 h-20 bg-blue-2"></div>
                        <div className="but1 w-20 h-20 bg-blue-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile