
import { Briefcase, FileText, User, ArrowRight, BarChart, BookmarkPlus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold">Welcome back, John</h1>
        <p className="text-muted-foreground">
          Here's an overview of your job search
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedCard 
          variant="glass" 
          className="md:col-span-2"
          delayAnimation={100}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Application Overview</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
              </div>
              <Link to="/applications">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              <StatCard
                label="Applied"
                value={12}
                changeValue={"+3"}
                isPositive={true}
              />
              <StatCard
                label="Interviews"
                value={4}
                changeValue={"+2"}
                isPositive={true}
              />
              <StatCard
                label="Offers"
                value={1}
                changeValue={"+1"}
                isPositive={true}
              />
              <StatCard
                label="Rejected"
                value={3}
                changeValue={"-1"}
                isPositive={true}
              />
            </div>
            
            <Separator />
            
            <div>
              <h4 className="text-sm font-medium mb-2">Application Progress</h4>
              <div className="space-y-4">
                <ApplicationProgressItem
                  stage="Applied"
                  value={12}
                  max={20}
                  color="bg-blue-500"
                />
                <ApplicationProgressItem
                  stage="Phone Screen"
                  value={6}
                  max={12}
                  color="bg-amber-500"
                />
                <ApplicationProgressItem
                  stage="Interview"
                  value={4}
                  max={6}
                  color="bg-purple-500"
                />
                <ApplicationProgressItem
                  stage="Offer"
                  value={1}
                  max={4}
                  color="bg-green-500"
                />
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard variant="glass" delayAnimation={200}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookmarkPlus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Saved Jobs</h3>
                  <p className="text-sm text-muted-foreground">Jobs to apply for</p>
                </div>
              </div>
              <Link to="/applications">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            
            <SavedJobItem
              title="Full Stack Developer"
              company="Airbnb"
              location="Remote"
              daysAgo={1}
            />
            <SavedJobItem
              title="Frontend Engineer"
              company="Facebook"
              location="Menlo Park, CA"
              daysAgo={2}
            />
            <SavedJobItem
              title="React Developer"
              company="Twitter"
              location="San Francisco, CA"
              daysAgo={3}
            />
          </div>
        </AnimatedCard>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedCard 
          variant="glass" 
          className="h-full"
          delayAnimation={300}
        >
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Resume</h3>
                <p className="text-sm text-muted-foreground">Your resume status</p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium">software_engineer_resume.pdf</h4>
              <p className="text-sm text-muted-foreground mb-4">Uploaded 3 days ago</p>
              <div className="w-full flex gap-2">
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button className="flex-1">
                  <Send className="h-4 w-4 mr-1" />
                  Update
                </Button>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard 
          variant="glass" 
          className="md:col-span-2"
          delayAnimation={400}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Recent Applications</h3>
                <p className="text-sm text-muted-foreground">Your recent job applications</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <RecentApplicationItem
                title="Software Engineer"
                company="Microsoft"
                date="May 15, 2023"
                status="interview"
              />
              <RecentApplicationItem
                title="Frontend Developer"
                company="Google"
                date="May 12, 2023"
                status="applied"
              />
              <RecentApplicationItem
                title="React Developer"
                company="Facebook"
                date="May 10, 2023"
                status="rejected"
              />
              <RecentApplicationItem
                title="Full Stack Engineer"
                company="Netflix"
                date="May 8, 2023"
                status="offer"
              />
            </div>
            
            <div className="pt-2">
              <Link to="/applications">
                <Button variant="outline" className="w-full">
                  View All Applications
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedCard>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedCard 
          variant="glass" 
          className="md:col-span-3"
          delayAnimation={500}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Networking</h3>
                  <p className="text-sm text-muted-foreground">People to connect with</p>
                </div>
              </div>
              <Link to="/networking">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              <ContactCard
                name="Sarah Johnson"
                role="Senior Frontend Developer"
                company="Google"
                connected={true}
              />
              <ContactCard
                name="Michael Chen"
                role="Engineering Manager"
                company="Microsoft"
                connected={false}
              />
              <ContactCard
                name="Emma Wilson"
                role="Technical Recruiter"
                company="Amazon"
                connected={false}
              />
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, changeValue, isPositive }: { label: string; value: number; changeValue: string; isPositive: boolean }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <Badge
          variant="outline"
          className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}
        >
          {changeValue}
        </Badge>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const ApplicationProgressItem = ({ stage, value, max, color }: { stage: string; value: number; max: number; color: string }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{stage}</span>
        <span>{value}/{max}</span>
      </div>
      <Progress
        value={percentage}
        className="h-2"
        indicatorClassName={color}
      />
    </div>
  );
};

const SavedJobItem = ({ title, company, location, daysAgo }: { title: string; company: string; location: string; daysAgo: number }) => {
  return (
    <div className="border rounded-lg p-3 hover:bg-secondary/50 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs font-normal">
              {location}
            </Badge>
            <Badge variant="outline" className="text-xs font-normal">
              {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
            </Badge>
          </div>
        </div>
        <Button size="sm" className="mt-1">Apply</Button>
      </div>
    </div>
  );
};

const RecentApplicationItem = ({ title, company, date, status }: { title: string; company: string; date: string; status: 'applied' | 'interview' | 'offer' | 'rejected' }) => {
  const statusColors = {
    applied: 'bg-blue-500',
    interview: 'bg-amber-500',
    offer: 'bg-green-500',
    rejected: 'bg-red-500',
  };
  
  const statusLabels = {
    applied: 'Applied',
    interview: 'Interview',
    offer: 'Offer',
    rejected: 'Rejected',
  };
  
  return (
    <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-secondary/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground hidden md:inline">
          {date}
        </span>
        <Badge className={`${statusColors[status]}`}>
          {statusLabels[status]}
        </Badge>
      </div>
    </div>
  );
};

const ContactCard = ({ name, role, company, connected }: { name: string; role: string; company: string; connected: boolean }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <User className="h-8 w-8 text-primary" />
        </div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground mb-3">{company}</p>
        <Button variant={connected ? "outline" : "default"} size="sm" className="w-full">
          {connected ? "Message" : "Connect"}
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
