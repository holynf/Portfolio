import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import PhoneCallIcon from "../../../public/phone-call.svg";

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            <li>
                <Link href="Tel: +989023493683" className='flex items-center gap-2 text-white'>
                    <Image src={PhoneCallIcon} alt="Phone Call Icon"/>
                    09023493683
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
