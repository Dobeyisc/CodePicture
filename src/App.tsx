import { useState } from "react";
import "./App.css";

import { IoMdDownload } from "react-icons/io";

import CodeEditor from "./components/CodeEditor";
import ThemeSelector from "./components/ThemeSelector";
import { themes, backgrounds, languages } from "./utils/utilities";
import LanguageSelector from "./components/LanguageSelector";
import BackgroundSelector from "./components/BackgroundSelector";
import PaddingSelector from "./components/PaddingSelector";

function App() {
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[3]);

  return (
    <main>
      <header
        className="flex gap-6 w-[870px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
      z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          seActiveIcon={setActiveIcon}
        />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />
        <div className="self-center ml-auto">
          <button className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
          font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
          duration-300">
            <IoMdDownload />  Export png
          </button>
        </div>
      </header>
      <div className="mt-40 flex items-center justify-center">
        <CodeEditor
          language={language}
          theme={theme}
          background={background}
          icon={activeIcon}
          currentPadding={currentPadding}
        />
      </div>
    </main>
  );
}

export default App;
