import React from "react";

import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Mail } from "lucide-react";

const SocialIcon = () => {
  return (
    <div className="flex gap-3 mt-5">
      <div className="text-neutral-500 hover:text-orange-500 bg-neutral-900 h-10 w-10 p-2 justify-center cursor-pointer items-center rounded-full">
        <Instagram />
      </div>
      <div className="text-neutral-500 hover:text-orange-500 bg-neutral-900 h-10 w-10 p-2 justify-center cursor-pointer items-center rounded-full">
        <Twitter />
      </div>
      <div className="text-neutral-500 hover:text-orange-500  bg-neutral-900 h-10 w-10 p-2 justify-center cursor-pointer items-center rounded-full">
        <Mail />
      </div>
    </div>
  );
};

export default SocialIcon;
