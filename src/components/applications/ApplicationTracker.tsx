
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Separator } from '@/components/ui/separator';
import ApplicationOverview from './ApplicationOverview';
import ApplicationsList from './ApplicationsList';
import UpcomingSection from './UpcomingSection';

const ApplicationTracker = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-5">
        <AnimatedCard className="col-span-5 md:col-span-3 p-0" variant="glass" delayAnimation={100}>
          <div className="p-6">
            <h3 className="text-lg font-medium">Applications Overview</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Track your job application progress
            </p>
            
            <ApplicationOverview />
          </div>
          
          <Separator />
          
          <div className="p-6">
            <ApplicationsList />
          </div>
        </AnimatedCard>
        
        <AnimatedCard className="col-span-5 md:col-span-2" variant="glass" delayAnimation={200}>
          <UpcomingSection />
        </AnimatedCard>
      </div>
    </div>
  );
};

export default ApplicationTracker;
