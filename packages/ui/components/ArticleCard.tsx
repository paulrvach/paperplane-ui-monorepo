import React from 'react';
import { Button } from './Button';
import { cn } from '../utils';

const ArticleCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl text-card-foreground max-w-sm', className)}
    {...props}
  />
));
ArticleCard.displayName = 'Card';

const ArticleCardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2 py-2', className)} {...props} />
));

const ArticleCardTitle = React.forwardRef<
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

const ArticleCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn('text-xs', className)} ref={ref} {...props} />
));

export interface ArticleCardImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  href: string;
  buttonText: string
}

const ArticleCardImage = React.forwardRef<HTMLDivElement, ArticleCardImageProps>(
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
  ArticleCard,
  ArticleCardDescription,
  ArticleCardImage,
  ArticleCardTags,
  ArticleCardTitle,
};
