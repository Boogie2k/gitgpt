import { toast } from "react-toastify";
import { base_url } from "./baseUrl";

export const login = async (email: string, navigate: () => void) => {
  try {
    const notify = () => toast("✔️ We’ve sent a 6-digit code to your email");
    const response = await fetch(`${base_url}/auth/request-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error("An error ocuured");
    }

    navigate();
    notify();

    console.log({ result });
  } catch (error) {
    toast.error("something went wrong ");
    console.log({ error });
  }
};
