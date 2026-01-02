import { GitHubCalendar } from "react-github-calendar";
import { Card, CardContent } from "../ui/card";

function GithubActivity() {
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Github Activity</h2>
      <Card className="bg-transparent">
        <CardContent>
          <GitHubCalendar
            blockMargin={3}
            blockSize={10}
            username="sonu-shivcharan"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default GithubActivity;
