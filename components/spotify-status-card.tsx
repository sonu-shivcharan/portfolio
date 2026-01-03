"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
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

export default function SpotifyStatusCard() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [recent, setRecent] = useState<RecentlyPlayed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const now = await fetch("/api/spotify/now-playing").then((r) =>
          r.json()
        );

        if (now?.isPlaying) {
          setNowPlaying(now);
        } else {
          const last = await fetch("/api/spotify/recent").then((r) => r.json());
          setRecent(last);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (error) return null;
  if (loading) {
    return (
      <Card className="w-full mx-auto">
        <CardContent className="    ">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-800 rounded-md animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-zinc-800 rounded animate-pulse w-20" />
              <div className="h-4 bg-zinc-800 rounded animate-pulse w-32" />
              <div className="h-3 bg-zinc-800 rounded animate-pulse w-24" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  if (!nowPlaying && !recent) return null;
  return (
    <Card className="w-full mx-auto bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 transition-colors">
      <CardContent>
        <a
          href={nowPlaying?.url || recent?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="relative">
            <Image
              width={64}
              height={64}
              src={nowPlaying?.image || recent?.image || ""}
              alt="Album art"
              className="w-16 h-16 rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {nowPlaying?.isPlaying ? (
                <Music className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  nowPlaying?.isPlaying
                    ? "bg-green-500 animate-pulse"
                    : "bg-zinc-500"
                )}
              />
              <p className="flex gap-2 items-center text-xs uppercase tracking-wide font-medium text-green-500">
                {nowPlaying ? "Now Playing" : "Last Played"} on{" "}
                <SiSpotify className="text-green-500" />
              </p>
            </div>

            <p className="font-semibold text-white truncate group-hover:text-green-400 transition-colors">
              {nowPlaying?.name || recent?.name}
            </p>

            <p className="text-sm text-zinc-400 truncate">
              {nowPlaying?.artists || recent?.artists}
            </p>

            {nowPlaying?.isPlaying &&
              nowPlaying.progressPercent !== undefined && (
                <div className="mt-3 h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-1000"
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
