"use client";
import { backgrounds } from "../utils/utilities";

interface BackgroundSelectorProps {
  background: string;
  currentBackground: string;
  setCurrentBackground: (background: string) => void;
}

function BackgroundSelector({
  currentBackground,
  setCurrentBackground,
}: BackgroundSelectorProps) {
  const handleBackgroundChange = (newBackground: string) => {
    setCurrentBackground(newBackground);
  };

  return (
    <div className="bg-selector relative min-h-28">
      <p className="pb-2 text-sm font-medium">Theme Selector</p>
      <hr className="py-1"/>
      <div className="grid grid-cols-6 gap-4 ">
        {
          backgrounds.map((bg, i) => {
            return (  
              <button
              key={i}
              onClick={() => handleBackgroundChange(bg)}
              className={`size-6 rounded-full scale-100 hover:scale-110 
                ${
                  currentBackground === bg &&
                  "bg-[#3C3C3C] rounded-md size-7 border"
                } ease-linear transition-all duration-300
              `}
              style={{ background: bg }}
              >
              </button>
            )
          })
        }
      </div>
    </div>
  );
}

export default BackgroundSelector;
