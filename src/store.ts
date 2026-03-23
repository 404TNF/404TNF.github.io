import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { Language } from "./@types/language";

const detectBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
};

type Store = {
  language: Language;

  setLanguage: (language: Language) => void;
}

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        language: detectBrowserLanguage(),

        setLanguage: (language) => set({ language }),
      }),
      {
        name: "language",
      }
    )
  )
);

export default useStore;