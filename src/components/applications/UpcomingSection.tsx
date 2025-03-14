
import { Calendar, Building } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import UpcomingDeadlineCard from './UpcomingDeadlineCard';
import TopCompanyCard from './TopCompanyCard';

const UpcomingSection = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">Upcoming Deadlines</h3>
      </div>
      
      <div className="space-y-3">
        <UpcomingDeadlineCard
          company="Facebook"
          position="React Developer"
          daysLeft={2}
        />
        <UpcomingDeadlineCard
          company="Twitter"
          position="Frontend Engineer"
          daysLeft={5}
        />
        <UpcomingDeadlineCard
          company="Airbnb"
          position="UI Developer"
          daysLeft={7}
        />
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex items-center gap-2 mb-4">
        <Building className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">Top Companies</h3>
      </div>
      
      <div className="space-y-3">
        <TopCompanyCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          name="Google"
          openPositions={12}
        />
        <TopCompanyCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
          name="Microsoft"
          openPositions={8}
        />
        <TopCompanyCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          name="Amazon"
          openPositions={15}
        />
      </div>
    </>
  );
};

export default UpcomingSection;
