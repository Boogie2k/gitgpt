import { create } from "zustand";

import {
  GetStartedSliceState,
  GetStartedSliceAction,
  createGetStartedSlice,
} from "./slice/getStarted";
import {
  createMenuSlice,
  MenuSliceAction,
  MenuSliceState,
} from "./slice/MenuSlice";
import {
  createHomeSlice,
  HomeSliceAction,
  HomeSliceState,
} from "./slice/HomeSlice";

type StoreState = GetStartedSliceState & MenuSliceState & HomeSliceState;

type StoreActions = GetStartedSliceAction & MenuSliceAction & HomeSliceAction;
export const useBoundStore = create<StoreState & StoreActions>()((...a) => ({
  ...createGetStartedSlice(...a),
  ...createMenuSlice(...a),
  ...createHomeSlice(...a),
}));
