
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, User, FileText, Search, List, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ to, icon: Icon, label, isActive }: { to: string; icon: any; label: string; isActive: boolean }) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          'flex items-center justify-start w-full gap-3 mb-1 transition-all duration-300',
          isActive
            ? 'bg-primary/10 text-primary hover:bg-primary/15'
            : 'hover:bg-secondary/80'
        )}
      >
        <Icon className={cn('h-4 w-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
        <span className={cn(isActive ? 'font-medium' : 'font-normal')}>{label}</span>
      </Button>
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/dashboard', icon: Database, label: 'Dashboard' },
    { to: '/resume', icon: FileText, label: 'Resume' },
    { to: '/cover-letter', icon: FileText, label: 'Cover Letter' },
    { to: '/applications', icon: Briefcase, label: 'Applications' },
    { to: '/jobs', icon: Search, label: 'Job Search' },
    { to: '/networking', icon: User, label: 'Networking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-border'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl animate-fade-in">JobFlow</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.to}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  'transition-all duration-300',
                  location.pathname === item.to && 'bg-primary/10 text-primary'
                )}
              >
                <Link to={item.to} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <Link to="/resume">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </Button>
          
          <Button className="hidden md:flex" asChild>
            <Link to="/applications">
              <Briefcase className="h-4 w-4 mr-2" />
              New Application
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t p-4 animate-in slide-in-from-top">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.to}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  'justify-start',
                  location.pathname === item.to && 'bg-primary/10 text-primary'
                )}
              >
                <Link to={item.to} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
            <div className="h-px bg-border my-2" />
            <Button size="sm" variant="outline" asChild className="justify-start">
              <Link to="/resume" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </Link>
            </Button>
            <Button size="sm" asChild className="justify-start">
              <Link to="/applications" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                New Application
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
