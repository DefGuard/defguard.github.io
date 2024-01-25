import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useFeaturesStore = create<Store>()(
  persist(
    (set, get) => ({
      activeFeatures: {},
      setOpen: (id, ctx) => {
        const current = get().activeFeatures;
        current[ctx] = id;
        set({ activeFeatures: current });
      },
    }),
    {
      name: "active-product-features",
      version: 1,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

type Store = {
  activeFeatures: ActiveProductFeatures;
  setOpen: (id: number | undefined, context: string) => void;
};

export type ActiveProductFeatures = {
  [key: string]: number | undefined;
};
