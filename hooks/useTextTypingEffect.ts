import React from "react";
import { TypeWriter } from "../utils";

const useTextTypingEffect = (elId: string) => {
  React.useEffect(() => {
    const txtElement = document.querySelector(elId) as any;
    const words = JSON.parse(txtElement?.dataset?.word);
    const wait = txtElement?.dataset?.wait;
    new TypeWriter(txtElement, words, wait);
  }, [elId]);
};

export default useTextTypingEffect;
