import React, { ReactNode } from "react";
import { cn } from "../../utils";

const Component: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-around w-full overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Controllers: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  console.log(className);
  return (
    <div className={cn("flex flex-col gap-4 w-[256px]", className)} {...props}>
      {children}
    </div>
  );
};

interface ShowcaseWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

interface ShowcaseWrapperType {
  Component: typeof Component;
  Controllers: typeof Controllers;
}

const ShowcaseWrapper: React.FC<ShowcaseWrapperProps> & ShowcaseWrapperType = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex w-full justify-end items-center py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

ShowcaseWrapper.displayName = "ShowcaseWrapper";

// Attach sub-components
ShowcaseWrapper.Component = Component;
ShowcaseWrapper.Controllers = Controllers;

export default ShowcaseWrapper;
