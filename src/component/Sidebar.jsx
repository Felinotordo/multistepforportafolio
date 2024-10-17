import React from "react";
import { useStepContext } from "../context/stepcontext";
import PersonalInfo from "./steps/PersonalInfo";
import OurPlan from "./steps/OurPlan";
import Accessories from "./steps/Accessories";
import Thanks from "./steps/Thanks";
import Final from "./steps/Final";

const Sidebar = ({ children }) => {
  const { step, setStep } = useStepContext();

  const nextStep = () => {
    if (step === 5) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const backStep = () => {
    setStep(step - 1);
  };

  let content;
  switch (step) {
    case 1:
      content = <PersonalInfo />;
      break;
    case 2:
      content = <OurPlan />;
      break;
    case 3:
      content = <Accessories/>;
      break;
    case 4:
      content = <Final/>;
      break;
    case 5:
      content = <Thanks/>;
      break;

    default:
      content = <div>invalid step</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-col relative">
      <div
        style={{
          backgroundImage: `url("/bg-sidebar-mobile.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex space-x-2 justify-center w-full h-[180px] pt-[30px]"
      >
        {[1, 2, 3, 4].map((num) => (
          <span
            key={num}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              step === num || (step === 5 && num === 4)
                ? "bg-[#bbdff7]"
                : "bg-[#483dff] border-[1px] border-white text-white"
            }`}
          >
            {num}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center absolute top-[100px] left-0 right-0 mx-auto">
        <div className="bg-white w-[350px] min-h-[380px] h-auto rounded-[15px] shadow-xl p-6">
          {content}
        </div>
      </div>

      <div className="bg-[#edf4fe] flex-grow"></div>

      <div
        className={`flex ${
          step === 1 || step === 5 ? "justify-end" : "justify-between"
        } w-full bg-white p-4`}
      >
        <button
          onClick={() => {
            backStep();
          }}
          className={`text-[#9b9ba3] ${step === 1 ? "hidden" : ""} ${
            step === 5 ? "hidden" : ""
          }`}
        >
          Go back
        </button>
        <button
          onClick={() => {
            nextStep();
          }}
          className={`w-[100px] h-[40px] ${
            step < 4 ? "bg-[#04285a]" : "bg-[#483eff]"
          } text-white rounded-lg`}
        >
          {step === 4 ? "Confirm" : step === 5 ? "Restart" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
