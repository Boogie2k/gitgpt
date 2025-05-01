import { StateCreator } from "zustand";

export type LoginSliceState = {
  email: string;
};

export type LoginSliceAction = {
  setEmail: (email: string) => void;
  loginSliceReset: () => void;
};

const initialState: LoginSliceState = {
  email: "",
};

export const createLoginSlice: StateCreator<
  LoginSliceAction & LoginSliceState
> = (set) => ({
  ...initialState,
  setEmail: (email) => set({ email }),
  loginSliceReset: () => set(initialState),
});
