
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ApplicationCard from './ApplicationCard';
import { mockApplications } from './types';

const ApplicationsList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredApplications = mockApplications
    .filter((app) => activeTab === 'all' || app.status === activeTab)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <>
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
    </>
  );
};

export default ApplicationsList;
