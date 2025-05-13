import { StateCreator } from "zustand";

export type HomeSliceState = {
  apiKey: string;
};

export type HomeSliceAction = {
  setApiKey: (apiKey: string) => void;
};

const initialState: HomeSliceState = {
  apiKey: "",
};

export const createHomeSlice: StateCreator<HomeSliceState & HomeSliceAction> = (
  set
) => ({
  ...initialState,
  setApiKey: (apiKey) => set({ apiKey }),
});
