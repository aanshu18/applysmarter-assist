
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, MapPin, Briefcase, Calendar, ExternalLink, BookmarkPlus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import AnimatedCard from '@/components/ui/AnimatedCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  posted: string;
  url: string;
  logo: string;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a frontend developer with experience in React, TypeScript, and modern web technologies...',
    posted: '2 days ago',
    url: 'https://linkedin.com/jobs/view/123',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: '$130,000 - $160,000',
    description: 'Join our team to build scalable, reliable, and maintainable software systems...',
    posted: '3 days ago',
    url: 'https://linkedin.com/jobs/view/456',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: '$140,000 - $170,000',
    description: 'Build and maintain efficient, reusable, and reliable code. Design and implement low-latency, high-availability applications...',
    posted: '1 week ago',
    url: 'https://linkedin.com/jobs/view/789',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  },
  {
    id: '4',
    title: 'UI Developer',
    company: 'Apple',
    location: 'Cupertino, CA',
    salary: '$125,000 - $155,000',
    description: 'Design and build innovative user interfaces for our next-generation products...',
    posted: '5 days ago',
    url: 'https://linkedin.com/jobs/view/101',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
  },
];

const JobScraper = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const { toast } = useToast();

  const handleSearch = () => {
    if (!query) {
      toast({
        title: "Search query required",
        description: "Please enter a job title, skill, or company",
        variant: "destructive",
      });
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setJobs(mockJobs);
      setIsSearching(false);
      toast({
        title: "Jobs found",
        description: `Found ${mockJobs.length} jobs matching your criteria`,
      });
    }, 1500);
  };

  const handleSaveJob = (jobId: string) => {
    toast({
      title: "Job saved",
      description: "This job has been added to your wishlist",
    });
  };

  return (
    <div className="space-y-6">
      <AnimatedCard variant="glass" className="w-full">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Find LinkedIn Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Search and scrape LinkedIn job postings
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-3">
            <div className="relative flex-1 w-full">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="h-4 w-4" />
              </div>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill, or company"
                className="pl-9 w-full"
              />
            </div>
            
            <div className="relative flex-1 w-full">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
              </div>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, state, or remote"
                className="pl-9 w-full"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <Button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full md:w-auto min-w-[120px]"
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <Select defaultValue="date">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="salary">Salary</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {jobs.length > 0 && (
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onSave={handleSaveJob} />
          ))}
        </div>
      )}

      {isSearching && (
        <div className="text-center py-8 animate-pulse">
          <p className="text-muted-foreground">Searching for jobs...</p>
        </div>
      )}

      {!isSearching && jobs.length === 0 && query && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No jobs found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

const JobCard = ({ job, onSave }: { job: Job; onSave: (id: string) => void }) => {
  return (
    <AnimatedCard variant="glass" className="w-full hover-scale">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border">
              <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-muted-foreground">{job.company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-normal">
              {job.posted}
            </Badge>
            <Button size="sm" variant="outline" onClick={() => onSave(job.id)}>
              <BookmarkPlus className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span>{job.salary}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{job.posted}</span>
          </div>
        </div>
        
        <p className="text-sm">{job.description.substring(0, 150)}...</p>
        
        <div className="flex justify-between items-center pt-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              View on LinkedIn
            </a>
          </Button>
          
          <div className="flex items-center gap-2">
            <Button size="sm">Apply</Button>
            <Button size="sm" variant="outline">Generate Cover Letter</Button>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default JobScraper;
