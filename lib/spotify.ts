import { cookies } from "next/headers";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1";
export const TOKEN_COOKIE_NAME = "spotify_token";

const basicAuth = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

async function getAccessToken() {
  const cookieStore = await cookies();
  const cachedToken = cookieStore.get(TOKEN_COOKIE_NAME)?.value;

  if (cachedToken) {
    console.log("return cached");
    return { access_token: cachedToken };
  }

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });

  const data = await res.json();

  cookieStore.set(TOKEN_COOKIE_NAME, data.access_token, {
    maxAge: 60 * 60, // 1 hour
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return data;
}

export async function spotifyFetch(endpoint: string) {
  try {
    const { access_token } = await getAccessToken();

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    throw error;
  }
}
