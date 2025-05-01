import { toast } from "react-toastify";
import { base_url } from "./baseUrl";

export const verifyCode = async (
  email: string,
  code: string,
  navigate: () => void
) => {
  try {
    const response = await fetch(`${base_url}/auth/verify-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error("An error occured");
    }

    navigate();

    toast.success("verification is successfull");

    return result;
  } catch {
    toast.error("something went wrong");
  }
};
