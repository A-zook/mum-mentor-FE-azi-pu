import { useEffect, useState } from "react";

export function useNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    function onScrollPage() {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", onScrollPage);

    return () => window.addEventListener("scroll", onScrollPage);
  }, []);

  return { toggleMenu, isOpen, isFixed, setIsFixed };
}
