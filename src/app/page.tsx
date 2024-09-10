import Body from "@/components/Body";
import Image from "next/image";

export default function Home() {
  return (
    <Body>
      <div className="max-h-full overflow-y-auto p-4 pb-0">
        <div className="flex flex-col md:flex-row pb-4">
          <Image src="/profile.JPG"
                width={330} height={330} alt="Kian" 
                className="border-4 border-gray-400 rounded-tr-lg">
          </Image>

          <div className="flex flex-col mt-6 md:pl-4">
            <span className="text-5xl"> Hi! I&apos;m Kian. </span>
            <div className="font-mono mt-4 text-md lg:text-lg "> 
              I&apos;m a software developer and student at the University of British Columbia,
              currently pursuing a Bachelor of Science with a Combined Major in 
              <span className="text-teal-600"> Computer Science </span> and 
              <span className="text-teal-600"> Mathematics</span>.
            </div>
            <div className="hidden lg:block font-mono text-lg mt-6">
              A space for all my projects, achievements, and more; follow along my journey through this personal 
              <span className="text-teal-600"> portfolio </span> website!
            </div>
          </div>
        </div>

        <div className="lg:hidden font-mono text-md mt-2 mb-6">
          A space for all my projects, achievements, and more; follow along my journey through this personal 
          <span className="text-teal-600"> portfolio </span> website!
        </div>

        <div className="w-full font-mono text-md lg:mt-2 lg:text-lg">
          <span className="pr-2 pi pi-exclamation-circle"></span> 
          Ready to rise up to my next challenge & eager to contribute to a project
          I can be proud of, I&apos;m currenty seeking a
          <span className="text-teal-600"> Co-Op Internship </span>
          for Jan 2025!
        </div>

        <div className="flex justify-center items-center pt-10 text-xs">
          <Image src="/dino.png" width="75" height="50" alt="offline dinosaur">
          </Image>
          Kian Chua &copy; &nbsp; <span className="text-teal-600"> 2024 </span>
          <Image src="/dino-reverse.png" width="75" height="50" alt="offline dinosaur">
          </Image>
        </div>
      </div>
    </Body>
  );
}
