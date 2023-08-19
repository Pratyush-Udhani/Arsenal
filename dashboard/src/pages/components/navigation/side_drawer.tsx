import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { BiSolidDownArrowCircle as DownArrow } from "react-icons/bi";
import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import React, { useState } from "react"; 
import Logo from "public/logo";
import styles from "./side_drawer.module.css"

type Props = {
    className: string
}

enum MenuItems {
    Dashboard = "Dashboard", 
    Divisions = "Divisions", 
    Settings = "Settings"
}

const SideDrawer: React.FC<Props> = ({ className }) => {
    const [isSelected, setSelected] = useState<MenuItems>(MenuItems['Dashboard'])

    const handleClick = (data: MenuItems) => {
        setSelected(data)
        switch(data) {
            case MenuItems['Dashboard']: {
            }

            case MenuItems['Divisions']: {
                console.log("selected: ", isSelected)
            }

            case MenuItems['Settings']: {
                console.log("selected: ", isSelected)
            }
        }
    }
    return(
        <div className={`h-full w-72 bg-backdrop overflow-y-auto flex flex-col py-10 px-8 ${className}`}>
            <div className="flex flex-row items-center"> 
            <Logo className="aspect-square basis-1/6"/>
            <p className="text-gray-100 text-2xl basis-5/6 pl-3 h-fit">Pinaka Tech</p> 
            </div>
            <div className="flex flex-col mt-7">
                <ul className="space-y-5">
                    <li>
                        <div
                          onClick={() => handleClick(MenuItems['Dashboard'])}
                          className={`flex text-text-gray flex-row cursor-pointer px-5 py-3 rounded-lg w-full ${isSelected === MenuItems['Dashboard']
                          ? styles.selected
                          :"hover:bg-text-gray hover:text-backdrop"}`}>
                            <RxDashboard className="h-auto"/>
                            <Link href="/" className="text-l mx-3">Dashboard</Link>
                        </div>
                    </li>
                    <li>
                        <button 
                          onClick={() => handleClick(MenuItems['Divisions'])}
                          className={`flex text-text-gray flex-row cursor-pointer px-5 py-3 rounded-lg w-full ${isSelected === MenuItems['Divisions']
                          ? styles.selected
                          :"hover:bg-text-gray hover:text-backdrop"}`}>
                            <FaListUl className="h-auto"/>
                            <Link href="/" className="text-l mx-3 text-start grow ">Divisions</Link>
                            <DownArrow className="h-auto self-center"/>
                        </button>
                    </li>
                    <li>
                        <div
                          onClick={() => handleClick(MenuItems['Settings'])}
                          className={`flex text-text-gray flex-row cursor-pointer px-5 py-3 rounded-lg w-full ${isSelected === MenuItems['Settings']
                          ? styles.selected
                          :"hover:bg-text-gray hover:text-backdrop"}`}>
                            <SettingsIcon className="h-auto"/>
                            <Link href="/" className="text-l mx-3">Settings</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>    
    )
}

export default SideDrawer
