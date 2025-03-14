
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Building, Calendar, MoreHorizontal, FileText, Linkedin, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface Application {
  id: string;
  company: string;
  position: string;
  status: 'applied' | 'wishlist' | 'interview' | 'offer' | 'rejected';
  date: string;
  logo: string;
}

const mockApplications: Application[] = [
  {
    id: '1',
    company: 'Google',
    position: 'Frontend Developer',
    status: 'applied',
    date: '2023-09-15',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
  },
  {
    id: '2',
    company: 'Microsoft',
    position: 'Software Engineer',
    status: 'interview',
    date: '2023-09-12',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
  },
  {
    id: '3',
    company: 'Amazon',
    position: 'Full Stack Developer',
    status: 'wishlist',
    date: '2023-09-10',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  },
  {
    id: '4',
    company: 'Apple',
    position: 'UI Developer',
    status: 'offer',
    date: '2023-09-05',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
  },
  {
    id: '5',
    company: 'Netflix',
    position: 'React Developer',
    status: 'rejected',
    date: '2023-09-01',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
  },
];

const statusColors = {
  applied: 'bg-blue-500 hover:bg-blue-600',
  wishlist: 'bg-purple-500 hover:bg-purple-600',
  interview: 'bg-amber-500 hover:bg-amber-600',
  offer: 'bg-green-500 hover:bg-green-600',
  rejected: 'bg-red-500 hover:bg-red-600',
};

const statusLabels = {
  applied: 'Applied',
  wishlist: 'Wishlist',
  interview: 'Interview',
  offer: 'Offer',
  rejected: 'Rejected',
};

const ApplicationTracker = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredApplications = mockApplications
    .filter((app) => activeTab === 'all' || app.status === activeTab)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  const stats = {
    applied: mockApplications.filter((app) => app.status === 'applied').length,
    wishlist: mockApplications.filter((app) => app.status === 'wishlist').length,
    interview: mockApplications.filter((app) => app.status === 'interview').length,
    offer: mockApplications.filter((app) => app.status === 'offer').length,
    rejected: mockApplications.filter((app) => app.status === 'rejected').length,
  };

  const totalApplications = mockApplications.length;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-5">
        <AnimatedCard className="col-span-5 md:col-span-3 p-0" variant="glass" delayAnimation={100}>
          <div className="p-6">
            <h3 className="text-lg font-medium">Applications Overview</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Track your job application progress
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <StatsCard
                label="Applied"
                value={stats.applied}
                color="bg-blue-500"
                total={totalApplications}
              />
              <StatsCard
                label="Wishlist"
                value={stats.wishlist}
                color="bg-purple-500"
                total={totalApplications}
              />
              <StatsCard
                label="Interview"
                value={stats.interview}
                color="bg-amber-500"
                total={totalApplications}
              />
              <StatsCard
                label="Offer"
                value={stats.offer}
                color="bg-green-500"
                total={totalApplications}
              />
              <StatsCard
                label="Rejected"
                value={stats.rejected}
                color="bg-red-500"
                total={totalApplications}
              />
            </div>
          </div>
          
          <Separator />
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="applied">Applied</TabsTrigger>
                  <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                  <TabsTrigger value="interview">Interview</TabsTrigger>
                  <TabsTrigger value="offer">Offer</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredApplications.length} applications
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                Date
              </Button>
            </div>
            
            <div className="space-y-3">
              {filteredApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
              
              {filteredApplications.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No applications found</p>
                </div>
              )}
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard className="col-span-5 md:col-span-2" variant="glass" delayAnimation={200}>
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
        </AnimatedCard>
      </div>
    </div>
  );
};

const StatsCard = ({ label, value, color, total }: { label: string; value: number; color: string; total: number }) => {
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

const ApplicationCard = ({ application }: { application: Application }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3 hover:bg-secondary/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center border">
          <img src={application.logo} alt={application.company} className="h-6 w-6 object-contain" />
        </div>
        
        <div>
          <h4 className="font-medium">{application.position}</h4>
          <p className="text-sm text-muted-foreground">{application.company}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Badge variant="outline" className="font-normal">
          {new Date(application.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </Badge>
        
        <Badge className={`${statusColors[application.status]} font-normal`}>
          {statusLabels[application.status]}
        </Badge>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <FileText className="h-4 w-4 mr-2" />
              View Application
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Briefcase className="h-4 w-4 mr-2" />
              Update Status
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Linkedin className="h-4 w-4 mr-2" />
              View Job Post
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const UpcomingDeadlineCard = ({ company, position, daysLeft }: { company: string; position: string; daysLeft: number }) => {
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

const TopCompanyCard = ({ logo, name, openPositions }: { logo: string; name: string; openPositions: number }) => {
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

export default ApplicationTracker;
