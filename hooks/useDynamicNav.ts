import React from "react";

const useDynamicNav = () => {
  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(100);
  const [fixed, setFixed] = React.useState(false);
  const controlNavbar = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 40) {
        setFixed(true);
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }
      } else setFixed(false);
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, setLastScrollY]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return { fixed, show };
};

export default useDynamicNav;
