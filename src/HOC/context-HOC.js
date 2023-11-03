import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  let [myState, setMyState] = useState("my stateful value");

  let valueObj = { myState, setMyState };

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}

export default AppProvider;
