import { ExperienceTimeline as TimeLine } from "@/data/data";
import { ExperienceItem } from "./ExperienceItem";

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
        <div className="timeline-container" key={(companyName + t.role, +i)}>
          <div className="timeline-item grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto] items-center">
            {/* <div className="w-8 mr-2 timeline-dot h-full row-span-2 ">
              <div className="w-2 h-2 bg-accent-foreground mx-auto rounded-full translate-y-3" />
            </div> */}
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
