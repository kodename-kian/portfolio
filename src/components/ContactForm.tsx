"use client";

import React from 'react';

export default function ContactForm() {

    const send = ((e : any) => {
        e.preventDefault();
        console.log("pressed");
    });

    // TODO: fix out-of-bounds when mobile horizontal view
    return (
        <form className="pt-2">
            <div className="">
                <input type="text" placeholder="Your Name" maxLength={60}
                       className="w-full p-2 border border-dashed border-black mb-2" />
                <input type="text" placeholder="Your Email" maxLength={60}
                       className="w-full p-2 border border-dashed border-black mb-2" />
                <textarea rows={8} placeholder="Message" maxLength={1200}
                       className="w-full flex p-2 border border-dashed border-black mb-2" />
                <div className="w-fit border-2 border-black rounded-sm">
                    <button onClick={send}
                            className="border-2 border-white border-b-gray-500 border-r-gray-500 active:border-transparent 
                                       bg-gray-300 hover:bg-gray-400 pl-6 pr-6 text-black"> 
                        Submit
                    </button>
                </div>  
            </div>
        </form>
    );
}