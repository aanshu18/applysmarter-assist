
import { Progress } from '@/components/ui/progress';

interface StatsCardProps {
  label: string;
  value: number;
  color: string;
  total: number;
}

const StatsCard = ({ label, value, color, total }: StatsCardProps) => {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <Progress
        value={percentage}
        className="h-2"
        indicatorClassName={color}
      />
    </div>
  );
};

export default StatsCard;
