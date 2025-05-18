import { toast } from "react-toastify";
import { base_url } from "./baseUrl";
import Cookies from "universal-cookie";

export const connectGit = async (gitPat: string, navigate: () => void) => {
  const cookies = new Cookies();

  const api_key = cookies.get("api-key");
  try {
    const response = await fetch(`${base_url}/github/set-pat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
        "x-api-key": api_key,
      },
      body: JSON.stringify({
        github_pat: gitPat,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message);
      console.log({ response });
      return;
    }

    navigate();

    toast.success(result.message);

    //cookies.set("isConnected", true);
    //console.log({ result });

    return result;
  } catch {
    toast.error("something went wrong");
  }
};
