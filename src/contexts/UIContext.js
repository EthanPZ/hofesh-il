import { createContext, useContext, useEffect, useState } from "react";
import mouseEffect from "../functions/mouseEffect";
import JSConfetti from "js-confetti";

const UIContext = createContext();

function UIProvider({ children }) {
  const [isOpened, setIsOpened] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const jsConfetti = new JSConfetti();

  function handleToggleOpen() {
    setIsOpened((open) => !open);
  }

  useEffect(function () {
    isOpened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  useEffect(function () {
    if (window.innerWidth <= 1200) return;
    window.addEventListener("mousemove", mouseEffect);
  }, []);

  return (
    <UIContext.Provider
      value={{
        handleToggleOpen,
        isOpened,
        jsConfetti,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

function useUI() {
  return useContext(UIContext);
}

export { UIProvider, useUI };
