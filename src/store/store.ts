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
import {
  createMenuSlice,
  MenuSliceAction,
  MenuSliceState,
} from "./slice/MenuSlice";

type StoreState = LoginSliceState &
  VerifyCodeSliceState &
  ConnectSliceState &
  MenuSliceState;

type StoreActions = LoginSliceAction &
  VerifyCodeSliceAction &
  ConnectSliceAction &
  MenuSliceAction;
export const useBoundStore = create<StoreState & StoreActions>()((...a) => ({
  ...createLoginSlice(...a),
  ...createVerifyCode(...a),
  ...createConnectSlice(...a),
  ...createMenuSlice(...a),
}));
