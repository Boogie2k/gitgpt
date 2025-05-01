import { create } from "zustand";
import {
  createLoginSlice,
  LoginSliceAction,
  LoginSliceState,
} from "./slice/loginSlice";
import {
  createVerifyCode,
  VerifyCodeSliceAction,
  VerifyCodeSliceState,
} from "./slice/verifyCode";

type StoreState = LoginSliceState & VerifyCodeSliceState;

type StoreActions = LoginSliceAction & VerifyCodeSliceAction;
export const useBoundStore = create<StoreState & StoreActions>()((...a) => ({
  ...createLoginSlice(...a),
  ...createVerifyCode(...a),
}));
