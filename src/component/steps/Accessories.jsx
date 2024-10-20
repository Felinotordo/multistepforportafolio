import React from "react";
import { useStepContext } from "../../context/stepcontext";

const Accessories = () => {
  const { isAnnual, selectedAddons, setSelectedAddons } = useStepContext();
  const accessories = [
    {
      key: 1,
      name: "Online Service",
      description: "Acces to multiplayer gaming",
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      key: 2,
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthPrice: 2,
      yearPrice: 20,
    },
    {
      key: 3,
      name: "Costumizable Profile ",
      description: "Custom theme on your profile",
      monthPrice: 2,
      yearPrice: 20,
    },
  ];

  const handleSelectAddon = (add) => {
    const isAlreadySelected = selectedAddons.some(
      (addon) => addon.key === add.key
    );

    if (isAlreadySelected) {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.key !== add.key)
      );
    } else {
      setSelectedAddons([...selectedAddons, add]);
    }
  };
  return (
    <div className="flex flex-col justify-start mx-[25]">
      <h1 className="text-[#06264f] text-[25px] font-ubuntu font-bold mt-[5px]">
        Pick adds-on
      </h1>
      <p className="text-[#9b9ba3] text-[15px] font-ubuntu font-medium mt-[5px]">
        Adds-on help enhances you gaming experience.{" "}
      </p>
      {accessories.map((addon) => (
        <div
          key={addon.key}
          className={`w-[300px] min-h-[70px] border-[1px] mt-[10px] rounded-[10px] flex justify-between items-center p-4 cursor-pointer ${
            selectedAddons.some((selected) => selected.key === addon.key)
              ? "bg-[#f8f9fe] border-[#534c9a]" // Fondo cuando está seleccionado
              : "border-gray-300" // Fondo cuando no está seleccionado
          }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`addon-${addon.key}`}
              name={addon.name}
              checked={selectedAddons.some(
                (selected) => selected.key === addon.key
              )} // Verifica si está seleccionado
              onChange={() => handleSelectAddon(addon)} // Maneja el cambio de selección
              className="mr-3 size-[20px] rounded-[5px]"
            />
            <div className="flex flex-col">
              <span
                htmlFor={`addon-${addon.key}`}
                className="text-[#06264f] text-[14px] font-ubuntu font-bold"
              >
                {addon.name}
              </span>
              <span
                htmlFor={`addon-${addon.key}`}
                className="text-[#9b9ba3] font-ubuntu font-medium text-[11px]"
              >
                {addon.description}
              </span>
            </div>
          </div>
          <span className="text-[#483eff]">
            {isAnnual ? `+$${addon.yearPrice}/yr` : `+$${addon.monthPrice}/mo`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Accessories;
