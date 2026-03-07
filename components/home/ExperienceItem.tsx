import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  role: string;
  period: string;
  type: string;
  achievements: string[];
}

export function ExperienceItem({
  role,
  period,
  type,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="-mt-2 px-2 md:px-4 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
      <div className="role col-span-2 md:col-span-1">
        {role}
      </div>
      <div className="flex items-center gap-2 md:flex-col md:items-end col-span-2 md:col-span-1">
        <p className="text-xs">{period}</p>
        <Badge variant={"outline"}>{type}</Badge>
      </div>

      <div className="mb-4 col-span-2">
        <ul className="space-y-1">
          {achievements.map((line) => (
            <li className="text-xs text-muted-foreground " key={line}>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
