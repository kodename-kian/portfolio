"use client";

import React, { useState } from 'react';

export default function ContactForm() {

    const [canSubmit, setCanSub] = useState(true);

    const send = (async(e : any) => {
        e.preventDefault();
        setCanSub(false);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "cf9e85c6-52ac-4aba-995c-c71cb49fd8d6",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();

        if (result.success) {
            // TODO: add toast to indicate success
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
        } else {
            console.log("Something went wrong!");
        }

        setCanSub(true);
    });

    return (
        <form className="pt-2" onSubmit={send}>
            <input type="text" name="name" placeholder="Your Name" maxLength={60} required
                   className="w-full p-2 border border-dashed border-black mb-2" />
            <input type="text" name="email" placeholder="Your Email" maxLength={60} required
                   className="w-full p-2 border border-dashed border-black mb-2" />
            <textarea rows={8} name="message" placeholder="Message" maxLength={1200} required
                      className="w-full flex p-2 border border-dashed border-black mb-2" />
            <div className="w-fit border-2 border-black rounded-sm">
                <button type="submit" disabled={!canSubmit}
                        className="border-2 border-white border-b-gray-500 border-r-gray-500 active:border-transparent 
                                   bg-gray-300 hover:bg-window hover:text-gray-100 pl-6 pr-6 text-black
                                   disabled:bg-gray-100 disabled:text-gray-500"> 
                    Submit
                </button>
            </div>  
        </form>
    );
}