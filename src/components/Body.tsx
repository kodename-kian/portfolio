import React from 'react';
import Image from "next/image";
import { PropsWithChildren } from 'react';

interface NoProps {}

function Footer() {
    return (
        <footer className="flex justify-center items-center pt-4 pb-2 text-xs mt-auto">
            <Image src="/dino.png" width="75" height="50" alt="offline dinosaur" /> 
                Kian Chua &nbsp;&copy; &nbsp; <span className="text-teal-600"> 2025 </span>
            <Image src="/dino-reverse.png" width="75" height="50" alt="offline dinosaur" /> 
        </footer>
    );
}

export default function Body({children} : PropsWithChildren<NoProps>) {
    return (
        <div className="h-full border-4 overflow-y-auto border-gray-300 bg-gray-100 p-2 text-gray-900">
            {children}
            <Footer />
        </div>
    );
}