import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {                  
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}   
export const useDropDownMenuStore = create<StoreState>()(
    persist(
        (set) => ({
            isOpen: false,
            toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
            closeMenu: () => set({ isOpen: false }),        
        }),
        {
            name: "dropdown-menu-storage",
        }
    )
);
