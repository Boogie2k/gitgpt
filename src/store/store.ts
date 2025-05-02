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
import {
  ConnectSliceAction,
  ConnectSliceState,
  createConnectSlice,
} from "./slice/connectSlice";

type StoreState = LoginSliceState & VerifyCodeSliceState & ConnectSliceState;

type StoreActions = LoginSliceAction &
  VerifyCodeSliceAction &
  ConnectSliceAction;
export const useBoundStore = create<StoreState & StoreActions>()((...a) => ({
  ...createLoginSlice(...a),
  ...createVerifyCode(...a),
  ...createConnectSlice(...a),
}));
