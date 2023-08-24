import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const Article = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        className,
        'text-primary flex flex-col gap-4 items-start my-24'
      )}
      {...props}
      ref={ref}
    />
  );
});

Article.displayName = 'Article';

export interface ArticleHeaderProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon?: string;
  title: string;
  date: string;
}

const ArticleHeader = React.forwardRef<HTMLDivElement, ArticleHeaderProps>(
  (
    {
      icon = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      title = 'Title Section',
      date = 'March 15, 2023',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          className,
          'flex flex-col justify-start gap-4 whitespace-nowrap'
        )}
        {...props}
      >
        {children}
        <h1 className='text-xl md:text-4xl leading-6 font-bold mt-0 mb-4 '>
          {title}
        </h1>
        <strong className='pb-4'>{date}</strong>
      </div>
    );
  }
);
ArticleHeader.displayName = 'ArticleHeader';

export interface ArticleDescriptionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  position: string;
  responsibilities: string[];
  team: string[];
}

const ArticleDescription = React.forwardRef<
  HTMLDivElement,
  ArticleDescriptionProps
>(({ className, position, responsibilities, team, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        className,
        'flex flex-col gap-4 lg:grid lg:grid-flow-col'
      )}
    >
      <div className=''>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:col-span-1'>
        <div>
          <strong className='text-justify tracking-wider'>POSITION</strong>
          <p className='pt-2'>{position}</p>
        </div>
        <div>
          <strong className='text-justify tracking-wider'>
            RESPONSABILITIES
          </strong>
          {responsibilities.map((response) => (
            <p className='pt-2' key={response}>
              {response}
            </p>
          ))}
        </div>
        <div>
          <strong className='text-justify tracking-wider'>TEAM</strong>
          {team.map((teammate) => (
            <p className='pt-2' key={teammate}>
              {teammate}
            </p>
          ))}
        </div>
        <div>
          <strong className='text-justify tracking-wider'>TEAM</strong>
          {team.map((teammate) => (
            <p className='pt-2' key={teammate}>
              {teammate}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
});
ArticleDescription.displayName = 'ArticleDescription';
export { Article, ArticleDescription, ArticleHeader };
