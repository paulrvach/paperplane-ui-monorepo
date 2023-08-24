import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { Button } from './Button';

import { cn } from '../utils';

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl text-card-foreground max-w-sm', className)}
    {...props}
  />
));
ProjectCard.displayName = 'Card';

const ProjectTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2 py-2', className)} {...props} />
));

const ProjectTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg text-primary font-semibold leading-none tracking-tight my-2',
      className
    )}
    {...props}
  />
));

const ProjectDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn('text-xs', className)} ref={ref} {...props} />
));

export interface ProjectImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  href: string;
  buttonText: string
}

const ProjectImage = React.forwardRef<HTMLDivElement, ProjectImageProps>(
  ({ src, alt, href, className, buttonText = "Website",...props }, ref) => {
    const [demo, setDemo] = React.useState(false);

    const onHoverHander = () => {
      setDemo(true);
    };

    const onLeaveHandler = () => {
      setDemo(false);
    };

    return (
      <div
        className={cn(
          'relative rounded-md transition-all overflow-hidden duration-200 hover:-translate-y-2 ',
          className
        )}
        onMouseOver={onHoverHander}
        onMouseLeave={onLeaveHandler}
        ref={ref}
        {...props}
      >
        <img src={src} alt={alt} className='shadow hover:shadow-lg'/>
        {demo && (
          <a
            href={href}
            className='absolute bottom-3 transition-all duration-100 right-1'
          >
            <Button variant={'default'}>{buttonText}</Button>
          </a>
        )}
      </div>
    );
  }
);

export {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectTags,
  ProjectTitle,
};
