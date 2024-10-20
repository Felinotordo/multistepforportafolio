import React, { useState } from "react";
import { useStepContext } from "../context/stepcontext";
import PersonalInfo from "./steps/PersonalInfo";
import OurPlan from "./steps/OurPlan";
import Accessories from "./steps/Accessories";
import Thanks from "./steps/Thanks";
import Final from "./steps/Final";

const Sidebar = ({ children }) => {
  const { step, setStep, formData, setFormData } = useStepContext();
  const [formValidation, setFormValidation] = useState(true);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const validation = () => {
    setFormValidation(
      formData.name === "" || formData.email === "" || formData.phone === ""
    );
  };

  React.useEffect(() => {
    validation();
  });

  const nextStep = () => {
    setErrors({
      name: formData.name === "",
      email: formData.email === "",
      phone: formData.phone === "",
    });
    if (step === 5) {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } else if (step === 1 && !formValidation) {
      setStep(step + 1);
      setFormValidation(true);
    } else if (step !== 1) {
      setStep(step + 1);
    }
  };

  const backStep = () => {
    setStep(step - 1);
  };

  let content;
  switch (step) {
    case 1:
      content = (
        <PersonalInfo
          errorName={errors.name}
          errorEmail={errors.email}
          errorPhone={errors.phone}
        />
      );
      break;
    case 2:
      content = <OurPlan />;
      break;
    case 3:
      content = <Accessories />;
      break;
    case 4:
      content = <Final />;
      break;
    case 5:
      content = <Thanks />;
      break;

    default:
      content = <div>invalid step</div>;
  }

  const steps = [
    { num: 1, title: "YOUR INFO" },
    { num: 2, title: "SELECT PLAN" },
    { num: 3, title: "ADD-ONS" },
    { num: 4, title: "SUMMARY" },
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#eef5ff]">
      <div className="w-screen h-screen flex flex-col relative sm:flex-row sm:w-[800px] sm:h-[600px] sm:bg-white sm:rounded-[20px]">
        <div
          className="flex space-x-2 justify-center w-full h-[180px] pt-[30px] bg-mobile-sidebar bg-no-repeat bg-center bg-cover sm:bg-desktop-sidebar sm:w-[350px] sm:bg-cover sm:h-[500px] sm:rounded-[10px] sm:m-[16px] sm:flex-col sm:justify-start
          sm:space-x-0 sm:space-y-[25px] sm:items-start"
        >
          {steps.map(({ num, title }) => (
            <div
              key={num}
              className="flex sm:items-center sm:justify-between sm:text-white sm:font-ubuntu"
            >
              <span
                className={`size-8 sm:size-7 flex items-center justify-center rounded-full sm:ml-[32px] sm:mr-[16px] text-white ${
                  step === num || (step === 5 && num === 4)
                    ? "bg-[#bbdff7] text-black"
                    : "bg-[#483dff] border-[1px] border-white text-white"
                }`}
              >
                {num}
              </span>
              <div className="hidden sm:block sm:flex-col sm:items-center">
                <p className="hidden font-ubuntu sm:block sm:text-[#a7a6fe] sm:text-[10px]">
                  STEP {num}
                </p>
                <p className="hidden font-ubuntu sm:block sm:text-[12px]">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col h-screen sm:h-0 sm:items-center sm:w-full sm:m-[16px]">
          <div className="flex flex-col items-center justify-center absolute top-[100px] left-0 right-0 mx-auto sm:static">
            <div className="bg-white w-[350px] min-h-[380px] h-auto rounded-[15px] sm:rounded-none sm:shadow-none shadow-xl p-6">
              {content}
            </div>
          </div>
          <div className="bg-[#edf4fe] flex-grow"></div>{" "}
          {/* Esto permite que el espacio se llene */}
          <div
            className={`flex ${
              step === 1 || step === 5 ? "justify-end" : "justify-between"
            } w-full bg-white p-4`}
          >
            <button
              onClick={() => {
                backStep();
              }}
              className={`text-[#9e9ea5] font-ubuntu font-medium w-[100px] h-[50px] ${
                step === 1 ? "hidden" : ""
              } ${step === 5 ? "hidden" : ""}`}
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
      </div>
    </div>
  );
};

export default Sidebar;
