import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import * as React from "react";

type AppContextType = {
  drawerOpen: boolean;
  isTabletOrMobile: boolean;
  isDarkMode: boolean;
  toggleDrawer: () => void;
};

export const AppContext = React.createContext<AppContextType>({
  drawerOpen: false,
  isTabletOrMobile: false,
  isDarkMode: false,
  toggleDrawer: () => null,
});

export const useAppContext = () => React.useContext(AppContext);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { colorMode } = useColorMode();
  const isDarkMode = React.useMemo(() => colorMode === "dark", [colorMode]);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");

  return (
    <AppContext.Provider
      value={{ drawerOpen, toggleDrawer, isTabletOrMobile, isDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
