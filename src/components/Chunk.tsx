import React from 'react';
import Link from "next/link";

interface ChunkProps {
    href?: string,
    label: string,
}

export default function Chunk({href, label} : ChunkProps) {
    return (
        <div className="w-full mt-2 mb-2 border-2 border-gray-400 active:border-black rounded-sm">
            <a href={href} target="_blank" rel="noopener noreferrer" 
               className="w-full flex border-2 border-white border-b-gray-500 border-r-gray-500 active:border-transparent
                          bg-gray-300 hover:bg-gray-400 p-2 text-black">
                {label}
            </a>
        </div>
    );
}