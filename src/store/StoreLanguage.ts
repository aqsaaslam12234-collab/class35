import { create } from "zustand";

interface StoreState{
    Language: string;
    setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<StoreState>(
    (set) => ({
        Language: "en",
        setLanguage: (Language: string) => set({ Language}),
    })
);