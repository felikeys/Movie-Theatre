import { FaBars, FaSearch } from "react-icons/fa"
import { Input } from "../ui/input"
import { DropDown } from "./shared/select"

const Header = () => {
  return (
    <div className="bg-black w-full h-16 flex items-center justify-between">
        <FaBars className="text-white cursor-pointer" size={20} />
            <div className="flex items-center bg-white w-64" >
                <FaSearch className="text-neutral-200 cursor-pointer" size={20} />
           <Input placeholder="Search..." />
            </div>
            <DropDown/>
    </div>
  )
}

export default Header