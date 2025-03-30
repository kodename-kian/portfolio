'use client';

import React from 'react';
import { useState, PropsWithChildren } from 'react';

interface ProjectLinks {
    platform: string,
    url: string,
    icon: string,
}

interface ProjectProps {
    title: string,
    year?: string,
    open?: boolean,
    links?: Array<ProjectLinks>,
}

export default function Project({title, year, open, links, children} : PropsWithChildren<ProjectProps>) {
    const [contentVisible, setContentVis] = useState(open);

    return (
        <div>
            <button onClick={() => setContentVis(!contentVisible)} className="text-left">
                { contentVisible ? <span className="text-md"> {'\u25BC'} </span> :
                                   <span className="text-sm"> {'\u25B6'} </span> }
                { title }
                { year ? " (" + year + ")" : ""}
            </button>

            { contentVisible ?
                <div className="flex flex-col p-2 rounded-lg border border-dashed border-black mb-2">
                    <div className="font-mono text-sm"> { children } </div>
                    { links ? 
                        <div className="flex flex-col md:flex-row md:items-center pt-3"> 

                            { links.map((link) => {
                                return( 
                                    <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer"
                                       className="md:w-40 border-2 border-white border-b-gray-500 border-r-gray-500 active:border-transparent
                                                  bg-gray-300 hover:bg-gray-400 p-1 mr-1 text-black text-sm items-center"> 
                                        <i className={link.icon + " pr-1 text-md"}></i> {link.platform} 
                                    </a>
                                );
                            })} 
                        
                        </div> : <></>
                    }
                </div> : <></>
            }
        </div>
    )
}