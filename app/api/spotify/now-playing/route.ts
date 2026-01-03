import { NextResponse } from "next/server";
import { spotifyFetch } from "@/lib/spotify";
import { cookies } from "next/headers";

export async function GET() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cookieStore = await cookies();
  try {
    const resp = await spotifyFetch("/me/player/currently-playing");

    if (!resp || !resp.item) {
      return NextResponse.json({
        isPlaying: false,
      });
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
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
