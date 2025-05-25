import { toast } from "react-toastify";
import { base_url } from "./baseUrl";
import Cookies from "universal-cookie";

export const upgradeToPro = async (plan: "monthly" | "annual") => {
  const cookies = new Cookies();
  const api_key = cookies.get("api-key");
  try {
    const respose = await fetch(`${base_url}//billing/activate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        "x-api-key": api_key,
      },
      body: JSON.stringify({
        plan,
      }),
    });
    const result = await respose.json();

    if (!respose.ok || result.status !== "activated") {
      console.log(result);
      toast.error("Failed to upgrade to pro");
      return;
    }

    console.log(result);

    toast.success("Upgrade Successful");

    return result;
  } catch {
    toast.error("an error occured");
  }
};
