"use client";

import React from "react";
import Link from "next/link";

interface NavLinkProps {
    href: string,
    label: string,
}

function NavLink({href, label} : NavLinkProps) {
    // TODO: active navigation
    return (
        <Link href={href} className="p-1 pl-2 pr-2 hover:bg-blue-950 rounded-tr-lg"> {label} </Link>
    );
}

export default function Header() {
    return (
        <div>
            <nav className="w-full flex flex-row pl-2 pr-2 bg-blue-900 text-gray-100 border-2 rounded-tr-xl">
                <div className="w-5/12 pt-1 pb-1">
                    Kian Chua
                </div>
                <div className="flex flex-1 flex-row justify-start">
                    <NavLink href="/" label="About" />
                    <NavLink href="/projects" label="Projects" />
                    <NavLink href="/contact" label="Contact" />
                </div>
                <div className="flex justify-end items-center mt-1 mb-1 pl-2 pr-2 text-sm hidden md:block bg-red-800 rounded-sm border border-gray-400">
                    x
                </div>
            </nav> 
            <div className="w-full flex flex-row p-1 bg-gray-400 text-gray-800 text-xs">
                <div className="ml-1 mr-2">
                    File
                </div>
                <div className="ml-1 mr-2">
                    Edit
                </div>
                <div className="ml-1 mr-2">
                    View
                </div>
                <div className="ml-1 mr-2">
                    Help
                </div>

            </div>
        </div>
         
    );
    
}