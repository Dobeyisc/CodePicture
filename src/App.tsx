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
    <div id="container" className="relative h-screen p-1 gap-1">
      <aside className="[grid-area:aside] flex-col flex justify-evenly overflow-y-auto rounded-lg bg-zinc-900 text-start px-2 py-2 ">
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          seActiveIcon={setActiveIcon}
        />
        <BackgroundSelector
          background={background}
          currentBackground={background}
          setCurrentBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />
        <div className="self-start">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
          font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
          duration-300"
            
          >
            <IoMdDownload /> Export png
          </button>
        </div>
      </aside>

      <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full flex justify-center items-center">
        <CodeEditor
          language={language}
          theme={theme}
          background={background}
          icon={activeIcon}
          currentPadding={currentPadding}
        />
      </main>
    </div>
  );
}

export default App;
