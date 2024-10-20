import React, { createContext, useState, useContext } from "react";

const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isAnnual, setIsAnnual] = useState(false);
  const [planSelect, setPlanSelect] = useState({});
  const [selectedAddons, setSelectedAddons] = useState([]);

  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
        isAnnual,
        setIsAnnual,
        planSelect,
        setPlanSelect,
        selectedAddons,
        setSelectedAddons,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  return useContext(StepContext);
};
