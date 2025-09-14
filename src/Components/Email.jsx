import { useEffect, useRef, useState } from "react"
import Button from "./Button";
const Email =()=>{
    const [otpInput, setOtpInput] = useState(new Array(6).fill(""))
    const refArr = useRef([]); 
    const handleOnChange = (value,idx)=>{
        if(isNaN(value)) return;
        if(value=="") return;
        setOtpInput(otpInput=>{
            const newArr = [...otpInput]
            newArr[idx]= value.slice(-1)
            return newArr
        })
        refArr.current[idx+1]?.focus()
    }
    const handleKeyDown=(key,idx)=>{
        if(key=="Backspace"){
          
                setOtpInput(otpInput=>{
                    const newArr = [...otpInput]
                    newArr[idx]= "";
                    return newArr
                })
                refArr.current[idx-1]?.focus()

        }
    }
    useEffect(()=>{
        refArr.current[0]?.focus()
    },[])
 return <>
    <div className="email-section w-screen h-screen bg-[#002b5b] flex flex-col pt-[10%] items-center gap-1">
        <h1 className="text-2xl text-gray-300 m-5">Validate OTP</h1>
       <div className="otp-container flex gap-0.5" >
       {otpInput.map((val,idx)=>{
        return(
            <input type="text" onChange={e=>{handleOnChange(e.target.value,idx)}} 
            ref={input=>refArr.current[idx]=input}
            onKeyDown={(e)=>{handleKeyDown(e.key,idx)}}
            value={otpInput[idx]} className="text-center text-xl w-7 h-8 p-2 bg-blue-500 rounded-md" key={idx} />
        )
       })}
       </div>
       <Button goto={"/profile"} isDisabled={true}>Submit</Button>
    </div>
 </>
}

export default Email