import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

export interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon?: string;
  title: string;
  date: string;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      icon = "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      title = "Title Section",
      date = "March 15, 2023",
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
          "flex flex-col justify-start gap-4 whitespace-nowrap w-full",
          className
        )}
        {...props}
      >
        {children}
        <h1 className="text-xl md:text-4xl leading-6 font-bold mt-0 mb-4 ">
          {title}
        </h1>
        <strong className="pb-4">{date}</strong>
      </div>
    );
  }
);
Header.displayName = "ArticleHeader";

export interface DescriptionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  description: string;
}

const Description = React.forwardRef<HTMLDivElement, DescriptionProps>(
  ({ className, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "flex flex-col gap-4 lg:grid lg:grid-flow-col w-full",
          className
        )}
      >
        <div className="">{description}</div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-2 gap-6 lg:col-span-1">
          {children}
        </div>
      </div>
    );
  }
);
Description.displayName = "Description";

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ArticleType
  extends React.ForwardRefExoticComponent<
    ArticleProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof Header;
  Description: typeof Description;
}

const Article = React.forwardRef<HTMLDivElement, ArticleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "text-primary flex flex-col gap-4 items-start my-24 w-full",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
) as ArticleType;

Article.displayName = "Article";
Article.Header = Header;
Article.Description = Description;

export default Article;
