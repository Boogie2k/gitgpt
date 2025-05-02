import { StateCreator } from "zustand";

export type ConnectSliceState = {
  gitPat: string;
};

export type ConnectSliceAction = {
  setgitPat: (gitPat: string) => void;
  connectSliceReset: () => void;
};

const initialState: ConnectSliceState = {
  gitPat: "",
};

export const createConnectSlice: StateCreator<
  ConnectSliceState & ConnectSliceAction
> = (set) => ({
  ...initialState,
  setgitPat: (gitPat) => set({ gitPat }),
  connectSliceReset: () => set(initialState),
});
