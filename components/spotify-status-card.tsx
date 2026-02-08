"use client";

import Image from "next/image";
import useSWR from "swr";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music } from "lucide-react";
import { SiSpotify } from "react-icons/si";

type NowPlaying = {
  isPlaying: boolean;
  name: string;
  artists: string;
  image: string;
  progressPercent?: number;
  url: string;
};

type RecentlyPlayed = {
  name: string;
  artists: string;
  image: string;
  playedAt: string;
  url: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SpotifyStatusCard() {
  const { data: now, error: nowError } = useSWR<NowPlaying>(
    "/api/spotify/now-playing",
    fetcher,
    {
      refreshInterval: 5000,
      revalidateOnFocus: true,
    },
  );

  const { data: recent, error: recentError } = useSWR<RecentlyPlayed>(
    now?.isPlaying ? null : "/api/spotify/recent",
    fetcher,
    {
      refreshInterval: 15000,
      revalidateOnFocus: true,
    },
  );

  const error = nowError || recentError;
  const loading = !now && !error;

  const nowPlaying = now?.isPlaying ? now : null;
  const lastPlayed = !now?.isPlaying ? recent : null;

  if (error) return null;

  if (loading) {
    return (
      <Card className="w-full shadow-sm mx-auto">
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-md bg-muted animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-20 rounded bg-muted animate-pulse" />
              <div className="h-4 w-32 rounded bg-muted animate-pulse" />
              <div className="h-3 w-24 rounded bg-muted animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!nowPlaying && !lastPlayed) return null;

  const track = nowPlaying ?? lastPlayed;
  if (!track) {
    return null;
  }
  return (
    <Card className="w-full mx-auto py-4 transition-colors">
      <span className="sr-only">
        {nowPlaying
          ? `Currently playing ${track.name} by ${track.artists}`
          : `Last played ${track.name} by ${track.artists}`}
      </span>
      <CardContent className="px-5 py-0">
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4"
        >
          <div className="relative">
            <Image
              src={track.image}
              alt="Album art"
              width={64}
              height={64}
              className="rounded-lg shadow-lg"
            />

            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              {nowPlaying ? (
                <Music className="h-6 w-6 text-white" />
              ) : (
                <Play className="h-6 w-6 text-white" />
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="relative flex size-2">
                {nowPlaying ? (
                  <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </>
                ) : (
                  <span className="relative inline-flex size-2 rounded-full bg-gray-400 dark:bg-gray-700" />
                )}
              </span>

              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-green-500">
                {nowPlaying ? "Now Playing" : "Last Played"} <SiSpotify />
              </p>
            </div>

            <p className="truncate font-semibold transition-colors group-hover:text-green-400">
              {track.name}
            </p>

            <p className="truncate text-sm font-medium text-muted-foreground">
              {track.artists}
            </p>

            {nowPlaying?.progressPercent !== undefined && (
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-700">
                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-1000"
                  style={{ width: `${nowPlaying.progressPercent}%` }}
                />
              </div>
            )}
          </div>
        </a>
      </CardContent>
    </Card>
  );
}
