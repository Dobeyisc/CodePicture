"use client";
import { useState } from "react";
import { themes } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-1 text-sm font-medium pointer-events-none">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
          {theme} 
        </div>
        {showDropdown && (
          <div className="dropdown-menu relative top-[94px] w-[100px]">
            {themes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                  className=" capitalize text-center items-center flex justify-center hover:text-slate-50 transition-all duration-300 ease-in-out"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default ThemeSelector;