'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  motionProps?: MotionProps;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  name?: string;
  value?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    asChild = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    motionProps,
    children,
    disabled,
    onClick,
    type,
    form,
    name,
    value
  }, ref) => {

    const baseClasses = [
      // Base styles
      'relative inline-flex items-center justify-center',
      'font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'overflow-hidden group',
      
      // Border radius
      'rounded-xl',
    ];

    const variantClasses = {
      primary: [
        'bg-gradient-to-r from-primary-500 to-primary-600',
        'text-white shadow-lg shadow-primary-500/25',
        'hover:from-primary-600 hover:to-primary-700',
        'hover:shadow-xl hover:shadow-primary-500/30',
        'focus-visible:ring-primary-500',
        'active:scale-[0.98] active:shadow-md',
      ],
      secondary: [
        'bg-gradient-to-r from-secondary-400 to-secondary-500',
        'text-neutral-800 shadow-lg shadow-secondary-400/25',
        'hover:from-secondary-500 hover:to-secondary-600',
        'hover:shadow-xl hover:shadow-secondary-400/30',
        'focus-visible:ring-secondary-500',
        'active:scale-[0.98] active:shadow-md',
      ],
      accent: [
        'bg-gradient-to-r from-accent-500 to-accent-600',
        'text-white shadow-lg shadow-accent-500/25',
        'hover:from-accent-600 hover:to-accent-700',
        'hover:shadow-xl hover:shadow-accent-500/30',
        'focus-visible:ring-accent-500',
        'active:scale-[0.98] active:shadow-md',
      ],
      outline: [
        'border-2 border-primary-500 bg-transparent',
        'text-primary-600 hover:bg-primary-50',
        'hover:border-primary-600 hover:text-primary-700',
        'focus-visible:ring-primary-500',
        'active:bg-primary-100',
      ],
      ghost: [
        'bg-transparent text-neutral-700',
        'hover:bg-neutral-100 hover:text-neutral-900',
        'focus-visible:ring-neutral-400',
        'active:bg-neutral-200',
      ],
      glass: [
        'glass backdrop-blur-md',
        'text-neutral-800 border border-white/20',
        'hover:bg-white/20 hover:border-white/30',
        'focus-visible:ring-white/50',
        'shadow-glass',
      ],
    };

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
      xl: 'h-14 px-8 text-lg gap-3',
    };

    const iconSizeClasses = {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
    };

    const shimmerVariants = {
      initial: { x: '-100%' },
      hover: { 
        x: '100%',
        transition: { 
          duration: 0.6, 
          ease: 'easeInOut' as const 
        }
      },
    };

    const defaultMotionProps: MotionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 17 },
      ...motionProps,
    };

    const baseClassName = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const buttonProps = {
      className: baseClassName,
      disabled: disabled || isLoading,
      onClick,
      type,
      form,
      name,
      value
    };

    if (asChild) {
      return (
        <Slot
          ref={ref}
          {...buttonProps}
        >
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        {...buttonProps}
        {...defaultMotionProps}
      >
        {/* Shimmer Effect */}
        {(variant === 'primary' || variant === 'accent') && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            whileHover="hover"
          />
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <motion.div
            className={cn('animate-spin rounded-full border-2 border-current border-t-transparent', iconSizeClasses[size])}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Left Icon */}
        {leftIcon && !isLoading && (
          <motion.span
            className={cn('flex-shrink-0', iconSizeClasses[size])}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {leftIcon}
          </motion.span>
        )}

        {/* Children */}
        {!isLoading && (
          <motion.span
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        )}

        {/* Right Icon */}
        {rightIcon && !isLoading && (
          <motion.span
            className={cn('flex-shrink-0', iconSizeClasses[size])}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {rightIcon}
          </motion.span>
        )}

        {/* Ripple Effect Container */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps };