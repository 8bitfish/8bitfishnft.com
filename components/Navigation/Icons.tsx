import React from "react";
import { OpenSea } from "./icons/OpenSea";
import { Discord } from "./icons/Discord";
import { Github } from "./icons/Github";
import { Twitter } from "./icons/Twitter";

export const NavigationIcons = (): JSX.Element => {
  const globalClass =
    "fill-current text-[#9ca3af] transform md:scale-100 scale-75 transition duration-200";
  const icons: Array<{ link: string; icon: JSX.Element }> = [
    {
      link: "https://opensea.io/collection/8bitfishnft",
      icon: (
        <OpenSea key={0} className={`${globalClass} hover:text-[#2181E2]`} />
      ),
    },
    {
      link: "https://discord.gg/dYfUayrJD2",
      icon: (
        <Discord key={1} className={`${globalClass} hover:text-[#6D82CF]`} />
      ),
    },
    {
      link: "https://github.com/8bitfish",
      icon: (
        <Github key={2} className={`${globalClass} hover:text-[#ffffff]`} />
      ),
    },
    {
      link: "https://twitter.com/8bitfish_crypto",
      icon: (
        <Twitter key={3} className={`${globalClass} hover:text-[#1EA1F1]`} />
      ),
    },
  ];
  return (
    <div className="flex flex-row items-center">
      {icons.map((item, i) => (
        <a key={i} href={item.link} className="md:mx-5 mr-3 cursor-pointer">
          {item.icon}
        </a>
      ))}
    </div>
  );
};
