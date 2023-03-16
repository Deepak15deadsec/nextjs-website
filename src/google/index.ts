import useStore from "../../zustand/useStore";

export const useGetGoogleOAuthURL = () => {
  const {referrer, phone} = useStore((state) => state)
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options= {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL || '',
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    state: JSON.stringify({"referrer": referrer, "phone": phone}),
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/gmail.readonly",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);
  return {
    googleUrl: `${rootUrl}?${qs.toString()}`
  }
};
