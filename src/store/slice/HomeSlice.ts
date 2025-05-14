import { StateCreator } from "zustand";

export type HomeSliceState = {
  apiKey: string;
  isRefreshApiKey: boolean;
  userEmail: string;
};

export type HomeSliceAction = {
  setApiKey: (apiKey: string) => void;
  setIsRefreshApikey: (value: boolean) => void;
  setUserEmail: (value: string) => void;
};

const initialState: HomeSliceState = {
  apiKey: "",
  isRefreshApiKey: false,
  userEmail: "",
};

export const createHomeSlice: StateCreator<HomeSliceState & HomeSliceAction> = (
  set
) => ({
  ...initialState,
  setApiKey: (apiKey) => set({ apiKey }),
  setIsRefreshApikey: (isRefreshApiKey) => set({ isRefreshApiKey }),
  setUserEmail: (userEmail) => set({ userEmail }),
});
