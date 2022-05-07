import React from "react";
import BgVideo from "assets/videos/colors.mp4";
import hypeNerds from "data/hype-nerds.json";

const Nerds = () => {
  return (
    <section
      className="relative py-10 grid place-items-center bg-primary overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #aa7b00, hsla(0, 0%, 100%, 0) 13%)",
      }}
    >
      <video
        className="hidden md:inline-block mix-blend-hue absolute top-0 left-0 w-screen object-cover"
        src={BgVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="flex flex-col items-start w-fit md:pl-44px max-w-[940px]">
        <h2 className="text-[3.5rem] font-medium text-black md:text-[#707070] md:mix-blend-color-burn">
          Hype Nerds
        </h2>
        <ul className="flex flex-col md:flex-row gap-10 md:gap-20 pt-10">
          {hypeNerds?.map((hype, index) => (
            <li key={index} className="flex flex-col md:flex-row  md:gap-5 items-start w-full isolate">
              <img
                className="col-span-1 rounded-[20px] w-[15vh] h-[15vh]  md:w-[7vh] md:h-[7vh] object-cover"
                src={hype?.src}
                alt=""
              />
              <h3 className="flex-1 min-w-[160px] text-[2rem] font-medium text-black mt-6">
                {hype?.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Nerds;
