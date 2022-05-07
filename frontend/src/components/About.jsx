import React, { useState } from "react";
import images from "data/images.json";

function About() {
  const [bg, setBg] = useState(1);

  return (
    <section className="relative">
      {images?.map((image) => (
        <img
          key={image.id}
          className={`absolute transition-opacity duration-300 ease-in top-0 left-0 h-full w-full object-cover ${
            bg === image?.id ? "opacity-100" : "opacity-0"
          }`}
          src={image?.background}
          alt="Degen Dorms"
        />
      ))}
      <span
        className={`absolute top-0 left-0 h-full w-full ${
          navigator.userAgent.indexOf("Firefox") !== -1
            ? "bg-black/50"
            : "bg-black/30"
        } `}
      ></span>

      <div className="relative z-10 flex flex-col items-center justify-center backdrop-blur-sm text-center">
        <h1 className="capitalize text-5xl h-[30vh] mt-24 mb-8">
          This is what <br />
          <strong className="font-medium normal-case text-[5rem] text-primary">
            2-in-1
          </strong>
          <br />
          looks like
        </h1>
        <ul className="flex gap-5 h-[60vh] items-center">
          {images?.map((image, index) => (
            <li key={index}>
              <img
                src={image?.src}
                onMouseEnter={() => setBg(image?.id)}
                className="rounded-[20px] h-[20vh] w-[20vh] min-h-[10%] min-w-[10%] object-cover transition-all duration-200 ease-in-out hover:scale-[1.2]"
                alt="Degen Dorms"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
