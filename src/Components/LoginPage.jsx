 import { useEffect, useRef, useState } from "react"
import Button from "./Button"
 function LoginPage(){
    const [valueInp,setValueInp] = useState("");
    const inputRef = useRef()
    return (
        <div className="container bg-[#002b5b] w-screen h-screen flex justify-center">
          <div className="info  rounded-lg  w-[35%] p-8 text-center">
            <div className="heading mb-32 mt-4"> 
              <h1 className='text-3xl font-semibold'><span className="text-[#36c6c0]">Webinar</span>.gg</h1>
            </div>
            <h2 className='text-2xl font-bold text-gray-300 m-6'>Verify your age</h2>
            <div className="input-box">
              <h4 className='text-sm font-semibold text-gray-400' >Please confirm your birth year. This data will not be saved</h4>
              <input type="text" ref={inputRef} onChange={()=>{setValueInp(inputRef.current.value)}} className='block pl-8 w-[70%] m-auto my-6 p-2 rounded-lg bg-gray-400 opacity-45 text-md' placeholder='Your Birth Year' />
              <Button isDisabled={valueInp.length>0} width={"70%"} goto={"/email"}>Continue</Button>
            </div>
          </div>
        </div>
    )
}

export default LoginPage