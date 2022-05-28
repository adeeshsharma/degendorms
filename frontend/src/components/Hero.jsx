import React from "react";
import LottieHead from "./LottieHead";

const Hero = () => {
  return (
    <section className="relative bg-black flex w-screen h-screen max-h-screen items-center justify-center">
      <div className="absolute backdrop-blur-md bg-black/20 z-10 top-0 bottom-0 md:relative flex md:pl-32 flex-col gap-2 items-center justify-center w-fit text-center">
        <h1 className="tracking-tight text-white text-[7rem] md:text-[10rem] font-medium w-fit">
          Degen Dorms
        </h1>
        <a
          href="https://nftgarage.world/fantom/degendorms"
          target="_blank"
          className="text-black bg-primary text-lg md:text-[2vw] font-medium rounded-full px-4 py-2"
          rel="noreferrer"
        >
          Get A Dorm ➡
        </a>

        {/* <a
          href="#"
          className="text-black bg-primary text-lg md:text-[2vw] font-medium rounded-full px-4 py-2"
          rel="noreferrer"
        >
          COMING SOON!
        </a> */}
      </div>
      <div className="w-full">
        <LottieHead />
      </div>
    </section>
  );
};

export default Hero;
