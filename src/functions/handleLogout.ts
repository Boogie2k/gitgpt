import Cookies from "universal-cookie";

export const logout = (navigateToLogin: () => void) => {
  try {
    const cookies = new Cookies();

    cookies.set("api-key", null);
    navigateToLogin();
  } catch {}
};
