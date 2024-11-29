import { pick } from "lodash-es";
import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

const defaults: StoreValues = {
  version: "",
  cookiesAccepted: false,
};

const persistedKeys: Array<keyof StoreValues> = ["cookiesAccepted"];

export const useAppStore = createWithEqualityFn<Store>()(
  persist(
    (set) => ({
      ...defaults,
      setState: (vals) => {
        set(vals);
      },
    }),
    {
      name: "app-store",
      version: 1,
      partialize: (s) => pick(s, persistedKeys),
    },
  ),
  Object.is,
);

type StoreValues = {
  version: string;
  cookiesAccepted: boolean;
};

type StoreMethods = {
  setState: (value: Partial<StoreValues>) => void;
};

type Store = StoreValues & StoreMethods;
