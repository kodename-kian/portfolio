"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav className="w-full flex flex-row p-2 bg-blue-900 text-gray-100 border-2 rounded-tr-xl">
                <div className="w-5/12">
                    <Link href="/"> Kian Chua </Link>
                </div>
                <div className="flex flex-1 flex-row justify-start">
                    <Link className="pl-4" href="/"> About </Link>
                    <Link className="pl-4" href="/projects"> Projects </Link>
                    <Link className="pl-4" href="/contact"> Contact </Link>
                </div>
                <div className="flex justify-end items-center pl-2 pr-2 text-sm hidden md:block bg-red-800 rounded-sm border border-gray-400">
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