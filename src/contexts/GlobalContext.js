import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isScreenMobile, setIsScreenMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setIsScreenMobile(width < 620 ? true : false);
  }, [width]);

  return (
    <GlobalContext.Provider value={{ width, isScreenMobile }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
