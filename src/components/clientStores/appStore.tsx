import { pickBy } from "lodash-es";
import { createJSONStorage, persist } from "zustand/middleware";
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
      storage: createJSONStorage(() => localStorage),
      partialize: (store) => pickBy(store, persistedKeys),
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
