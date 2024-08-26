import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full p-2  
    h-96 grid grid-cols-2 "
    >
      {/* <h1 className="col-span-1">Professional Software Engineering Team</h1> */}
      <Image
        className="col-span-2 w-1/2"
        src={"/assets02.png"}
        alt="Hero Image"
        width={100}
        height={400}
        quality={100}
        priority
      />
    </div>
  );
};

export default Hero;
