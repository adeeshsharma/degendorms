import React from "react";
import FTMLogo from "assets/icons/ftm.png";
import MetamaskLogo from "assets/icons/metamask.png";
import DormsLogo from "assets/icons/dorms.png";
import WhiteImg from "assets/white.svg";

const Acquire = () => {
  const steps = [
    {
      step: 1,
      title: "Acquire FTM",
      img: FTMLogo,
      desc: "We're on the Fantom Network, so you'l need some FTM",
    },
    {
      step: 2,
      title: "Connect Metamask",
      img: MetamaskLogo,
      desc: "Connect Metamaak to Link your wallet",
    },
    {
      step: 3,
      title: "Start Minting",
      img: DormsLogo,
      desc: "Mint Degen Dorms NFTs",
    },
  ];

  return (
    <section className="grid md:grid-cols-9 gap-20 py-16 md:py-28 px-12 justify-center bg-[#101111]">
      <h1 className="text-3xl md:text-5xl text-center md:col-span-4 font-medium">
        How do you acquire a Dorm?
      </h1>
      <ul className="relative md:col-span-5">
        <div
          className={`hidden md:block transition-all duration-200 ease-in absolute z-10 top-0 bottom-0 w-px max-h-[450px]  left-[1.5rem]`}
          style={{
            backgroundImage: `url(${WhiteImg})`,
            backgroundSize: "100vw 40vh",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div
          className={`md:hidden transition-all duration-200 ease-in absolute z-10 top-0 bottom-0 w-px max-h-[500px]  left-[1.5rem]`}
          style={{
            backgroundImage: `url(${WhiteImg})`,
            backgroundSize: "200vh 100vw",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        {steps?.map((step, index) => (
          <li key={step?.step} className="relative">
            <div
              className={`absolute w-px bg-gray-500 left-[1.5rem] ${
                index === steps?.length - 1 ? "hidden" : "top-0 bottom-0"
              }`}
            ></div>
            <div
              className={`flex gap-10 sm:gap-16  ${
                index === steps?.length - 1
                  ? "py-0"
                  : index === 0
                  ? "py-0"
                  : "py-16"
              }`}
            >
              <div className="relative z-10 flex items-center justify-center rounded-full p-4 border bg-black border-white h-[3rem] min-w-[3rem]">
                {step?.step}
              </div>
              <div className="grid gap-4">
                <img
                  className="rounded-[40px] h-[3rem] w-[3rem] object-contain"
                  src={step?.img}
                  alt=""
                />
                <div className="grid gap-3">
                  <h2 className="text-2xl font-medium">{step?.title}</h2>
                  <p className="font-normal text-gray-300">{step?.desc}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Acquire;
