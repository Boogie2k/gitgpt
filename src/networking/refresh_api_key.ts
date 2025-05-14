import Cookies from "universal-cookie";
import { base_url } from "./baseUrl";
import { toast } from "react-toastify";

export const refresh_api_key = async () => {
  try {
    const cookies = new Cookies();

    const api_key = cookies.get("api-key");
    const response = await fetch(`${base_url}/auth/regenerate-api-key`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "x-api-key": "0fceed163997f4152c3836db52d60087",
        "x-api-key": api_key,
      },
    });
    const result = await response.json();

    if (!response.ok) {
      toast.error("failed to refresh your Api key");
      return;
    }

    cookies.set("api-key", result.api_key);
    console.log(result);

    toast.success("Your Api key has been regenerated");
    return result;
  } catch (error) {
    console.log(error);
  }
};
