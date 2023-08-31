import React, { ReactNode } from "react";
import { cn } from "../../utils";
import { Select } from "@radix-ui/themes";

const Component: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center justify-around w-full overflow-auto"
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
  return (
    <div {...props} className={cn(className, "w-[256px]")}>
      
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

const ShowcaseWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex w-full justify-end items-center py-4">{children}</div>
  );
};

ShowcaseWrapper.Component = Component;
ShowcaseWrapper.Controllers = Controllers;

export default ShowcaseWrapper;

