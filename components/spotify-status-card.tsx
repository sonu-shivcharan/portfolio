"use client";

import Image from "next/image";
import useSWR from "swr";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music } from "lucide-react";
import { SiSpotify } from "react-icons/si";
import { AnalyticsLink } from "./analytics/AnalyticsLink";

type SpotifyStaus = {
  isPlaying: boolean;
  name: string;
  artists: string;
  image: string;
  url: string;
  progressMs?: number;
  durationMs?: number;
  progressPercent?: number;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SpotifyStatusCard() {
  const {
    data: spotifyStatus,
    error,
    isLoading,
  } = useSWR<SpotifyStaus>("/api/spotify", fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });
  if (error) return null;
  if (isLoading) {
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

  if (!spotifyStatus) return null;

  const track = spotifyStatus;
  const nowPlaying = spotifyStatus.isPlaying;
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
        <AnalyticsLink
          label={`Song ${track.name}`}
          action="click_spotify_card"
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

              <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-green-500">
                {nowPlaying ? "Now Playing" : "Last Played"} <SiSpotify />
              </div>
            </div>

            <p className="truncate text-md font-semibold transition-colors group-hover:text-green-400">
              {track.name}
            </p>

            <p className="truncate text-sm font-medium text-muted-foreground">
              {track.artists}
            </p>

            {spotifyStatus.progressPercent !== undefined && (
              <div className="mt-3 h-1 w-full  rounded-full bg-accent-foreground/10">
                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-1000 ease-out relative"
                  style={{
                    width: `${spotifyStatus.progressPercent}%`,
                  }}
                >
                  <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 shadow-lg" />
                </div>
              </div>
            )}
          </div>
        </AnalyticsLink>
      </CardContent>
    </Card>
  );
}
