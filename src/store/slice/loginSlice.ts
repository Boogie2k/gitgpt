import { StateCreator } from "zustand";

export type LoginSliceState = {
  email: string;
  isPage: "login" | "verifyEmail" | "connect";
};

export type LoginSliceAction = {
  setEmail: (email: string) => void;
  loginSliceReset: () => void;
  setIsPage: (value: "login" | "verifyEmail" | "connect") => void;
};

const initialState: LoginSliceState = {
  email: "",
  isPage: "login",
};

export const createLoginSlice: StateCreator<
  LoginSliceAction & LoginSliceState
> = (set) => ({
  ...initialState,
  setEmail: (email) => set({ email }),
  loginSliceReset: () => set(initialState),
  setIsPage: (isPage) => set({ isPage }),
});
