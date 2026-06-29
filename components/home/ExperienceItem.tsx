import { Badge } from "@/components/ui/badge";
import { type ExperienceItem } from "@/data/data";

type ExperienceItemProps = Omit<ExperienceItem, "company" | "timeline">;

export function ExperienceItem({
  role,
  period,
  type,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="px-2 md:px-4 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
      <div className="role col-span-2  md:col-span-1">{role}</div>
      <div className="flex items-center gap-2 md:flex-col md:items-end col-span-2 md:col-span-1">
        <p className="text-xs text-muted-foreground">{period}</p>
        <Badge variant={"outline"}>{type}</Badge>
      </div>

      <div className="mb-2 col-span-2">
        <ul className="space-y-1  mt-2">
          {achievements?.map((line) => (
            <li
              className="text-xs ml-4 list-disc text-muted-foreground "
              key={line}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
