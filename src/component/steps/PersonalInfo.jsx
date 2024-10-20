import React from "react";
import { useStepContext } from "../../context/stepcontext";

const PersonalInfo = ({errorName,errorEmail,errorPhone}) => {
const {formData, setFormData} = useStepContext()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

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
          className="text-[14px] text-[#222b34] font-ubuntu font-medium flex justify-between mb-[2px]"
          htmlFor="GET-name"
        >
          Name
          {errorName?<p className="text-[14px] text-red-500 font-ubuntu font-bold">This field is required</p>:""}
        </label>
        <input
          className={`mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px] ${errorName?"border-red-500":"border-gray-300 "} px-2`}
          id="GET-name"
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={formData.name}
          placeholder="  e.g Stephen King"
          required
        />
        <label
          className="text-[14px] text-[#222b34] font-ubuntu font-medium flex justify-between mb-[2px]"
          htmlFor="GET-email"
        >
          Email Address
          {errorEmail?<p className="text-[14px] text-red-500 font-ubuntu font-bold">This field is required</p>:""}
        </label>
        <input
          className={`mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px] ${errorEmail?"border-red-400":"border-gray-300 "} px-2`}
          id="GET-email"
          name="email"
          type="email"
          pattern=".+@(gmail|hotmail|yahoo|lorem|example)\.com"
          placeholder="  e.g stephenking@lorem.com"
          onChange={handleChange}
          defaultValue={formData.email}
          size="30"
          required
        />

        <label
          className="text-[14px] text-[#222b34] font-ubuntu font-medium flex justify-between mb-[2px]"
          htmlFor="GET-phone"
        >
          Phone Number
          {errorPhone?<p className="text-[14px] text-red-500 font-ubuntu font-bold">This field is required</p>:""}
        </label>
        <input
          className={`mb-[18px] w-full h-[40px] border-[1px] border-gray-300 rounded-[5px] ${errorPhone?"border-red-400":"border-gray-300 "} px-2`}
          id="GET-phone"
          type="tel"
          name="phone"
          onChange={handleChange}
          defaultValue={formData.phone}
          pattern="\+1 [0-9]{3} [0-9]{3} [0-9]{3}"
          placeholder="  e.g +1 234 567 890"
          required
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
