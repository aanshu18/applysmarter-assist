
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FileText, Briefcase, Linkedin, MoreHorizontal } from 'lucide-react';
import { Application, statusColors, statusLabels } from './types';

interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard = ({ application }: ApplicationCardProps) => {
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

export default ApplicationCard;
