
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'glass' | 'neo';
  hoverEffect?: boolean;
  delayAnimation?: number;
}

const AnimatedCard = ({
  children,
  header,
  footer,
  className,
  variant = 'default',
  hoverEffect = true,
  delayAnimation = 0,
  ...props
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: 'bg-card text-card-foreground shadow-sm',
    glass: 'glassmorphism',
    neo: 'neomorphism'
  };

  return (
    <Card
      className={cn(
        variantStyles[variant],
        'animate-scale-in',
        hoverEffect && 'hover-scale',
        isHovered && 'ring-1 ring-primary/20',
        className
      )}
      style={{ animationDelay: `${delayAnimation}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default AnimatedCard;
