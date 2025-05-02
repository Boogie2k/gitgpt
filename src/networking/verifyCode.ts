import { toast } from "react-toastify";
import { base_url } from "./baseUrl";
import Cookies from "universal-cookie";
//import { cookies } from "next/headers";

export const verifyCode = async (
  email: string,
  code: string,
  navigate: () => void
) => {
  const cookies = new Cookies();
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
    cookies.set("api-key", result.api_key);

    navigate();

    toast.success("verification is successfull");

    console.log({ result });

    return result;
  } catch {
    toast.error("something went wrong");
  }
};
