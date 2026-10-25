import { ExperienceTimeline as TimeLine } from "@/data/data";
import { ExperienceItem } from "./ExperienceItem";
import "@/app/timeline.css";
import { cn } from "@/lib/utils";
interface ExperienceTimelineProps {
  timeline: TimeLine[];
  companyName: string;
}

export function ExperienceTimeline({
  timeline,
  companyName,
}: ExperienceTimelineProps) {
  return (
    <>
      {timeline.map((t, i) => (
        <div className="timeline-container" key={companyName + t.role + i}>
          <div
            className={cn(
              "timeline-item grid grid-cols-[auto_1fr] items-center",
              i !== timeline.length - 1 ? "mb-2" : "",
            )}
          >
            <div className="w-8 mr-2 h-full timeline-dot row-span-2 translate-y-2 translate-x-1.5">
              <div className="w-2 h-2 bg-accent-foreground mx-auto rounded-full" />
            </div>
            <ExperienceItem
              role={t.role}
              period={t.period}
              type={t.type}
              achievements={t.achievements || []}
            />
          </div>
        </div>
      ))}
    </>
  );
}
