import { NextResponse } from "next/server";
import { spotifyFetch } from "@/lib/spotify";
import { cookies } from "next/headers";

async function getNowPlaying() {
  try {
    const resp = await spotifyFetch("/me/player/currently-playing");
    if (!resp || !resp.item) {
      return null;
    }
    const duration = resp.item.duration_ms;
    const progress = resp.progress_ms;
    const data = {
      isPlaying: resp.is_playing,
      name: resp.item.name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      artists: resp.item.artists.map((a: any) => a.name).join(", "),
      image: resp.item.album.images[0]?.url, // 640px (best)
      progressMs: progress,
      durationMs: duration,
      url: resp.item.external_urls.spotify,
      progressPercent: Math.round((progress / duration) * 100),
    };
    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
async function getRecentlyPlayed() {
  try {
    const resp = await spotifyFetch("/me/player/recently-played?limit=1");
    if (!resp?.items?.length) {
      return null;
    }
    const item = resp.items[0];
    const track = item.track;

    const data = {
      isPlaying: false,
      name: track.name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      artists: track.artists.map((a: any) => a.name).join(", "),
      image: track.album.images[0]?.url,
      playedAt: item.played_at,
      url: track.external_urls.spotify,
    };
    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
export async function GET() {
  console.log("testing...");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cookieStore = await cookies();
  let data = null;
  try {
    data = await getNowPlaying();
    if (!data) {
      data = await getRecentlyPlayed();
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(error);
  }
}
