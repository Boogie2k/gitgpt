import { StateCreator } from "zustand";

export type GetStartedSliceState = {
  gitPat: string;
  email: string;
  isPage: "login" | "verifyEmail" | "connect";
  code: string;
};

export type GetStartedSliceAction = {
  setgitPat: (gitPat: string) => void;
  connectSliceReset: () => void;
  setEmail: (email: string) => void;

  setIsPage: (value: "login" | "verifyEmail") => void;
  setCode: (code: string) => void;
  verifyCodeSliceReset: () => void;
  getStartedReset: () => void;
};

const initialState: GetStartedSliceState = {
  gitPat: "",
  email: "",
  isPage: "login",
  code: "",
};

export const createGetStartedSlice: StateCreator<
  GetStartedSliceState & GetStartedSliceAction
> = (set) => ({
  ...initialState,
  setgitPat: (gitPat) => set({ gitPat }),
  connectSliceReset: () => set(initialState),
  setEmail: (email) => set({ email }),

  setIsPage: (isPage) => set({ isPage }),

  setCode: (code) => set({ code }),
  verifyCodeSliceReset: () => set(initialState),
  getStartedReset: () => set(initialState),
});
