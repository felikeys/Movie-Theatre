import { FaBars } from "react-icons/fa"
import { Genre } from "./shared/genres"
import AnimatedSearch from "./shared/search"

const Header = () => {
  return (
    <div className="bg-black w-full h-16 flex items-center justify-between px-9">
        <FaBars className="text-white cursor-pointer" size={20} />
            <div className="flex items-center bg-white w-64" >
           <AnimatedSearch />
            </div>
            <Genre/>
    </div>
  )
}

export default Header