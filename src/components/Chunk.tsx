import React from 'react';

interface ChunkProps {
    href?: string,
    label: string,
    icon?: string,
}

export default function Chunk({href, label, icon} : ChunkProps) {
    return (
        <div className="w-full mt-2 mb-2 border-2 border-gray-400 active:border-black rounded-sm">
            <a href={href} target="_blank" rel="noopener noreferrer" 
               className="w-full flex border-2 border-white border-b-gray-500 border-r-gray-500 active:border-transparent
                          bg-gray-300 hover:bg-gray-400 p-2 text-black items-center">
                { icon ? <span className={icon + " pr-2 text-lg"}> </span> : <></>}
                { label }
            </a>
        </div>
    );
}