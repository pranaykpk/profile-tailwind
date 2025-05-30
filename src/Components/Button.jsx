import { Link } from "react-router-dom"
const Button = ({
    isDisabled,
    children
}) =>{
    return (
        <Link to={"/email"} className={`block cursor-pointer  w-[70%] m-auto my-6 p-1 rounded-lg text-gray-200  ${isDisabled?`bg-[#36c6c0]`:`bg-gray-500`} font-bold text-sm py-2`}>{children}</Link>
    )
}

export default Button