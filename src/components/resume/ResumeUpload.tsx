
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface ResumeUploadProps {
  onUpload?: (file: File) => void;
}

const ResumeUpload = ({ onUpload }: ResumeUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      if (onUpload) onUpload(selectedFile);
      toast({
        title: "Resume uploaded",
        description: "Your resume has been uploaded successfully",
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      setFile(droppedFile);
      if (onUpload) onUpload(droppedFile);
      toast({
        title: "Resume uploaded",
        description: "Your resume has been uploaded successfully",
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <AnimatedCard variant="glass" className="w-full">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium">Upload Resume</h3>
        <p className="text-sm text-muted-foreground">Upload your resume in PDF format</p>
      </div>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          isDragging ? 'border-primary bg-primary/5' : 'border-muted'
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf"
        />
        
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse-soft">
            <Upload className="h-6 w-6" />
          </div>
          <div className="mt-2">
            <p className="font-medium">
              {file ? file.name : 'Drag & drop your resume here'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : 'Supports PDF up to 10MB'}
            </p>
          </div>
          <Button variant="outline" size="sm" className="mt-4" onClick={(e) => e.stopPropagation()}>
            {file ? 'Replace File' : 'Browse Files'}
          </Button>
        </div>
      </div>
      
      {file && (
        <div className="mt-4 border rounded-md p-3 flex items-center justify-between animate-slide-up">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <Button size="sm" variant="outline" onClick={() => setFile(null)}>
            Remove
          </Button>
        </div>
      )}
    </AnimatedCard>
  );
};

export default ResumeUpload;
