import React, { useState } from "react";
import { VscCircleOutline } from "react-icons/vsc";
import { RiRadioButtonLine } from "react-icons/ri";

export const Account = ({
  connected,
  account,
}: {
  connected: boolean;
  account: string | null;
}): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`${
        connected ? "bg-green-500/10" : "bg-red-500/10"
      } rounded-full cursor-pointer select-none`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative flex md:flex-row md:items-center md:pl-2 md:pr-3 md:py-0">
        {connected && (
          <RiRadioButtonLine className="relative md:top-[1px] md:mr-1.5 inline-block md:text-xs text-lg text-green-500" />
        )}
        {!connected && (
          <VscCircleOutline className="relative md:top-[1px] md:mr-1.5 inline-block md:text-md text-lg text-red-500" />
        )}
        <span
          className={`${
            connected ? "text-green-500" : "text-red-500"
          } md:inline hidden`}
        >
          {connected
            ? account !== null
              ? expanded
                ? account
                : `${account.substring(0, 6)}...`
              : "connected"
            : "disconnected"}
        </span>
      </div>
    </div>
  );
};
