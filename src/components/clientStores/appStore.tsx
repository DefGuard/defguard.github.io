import { createWithEqualityFn } from "zustand/traditional";

const defaults: StoreValues = {
  version: "",
};

export const useAppStore = createWithEqualityFn<Store>(
  (set) => ({
    ...defaults,
    setState: (vals) => set(vals),
  }),
  Object.is,
);

type StoreValues = {
  version: string;
};

type StoreMethods = {
  setState: (value: Partial<StoreValues>) => void;
};

type Store = StoreValues & StoreMethods;
