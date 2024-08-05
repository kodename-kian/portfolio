import React from "react";
import Body from "@/components/Body";
import Chunk from "@/components/Chunk";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    // TODO: logos for socials
    return (
      <Body>
        <div className="w-full md:h-full flex flex-col items-center md:flex-row md:justify-center p-2 md:p-4">
          <div className="w-full md:h-full p-2 md:w-1/2"> 
            <span className="text-lg"> Find Me Here: </span>
            <Chunk href="https://github.com/kodename-kian" label="GitHub" />
            <Chunk href="https://www.linkedin.com/in/kian-colin-chua/" label="LinkedIn" />
            <Chunk href="https://www.instagram.com/kian.colin/" label="Instagram" />
          </div>
          <div className="w-full md:h-full md:w-1/2 m-2 border-dotted border border-black p-2 overflow-y-auto">
            <div className="w-full">
              <span className="text-lg"> Or, Send A Message 💌 </span>
              <ContactForm />
            </div>
          </div>
        </div>
      </Body>
    );
  }
  