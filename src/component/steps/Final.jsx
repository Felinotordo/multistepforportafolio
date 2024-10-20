import React from "react";
import { useStepContext } from "../../context/stepcontext";

const Final = () => {
  const { planSelect, selectedAddons, isAnnual, setStep } = useStepContext();
  const [total, setTotal] = React.useState(0);

  const change = () => {
    setStep(2);
  };

  React.useEffect(() => {
    let total = 0;
    if (isAnnual) {
      const addPrices = selectedAddons.map((plan) => plan.yearPrice);
      const sumaAdds = addPrices.reduce(
        (anterior, actual) => anterior + actual,
        0
      );
      total = planSelect.yearPrice + sumaAdds;
    } else {
      const addPrices = selectedAddons.map((plan) => plan.monthPrice);
      const sumaAdds = addPrices.reduce(
        (anterior, actual) => anterior + actual,
        0
      );
      total = planSelect.monthPrice + sumaAdds;
    }
    setTotal(total);
  }, [planSelect, selectedAddons, isAnnual]);
  return (
    <div>
      <h1 className="text-[#06264f] text-[25px] font-ubuntu font-bold mt-[5px]">
        Finishing Up
      </h1>
      <p className="text-[#9b9ba3] text-[15px] font-ubuntu font-medium mt-[5px]">
        Double Check everythings looks OK before confirming{" "}
      </p>
      <div className="flex justify-between flex-col bg-[#f8f9fe] shadow-sm mb-[20px]">
        <div className="flex justify-between flex-row items-center mx-[15px] mt-[20px] mb-[12px] pb-[10px] border-b-[1px] border-[#e5e6eb]">
          <div className="flex flex-col justify-center">
            <p className="text-[14px] text-[#254263] font-ubuntu font-bold">
              {planSelect.name}({isAnnual ? "Yearly" : "Monthly"})
            </p>
            <p
              onClick={() => change()}
              className="text-[#a4a5aa] underline cursor-pointer font-ubuntu font-medium decoration-[2px]"
            >
              Change
            </p>
          </div>
          
          <span className="text-[#254263] font-ubuntu font-medium">{isAnnual
            ? "$"+planSelect.yearPrice + "/yr"
            : "$"+planSelect.monthPrice + "/mo"}</span>
        </div>
        <div className="mx-[15px] pb-[10px] space-y-[10px]">
          {selectedAddons.map(
            ({ key, name, monthPrice, yearPrice, description }) => (
              <div key={key} className="flex justify-between">
                <p className="text-[#a4a5aa] font-ubuntu">{name}</p>
                <span className="text-[#3a4f62] font-ubuntu font-medium">
                  +${isAnnual ? yearPrice + "/yr" : monthPrice + "/mo"}
                </span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-between bg-transparent mx-[15px]">
        <p className="text-[#a4a5aa] font-ubuntu">Total ({isAnnual ? "per year" : "per month"})</p>
        <span className="text-[#4337b7] font-ubuntu font-medium">${isAnnual ? total + "/yr" : total + "/mo"}</span>
      </div>
    </div>
  );
};

export default Final;
