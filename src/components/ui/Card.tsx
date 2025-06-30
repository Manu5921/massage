'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'gradient' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  motionProps?: MotionProps;
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md',
    hover = true,
    motionProps,
    children,
    ...props 
  }, ref) => {
    const baseClasses = [
      'relative overflow-hidden transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    ];

    const variantClasses = {
      default: [
        'bg-white border border-neutral-200',
        'shadow-sm hover:shadow-md',
      ],
      elevated: [
        'bg-white border border-neutral-100',
        'shadow-lg hover:shadow-xl',
        'hover:-translate-y-1',
      ],
      glass: [
        'glass backdrop-blur-md',
        'border border-white/20',
        'shadow-glass',
      ],
      gradient: [
        'bg-gradient-to-br from-primary-50 to-secondary-50',
        'border border-primary-100',
        'shadow-md hover:shadow-lg',
      ],
      bordered: [
        'bg-white border-2 border-primary-200',
        'hover:border-primary-300',
        'shadow-sm hover:shadow-md',
      ],
    };

    const sizeClasses = {
      sm: 'rounded-lg p-4',
      md: 'rounded-xl p-6',
      lg: 'rounded-2xl p-8',
    };

    const hoverClasses = hover ? [
      'cursor-pointer',
      'group',
    ] : [];

    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, ease: 'easeOut' as const },
      ...(hover && {
        whileHover: { 
          scale: 1.02,
          transition: { duration: 0.2 }
        },
        whileTap: { 
          scale: 0.98,
          transition: { duration: 0.1 }
        },
      }),
      ...motionProps,
    };

    const { children: _children, ...finalMotionProps } = defaultMotionProps;
    
    return (
      <motion.div
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          hoverClasses,
          className
        )}
        ref={ref}
        {...finalMotionProps}
        {...(props as any)}
      >
        {/* Background Pattern for Glass Variant */}
        {variant === 'glass' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        )}

        {/* Shimmer Effect for Elevated Cards */}
        {hover && variant === 'elevated' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Border Glow Effect */}
        {hover && (variant === 'gradient' || variant === 'bordered') && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  motionProps?: MotionProps;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, motionProps, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: 0.1 },
      ...motionProps,
    };

    return (
      <motion.div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 pb-4', className)}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Title Component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  motionProps?: MotionProps;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, motionProps, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.3, delay: 0.15 },
      ...motionProps,
    };

    return (
      <motion.h3
        ref={ref}
        className={cn('font-serif text-xl font-semibold leading-none tracking-tight text-neutral-900', className)}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {children}
      </motion.h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

// Card Description Component
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  motionProps?: MotionProps;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, motionProps, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: 0.2 },
      ...motionProps,
    };

    return (
      <motion.p
        ref={ref}
        className={cn('text-sm text-neutral-600 leading-relaxed', className)}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {children}
      </motion.p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

// Card Content Component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  motionProps?: MotionProps;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, motionProps, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: 0.25 },
      ...motionProps,
    };

    return (
      <motion.div
        ref={ref}
        className={cn('pt-0', className)}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

CardContent.displayName = 'CardContent';

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  motionProps?: MotionProps;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, motionProps, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: 0.3 },
      ...motionProps,
    };

    return (
      <motion.div
        ref={ref}
        className={cn('flex items-center pt-4', className)}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  type CardProps 
};