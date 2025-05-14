import Cookies from "universal-cookie";
import { base_url } from "./baseUrl";
import { toast } from "react-toastify";

export const getApiKey = async () => {
  const cookies = new Cookies();

  const api_key = cookies.get("api-key");
  try {
    const response = await fetch(`${base_url}/auth/view-api-key`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "x-api-key": "0fceed163997f4152c3836db52d60087",
        "x-api-key": api_key,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      toast.error(result.error);
      return;
    }
    console.log({ result });
    return result;
  } catch (error) {
    console.log(error);
  }
};
