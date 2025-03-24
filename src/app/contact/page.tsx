import React from "react";
import Body from "@/components/Body";
import Chunk from "@/components/Chunk";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    return (
      <Body>
        <div className="w-full md:h-full flex flex-col items-start md:flex-row p-2 md:p-4">
          <div className="w-full md:h-full p-2 md:w-1/2"> 
            <span className="text-lg"> Find Me Here: </span>
            <Chunk href="https://github.com/kodename-kian" label="GitHub" icon="pi pi-github" />
            <Chunk href="https://www.linkedin.com/in/kian-colin-chua/" label="LinkedIn" icon="pi pi-linkedin" />
            <Chunk href="https://www.instagram.com/kian.colin/" label="Instagram" icon="pi pi-instagram" />
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
  