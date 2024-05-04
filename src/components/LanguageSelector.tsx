"use client";
import { useState } from "react";
import { languages } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

function LanguageSelector({
  language,
  setLanguage,
  seActiveIcon,
}: LanguageSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={toggleDropdown}>
        <p className="py-1 text-sm font-medium">Language</p>
        <div className="dropdown-title capitalize hover:text-slate-50 transition-all duration-300 ease-in-out">
          {language}

        </div>

        {showDropdown && (
          <div className="dropdown-menu w-[100px] flex-col  items-center justify-center top-[94px]">
            {languages.map((lang, i) => {
              return (
                <div key={i}>
                  <button
                    className="dropdown-item text-center flex justify-center items-center hover:text-slate-50 transition-all duration-300 ease-in-out"
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    {lang.name}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default LanguageSelector;