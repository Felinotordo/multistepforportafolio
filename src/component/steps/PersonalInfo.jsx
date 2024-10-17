import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col justify-start mx-[25]">
      <h1 className="text-[#06264f] text-[25px] font-ubuntu font-bold mt-[5px]">
        Personal Info
      </h1>
      <p className="text-[#9b9ba3] text-[15px] font-ubuntu font-medium mt-[5px]">
        Please provide your name, email address and you telephone number{" "}
      </p>
      <form action="" className="flex flex-col mt-[30px]">
        <label
          className="text-[14px] text-[#222b34] font-ubuntu font-medium"
          for="GET-name"
        >
          Name
        </label>
        <input
          className="mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px]"
          id="GET-name"
          type="text"
          name="name"
          placeholder="  e.g Stephen King"
          required
        />
        <label
          className="text-[14px] text-[#222b34] font-ubuntu font-medium"
          for="GET-email"
        >
          Email Address
        </label>
        <input
          className="mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px]"
          id="GET-email"
          type="email"
          pattern=".+@(gmail|hotmail|yahoo|lorem|example)\.com"
          placeholder="  e.g stephenking@lorem.com"
          size="30"
          required
        />

        <label
          className="text-[14px] text-[#222b34] font-ubuntu font-medium"
          for="GET-phone"
        >
          Phone Number
        </label>
        <input
          className="mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px]"
          id="GET-phone"
          type="tel"
          name="phone"
          pattern="\+1 [0-9]{3} [0-9]{3} [0-9]{3}"
          placeholder="  e.g +1 234 567 890"
          required
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
