import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = (props) => {
  const [lang, setLang] = useState("english");

  const changeLang = (e) => setLang(e.target.value);
  return (
    <div>
      <LangContext.Provider value={{ lang, changeLang }}>
        {props.children}
      </LangContext.Provider>
    </div>
  );
};
