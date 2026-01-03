import { NextResponse } from "next/server";
import { spotifyFetch } from "@/lib/spotify";

export async function GET() {
  try {
    const resp = await spotifyFetch("/me/player/recently-played?limit=1");

    if (!resp?.items?.length) {
      return NextResponse.json(null);
    }

    const item = resp.items[0];
    const track = item.track;

    const data = {
      name: track.name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      artists: track.artists.map((a: any) => a.name).join(", "),
      image: track.album.images[0]?.url,
      playedAt: item.played_at,
      spotifyUrl: track.external_urls.spotify,
      url: track.external_urls.spotify,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Spotify recently played error:", error);
    return NextResponse.json(
      { error: "Failed to fetch recently played" },
      { status: 500 }
    );
  }
}
