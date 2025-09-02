import React, { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();
const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white");

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider> 
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
