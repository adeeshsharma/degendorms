import React from "react";
import Logo from "assets/icons/dorms.png";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as DiscordIcon } from "assets/icons/discord.svg";

const Footer = () => {
  return (
    <footer className="p-10 md:p-20 bg-[#101111] max-w-[100vw] overflow-hidden">
      <div className="pb-10 md:pb-20 flex flex-col gap-10 lg:flex-row justify-between items-center text-[#c3c3c3]">
        <a href="/">
          <img className="w-32" src={Logo} alt="" />
        </a>
        <h4 className="font-medium">COMING SOON!</h4>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/DegenDorms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a
            href="https://discord.gg/H65AVzQrFF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
      <span className="block bg-[#222] h-[1.5px] -mx-[5rem]"></span>
      <ul className="flex flex-col md:flex-row gap-8 text-center items-center justify-center mt-5">
        <li className="hidden md:inline text-center text-sm text-[#c3c3c3]">
          © 2021 DegenDorms. All rights reserved.
        </li>
        {/* {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
          (item, index) => (
            <li key={index} className="text-center text-[#c3c3c3] ">
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-center text-[#c3c3c3] text-sm"
              >
                {item}
              </a>
            </li>
          )
        )} */}
        <li className="md:hidden text-center text-sm text-[#c3c3c3]">
          © 2021 DegenDorms. All rights reserved.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
