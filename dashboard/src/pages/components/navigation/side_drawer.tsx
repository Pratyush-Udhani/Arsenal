import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { BiSolidDownArrowCircle as DownArrow } from "react-icons/bi";
import React, { useState } from "react"; 
import Logo from "public/logo";
import styles from "./side_drawer.module.css"

type Props = {
    className: string
}

const SideDrawer: React.FC<Props> = ({ className }) => {
    const [isSelected, setSelected] = useState(true)

    const selectedClass = styles.selected
    
    return(
        <div className={`h-full w-72 bg-backdrop overflow-y-auto flex flex-col py-10 px-8 ${className}`}>
            <div className="flex flex-row items-center"> 
            <Logo className="aspect-square basis-1/6"/>
            <p className="text-gray-100 text-2xl basis-5/6 pl-3 h-fit">Pinaka Tech</p> 
            </div>
            <div className="flex flex-col mt-7">
                <ul className="space-y-7">
                    <li>
                        <div className={`${selectedClass} flex flex-row cursor-pointer px-5 py-3 rounded-lg w-full`}>
                            <RxDashboard className="h-auto"/>
                            <Link href="/" className="text-l mx-3">Dashboard</Link>
                        </div>
                    </li>
                    <li>
                        <button className="flex flex-row cursor-pointer justify-between px-5 py-2 rounded-lg w-full hover:bg-[#17C65A]">
                            <RxDashboard className="h-auto text-text-gray"/>
                            <Link href="/" className="text-l mx-3 text-text-gray text-start grow ">Dropdown</Link>
                            <DownArrow className="text-text-gray h-auto self-center"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>    
    )
}

export default SideDrawer
