import React from "react";
import { useStepContext } from "../../context/stepcontext";

const OurPlan = () => {
  const {isAnnual, setIsAnnual,planSelect, setPlanSelect} = useStepContext()
  const infoPlans = [
    {
      id: 1,
      name: "Arcade",
      monthPrice: 9,
      yearPrice: 90,
      urlSvg: "/icon-arcade.svg",
    },
    {
      id: 2,
      name: "Advanced",
      monthPrice: 12,
      yearPrice: 120,
      urlSvg: "/icon-advanced.svg",
    },
    {
      id: 3,
      name: "Pro",
      monthPrice: 15,
      yearPrice: 150,
      urlSvg: "/icon-pro.svg",
    },
  ];

  const selectPlan = (plan) => {
    setPlanSelect(plan);
  };

  return (
    <div className="flex flex-col justify-start mx-[25]">
      <h1 className="text-[#06264f] text-[25px] font-ubuntu font-bold mt-[5px]">
        Select Your Plan
      </h1>
      <p className="text-[#9b9ba3] text-[15px] font-ubuntu font-medium mt-[5px]">
        You have the option of monthly or yearly billing{" "}
      </p>
      {infoPlans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => selectPlan(plan)}
          className={`w-[300px] min-h-[70px] border-[1px] mt-[10px] rounded-[10px] flex flex-col justify-center items-center ${
            planSelect.name === plan.name
              ? "bg-[#f8f9fe] border-[#534c9a]"
              : "bg-white border-gray-300"
          }`}
        >
          <div
            className={`flex flex-row w-full ${isAnnual ? "mt-[15px]" : ""}`}
          >
            <img
              src={plan.urlSvg}
              alt="plan do not exist"
              className="size-[40px] ml-[10px]"
            />
            <div className="flex flex-col ml-[15px]">
              <h2 className="text-[#06264f] text-[15px] font-ubuntu font-medium">
                {plan.name}
              </h2>
              <p className="text-[#aeafb3] text-[14px] font-ubuntu">
                {isAnnual ? `$${plan.yearPrice}/yr` : `$${plan.monthPrice}/mo`}
              </p>
            </div>
          </div>
          <p
            className={`${
              isAnnual ? "" : "hidden"
            } flex justify-start mb-[5px] w-full ml-[130px] text-[11px] text-[#06264f] font-ubuntu`}
          >
            2 month free
          </p>
        </div>
      ))}

      <div className="flex justify-center items-center mt-[20px]">
        <span
          className={`mr-[15px] ${
            isAnnual ? "text-[#9b9ba3]" : "text-[#0e1d30]"
          } font-ubuntu font-medium`}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
            className="sr-only"
          />
          <div className="w-[35px] h-[18px] bg-[#03295a] rounded-full"></div>
          <div
            className={`absolute size-[12px] bg-white rounded-full transition-transform duration-300 ${
              isAnnual ? "transform translate-x-6" : ""
            }`}
          ></div>
        </label>
        <span
          className={`ml-[15px] ${
            isAnnual ? "text-[#0e1d30]" : "text-[#9b9ba3]"
          } font-ubuntu font-medium`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default OurPlan;
