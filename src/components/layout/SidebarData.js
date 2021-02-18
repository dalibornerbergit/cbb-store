import React from 'react';
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Customers",
        path: "/customers",
        icon: <BsIcons.BsFillPersonFill />,
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        icon: <AiIcons.AiFillAppstore />,
        cName: "nav-text"
    }
]