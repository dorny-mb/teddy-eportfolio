import React from "react";

import { useAppContext } from "../../../context/AppContext";
import { Laptop, Mobile } from "./components";

type MenuProps = {};

const Menu: React.FC<MenuProps> = ({}) => {
  const { isTabletOrMobile } = useAppContext();
  return isTabletOrMobile ? <Mobile /> : <Laptop />;
};

export default Menu;
