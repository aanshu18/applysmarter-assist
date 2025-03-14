
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Accelerate Your Job Search
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up animation-delay-100">
            Track applications, generate AI cover letters, and optimize your resume to land your dream job faster.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-200">
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/resume">
                Upload Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="p-6 border rounded-lg bg-card flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center animate-fade-up animation-delay-700">
          <Button size="lg" variant="outline" asChild>
            <Link to="/jobs">
              Explore Job Opportunities
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

const features = [
  {
    title: "Resume Optimization",
    description: "AI-powered tools to tailor your resume for specific job descriptions.",
    icon: FileText
  },
  {
    title: "Cover Letter Generation",
    description: "Create customized cover letters in seconds based on job listings.",
    icon: FileText
  },
  {
    title: "Application Tracking",
    description: "Keep track of all your job applications in one organized dashboard.",
    icon: Briefcase
  },
  {
    title: "Job Search Assistant",
    description: "Find relevant job opportunities from LinkedIn with our AI scraper.",
    icon: Search
  }
];

export default Index;
