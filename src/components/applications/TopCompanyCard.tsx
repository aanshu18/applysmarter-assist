
import { Badge } from '@/components/ui/badge';

interface TopCompanyCardProps {
  logo: string;
  name: string;
  openPositions: number;
}

const TopCompanyCard = ({ logo, name, openPositions }: TopCompanyCardProps) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full overflow-hidden bg-white flex items-center justify-center border">
          <img src={logo} alt={name} className="h-5 w-5 object-contain" />
        </div>
        <h4 className="font-medium">{name}</h4>
      </div>
      <Badge variant="outline" className="font-normal">
        {openPositions} openings
      </Badge>
    </div>
  );
};

export default TopCompanyCard;
