import React, { useMemo } from "react";
import { CgSpinner } from "react-icons/cg";
import { BiErrorAlt } from "react-icons/bi";
// import { getPrice } from "../../../functions/client/utils";
export const ItemContainer = ({
  children,
  totalSupply,
  loading,
  connected,
  error,
  connect,
}: {
  children: React.ReactChild;
  totalSupply: number;
  loading: boolean;
  connected: boolean;
  error: Error | null;
  connect: () => Promise<void>;
}): JSX.Element => {
  return (
    <div className="relative flex flex-col md:items-center items-start">
      <p className="hidden md:inline text-[10px] text-[#ffffff9c] font-semibold md:mb-0 mb-2">
        {totalSupply} out of 8000 minted @ 0.01 ETH each
      </p>
      <div className="md:px-3 md:py-2 rounded-xl md:w-[41.5rem] w-[80vw]">
        {children}
      </div>

      <div className="flex flex-col items-center md:w-full w-[80vw]">
        <button
          disabled={totalSupply === 8000 ? true : loading ? true : false}
          className={`transform ${
            totalSupply === 8000
              ? "cursor-not-allowed text-white/60 bg-white/10 hover:text-red-500/90 hover:bg-red-500/20"
              : loading
              ? "cursor-not-allowed text-white/60 bg-white/10"
              : `cursor-pointer ${
                  connected
                    ? "text-[#69FF97] bg-[#69FF97] md:hover:text-[#69FF97] md:hover:bg-[#69FF97] md:hover:scale-105 active:scale-100"
                    : "text-yellow-500 bg-yellow-500 md:hover:text-yellow-500 md:hover:bg-yellow-500 md:hover:scale-105 active:scale-100"
                } `
          } md:mt-2 mt-2 py-1 md:px-9 md:w-auto w-full rounded-lg font-semibold uppercase md:text-sm text-xs bg-opacity-10 md:bg-opacity-100 md:hover:bg-opacity-10 transition duration-200 md:text-white/60 md:bg-white/10`}
          onClick={
            connected
              ? () =>
                  (window.location.href =
                    "https://opensea.io/collection/8bitfishnft")
              : connect
          }
          // onClick={
          //   totalSupply === 8000
          //     ? () => alert("Maximum supply met.")
          //     : connected
          //     ? mint
          //     : connect
          // }
        >
          {loading ? (
            <CgSpinner className="animate-spin md:h-5 md:w-5 h-4 w-4 md:mx-1.5 mx-auto" />
          ) : (
            <>{connected ? "Purchase on opensea" : "Connect with metamask"}</>
          )}
        </button>

        {!!error ? (
          <div className="relative px-4 py-1 mt-2 bg-red-400/10 rounded-lg md:w-auto w-full">
            <p className="text-red-400 text-center text-sm">
              <BiErrorAlt className="relative inline mr-1 bottom-[1px]" />
              Error: {error.message}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
