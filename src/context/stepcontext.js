import React,{createContext,useState,useContext} from 'react'

const StepContext=createContext()

export const StepContextProvider = ({children}) => {
    const [step,setStep]=useState(1);

  return (
    <StepContext.Provider value={{step,setStep}}>
        {children}
    </StepContext.Provider>
  )
};

export const useStepContext =()=>{
    return useContext(StepContext);
};
