export const githubCallback = async () => {
  console.log("heeelo");
  try {
    const response = await fetch(
      `https://gitgpt-staging.weyoto.com/github-auth/github/oauth/callback?code=c0320ae9e7c66cee6ff4`
    );

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
