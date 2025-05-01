import { StateCreator } from "zustand";

export type VerifyCodeSliceState = {
  code: string;
};

export type VerifyCodeSliceAction = {
  setCode: (code: string) => void;
  verifyCodeSliceReset: () => void;
};

const initialState: VerifyCodeSliceState = {
  code: "",
};

export const createVerifyCode: StateCreator<
  VerifyCodeSliceState & VerifyCodeSliceAction
> = (set) => ({
  ...initialState,
  setCode: (code) => set({ code }),
  verifyCodeSliceReset: () => set(initialState),
});
