import { StateCreator } from "zustand";

export type MenuSliceState = {
  isEditEmail: boolean;
  isLogout: boolean;
};

export type MenuSliceAction = {
  setIsEditEmail: (value: boolean) => void;
  setIsLogout: (value: boolean) => void;
  resetMenuSlice: () => void;
};

const initialState: MenuSliceState = {
  isEditEmail: false,

  isLogout: false,
};

export const createMenuSlice: StateCreator<MenuSliceState & MenuSliceAction> = (
  set
) => ({
  ...initialState,
  setIsEditEmail: (isEditEmail) => set({ isEditEmail }),
  setIsLogout: (isLogout) => set({ isLogout }),

  resetMenuSlice: () => set(initialState),
});
