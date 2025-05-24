import { toast } from "react-toastify";
import { base_url } from "./baseUrl";
import Cookies from "universal-cookie";
import { getApiKey } from "./getApiKey";
//import { cookies } from "next/headers";

export const verifyCode = async (
  email: string,
  code: string,
  goToConnect: () => void,
  goToHome: () => void
) => {
  const cookies = new Cookies();
  const today = new Date();
  const twoWeeksFromToday = new Date(today);

  try {
    //  const cookieStore = await cookies();
    const response = await fetch(`${base_url}/auth/verify-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.error);
      return;
    }

    cookies.set("api-key", result.api_key, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });

    const getApiKeyResult = await getApiKey();

    console.log({ getApiKeyResult });

    if (getApiKeyResult.github_connected) {
      cookies.set("isTokenSaved", true, {
        expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
      });
      goToHome();
      toast.success("verification is successfull");

      return result;
    }
    goToConnect();

    toast.success("verification is successfull");

    console.log({ result });

    return result;
  } catch {
    toast.error("something went wrong");
  }
};
