import React from "react";
import Body from "@/components/Body";
import Project from "@/components/Project";

export default function Home() {
    return (
      <Body>
        <div className="overflow-y-auto">
          <span className="text-2xl"> &gt;&gt; 📁 Archive </span>
          <div className="h-full flex flex-col items-left ml-4 mr-4 p-4">
            <span className="w-full text-xl      mb-2 border-b border-black"> Code </span>
            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Leadership </span>
              <Project title="TEDxYouth@SJCS" year="2022" open={true} links={[{platform: "HIGHLIGHTS", url:"https://www.youtube.com/watch?v=cwNiavtLFlw", icon:"pi pi-youtube"},
                                                                              {platform: "ANOTHER ONE", url:"", icon:"pi pi-youtube"}
              ]}>
                [Content]
              </Project>
            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Writing  </span>
              <Project title="IB MATH IA" />
          </div>
        </div>
      </Body>
    );
  }
  