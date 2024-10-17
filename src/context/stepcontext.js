import React,{createContext,useState,useContext} from 'react'

const StepContext=createContext()

export const StepContextProvider = ({children}) => {
    const [step,setStep]=useState(1);
    const [isAnnual, setIsAnnual] = useState(false);

  return (
    <StepContext.Provider value={{step,setStep,isAnnual,setIsAnnual}}>
        {children}
    </StepContext.Provider>
  )
};

export const useStepContext =()=>{
    return useContext(StepContext);
};
