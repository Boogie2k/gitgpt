import { base_url } from "./baseUrl";

export const authorizeGithubOauth = async () => {
  try {
    const response = await fetch(`${base_url}/github-auth/github/oauth/start`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
