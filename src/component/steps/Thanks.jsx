import React from "react";

const Thanks = () => {
  let content =
    "Thanks for confirming your subcription! We hope you have fun using our platform. If you ever need support please feel free to email us at support@loregaming.com";
  return (
    <div className="flex justify-center items-center flex-col">
      <img src="/icon-thank-you.svg" alt="not danke" className="size-[60px] mt-[50px] mb-[10px]" />
      <h1 className="text-[#06264f] text-[25px] font-ubuntu font-bold mt-[5px]">
        Thank you!
      </h1>
      <p className="text-[#9b9ba3] text-center text-[15px] text-pretty font-ubuntu mt-[5px]">
        {content}{" "}
      </p>
    </div>
  );
};

export default Thanks;
