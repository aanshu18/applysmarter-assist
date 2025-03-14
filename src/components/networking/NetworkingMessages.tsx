
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { Copy, RefreshCcw, Send, Linkedin } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const NetworkingMessages = () => {
  const [recipientRole, setRecipientRole] = useState('');
  const [messageType, setMessageType] = useState('connection');
  const [companyName, setCompanyName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!recipientRole) {
      toast({
        title: "Recipient role required",
        description: "Please enter the role of the person you're messaging",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      let generatedMessage = '';
      
      if (messageType === 'connection') {
        generatedMessage = `Hi there,

I noticed your profile and I'm impressed by your experience as a ${recipientRole}${companyName ? ` at ${companyName}` : ''}. I'm currently working as a developer with expertise in React and TypeScript.

I'd love to connect and possibly learn more about your work in the tech industry. Perhaps we could share insights about current trends and opportunities.

Looking forward to connecting!

Best regards,
[Your Name]`;
      } else if (messageType === 'informational') {
        generatedMessage = `Hello,

I hope this message finds you well. I've been following your work as a ${recipientRole}${companyName ? ` at ${companyName}` : ''} and I'm quite impressed with your accomplishments.

I'm reaching out to see if you might be open to a brief 15-minute call for an informational interview. I'm particularly interested in learning more about [specific aspect of their work/company] and would greatly value your insights.

I understand you're busy, so even a short conversation would be incredibly helpful. Could we potentially connect sometime in the next few weeks?

Thank you for considering, and I look forward to hearing from you.

Best regards,
[Your Name]`;
      } else if (messageType === 'referral') {
        generatedMessage = `Hello,

I hope you're doing well. I've been researching ${companyName || 'your company'} and am very impressed with the innovative work your team is doing.

I recently applied for the [Position Name] role, and I'm reaching out because I believe my background in [relevant skills] aligns well with what you're looking for. I'm particularly excited about [specific company project or value].

Would you be open to referring me for this position or connecting me with the hiring manager? I've attached my resume for your reference and would be happy to provide any additional information.

Thank you for your consideration. I appreciate any guidance you can offer.

Best regards,
[Your Name]`;
      }
      
      setMessage(generatedMessage);
      setIsGenerating(false);
      toast({
        title: "Message generated",
        description: "Your networking message is ready to use",
      });
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast({
      title: "Copied to clipboard",
      description: "Message has been copied to your clipboard",
    });
  };

  return (
    <div className="space-y-6">
      <AnimatedCard variant="glass" className="w-full">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Generate Networking Message</h3>
            <p className="text-sm text-muted-foreground">
              Create personalized networking messages for LinkedIn
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="recipient-role">Recipient's Role</Label>
              <Input
                id="recipient-role"
                value={recipientRole}
                onChange={(e) => setRecipientRole(e.target.value)}
                placeholder="E.g., Senior Software Engineer"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name (Optional)</Label>
              <Input
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="E.g., Google"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message-type">Message Type</Label>
            <Select value={messageType} onValueChange={setMessageType}>
              <SelectTrigger id="message-type">
                <SelectValue placeholder="Select message type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="connection">Connection Request</SelectItem>
                <SelectItem value="informational">Informational Interview</SelectItem>
                <SelectItem value="referral">Job Referral Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !recipientRole}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Message"}
          </Button>
        </div>
      </AnimatedCard>

      {message && (
        <AnimatedCard variant="glass" className="w-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Your LinkedIn Message</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
                <Button size="sm" variant="outline" onClick={handleGenerate}>
                  <RefreshCcw className="h-4 w-4 mr-1" />
                  Regenerate
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[300px] resize-none"
            />
            
            <div className="flex justify-end">
              <Button>
                <Send className="h-4 w-4 mr-1" />
                Send on LinkedIn
              </Button>
            </div>
          </div>
        </AnimatedCard>
      )}
    </div>
  );
};

export default NetworkingMessages;
