import Cookies from "universal-cookie";

export const logout = (navigateToLogin: () => void) => {
  try {
    const cookies = new Cookies();

    cookies.remove("api-key");
    cookies.remove("isTokenSaved");
    navigateToLogin();
  } catch {}
};
