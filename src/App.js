import React from "react";

import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";

import Navbar from "./layout/Navbar";
import Form from "./layout/Form";
import PageContent from "./layout/PageContent";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <PageContent>
          <LangProvider>
            <Navbar />
            <Form />
          </LangProvider>
        </PageContent>
      </ThemeProvider>
    </>
  );
};

export default App;
