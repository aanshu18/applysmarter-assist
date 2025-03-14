
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { FileText, Linkedin, Copy, Download } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const CoverLetterGenerator = () => {
  const [jobUrl, setJobUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!jobUrl.includes('linkedin.com/jobs')) {
      toast({
        title: "Invalid LinkedIn URL",
        description: "Please enter a valid LinkedIn job URL",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockCoverLetter = `Dear Hiring Manager,

I am writing to express my interest in the Software Developer position at Acme Corporation that I found on LinkedIn. With my background in full-stack development and passion for creating intuitive user experiences, I believe I would be an excellent fit for your team.

Throughout my career, I have focused on developing efficient, scalable applications using modern technologies. I particularly noted your requirement for experience with React and Node.js, which align perfectly with my technical expertise. At my previous role at TechStart Inc., I led the development of a customer portal that improved user engagement by 45% using these exact technologies.

I am particularly drawn to Acme's mission of making technology accessible to small businesses. As someone who has worked closely with startups, I appreciate the transformative impact that well-designed software can have on growing organizations.

I would welcome the opportunity to discuss how my skills and experience could benefit your team. Thank you for your consideration.

Sincerely,
John Doe`;

      setCoverLetter(mockCoverLetter);
      setIsGenerating(false);
      toast({
        title: "Cover Letter Generated",
        description: "Your AI-powered cover letter is ready to use",
      });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    toast({
      title: "Copied to clipboard",
      description: "Cover letter has been copied to your clipboard",
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([coverLetter], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'Cover_Letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast({
      title: "Downloaded",
      description: "Cover letter has been downloaded",
    });
  };

  return (
    <div className="space-y-6">
      <AnimatedCard variant="glass" className="w-full">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Generate Cover Letter</h3>
            <p className="text-sm text-muted-foreground">
              Paste a LinkedIn job link to create a tailored cover letter
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
              </div>
              <Input
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                placeholder="https://www.linkedin.com/jobs/view/..."
                className="pl-9"
              />
            </div>
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating || !jobUrl}
              className="min-w-[120px]"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>
      </AnimatedCard>

      {coverLetter && (
        <AnimatedCard variant="glass" className="w-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Your Cover Letter</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
                <Button size="sm" variant="outline" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <Textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="min-h-[400px] resize-none font-serif"
            />
          </div>
        </AnimatedCard>
      )}
    </div>
  );
};

export default CoverLetterGenerator;
