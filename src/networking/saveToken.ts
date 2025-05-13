import Cookies from "universal-cookie";
import { base_url } from "./baseUrl";
import { toast } from "react-toastify";

export const saveToken = async (code: string) => {
  const cookies = new Cookies();
  const api_key = cookies.get("api-key");
  const response = await fetch(
    `${base_url}//auth/github/oauth/save-token-from-code`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "x-api-key": "0fceed163997f4152c3836db52d60087",
        "x-api-key": api_key,
      },
      body: JSON.stringify({
        code,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    toast.error("An error ocuured");
  }
  console.log(result);
  return result;
};
