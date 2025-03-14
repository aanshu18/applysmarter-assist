
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResumeUpload from "./components/resume/ResumeUpload";
import CoverLetterGenerator from "./components/coverLetter/CoverLetterGenerator";
import ApplicationTracker from "./components/applications/ApplicationTracker";
import JobScraper from "./components/jobs/JobScraper";
import NetworkingMessages from "./components/networking/NetworkingMessages";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Wrap each page component with the Layout component */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/resume" element={<Layout><ResumeUpload /></Layout>} />
          <Route path="/cover-letter" element={<Layout><CoverLetterGenerator /></Layout>} />
          <Route path="/applications" element={<Layout><ApplicationTracker /></Layout>} />
          <Route path="/jobs" element={<Layout><JobScraper /></Layout>} />
          <Route path="/networking" element={<Layout><NetworkingMessages /></Layout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
