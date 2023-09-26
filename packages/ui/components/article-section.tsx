import {
  type HTMLAttributes,
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import { cn } from "../utils";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
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
        className={cn(
          "flex flex-col justify-start gap-4 whitespace-nowrap w-full",
          className
        )}
        ref={ref}
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

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>(
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

interface ArticleType
  extends ForwardRefExoticComponent<
    HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
  > {
  Header: typeof Header;
  Description: typeof Description;
}

const Article = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
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

export { Article };
