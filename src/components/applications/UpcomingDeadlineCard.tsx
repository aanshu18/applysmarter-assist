
import { Badge } from '@/components/ui/badge';

interface UpcomingDeadlineCardProps {
  company: string;
  position: string;
  daysLeft: number;
}

const UpcomingDeadlineCard = ({ company, position, daysLeft }: UpcomingDeadlineCardProps) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      <div>
        <h4 className="font-medium">{position}</h4>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
      <Badge variant={daysLeft <= 3 ? 'destructive' : 'outline'} className="font-normal">
        {daysLeft} {daysLeft === 1 ? 'day' : 'days'} left
      </Badge>
    </div>
  );
};

export default UpcomingDeadlineCard;
