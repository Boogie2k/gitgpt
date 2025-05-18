import { cookies } from "next/headers";

export const setIsSavedTokenCookie = async () => {
  const cookieStore = await cookies();

  cookieStore.set("isTokenSaved", "true");
};
