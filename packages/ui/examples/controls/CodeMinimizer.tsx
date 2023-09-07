import React, { useState, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@radix-ui/themes";
import clsx from "clsx";
import { cn } from "../../utils";

// state determining if the code is collapsed or not
// ref to scroll up to the top of the code when collapsed
// button that will stay on to the bottom center of the screen and stick to the bottom of the div
// button will change from "show more" to "show less"
// on collapse scroll back up to ref

const CodeMinimizerVariants = cva("", {
  variants: {
    collapsed: {
      true: "h-48 overflow-hidden",
      false: "",
    },
  },
});

export interface CodeMinimizerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CodeMinimizerVariants> {
  isCollapsable: boolean;
}

const CodeMinimizer: React.FC<CodeMinimizerProps> = ({
  children,
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsCollapsed(!isCollapsed);
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can use 'start', 'end', 'center', or 'nearest'
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <div ref={ref} className="relative">
        <div
          className={clsx(
            "relative flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:transparent scrollbar-track:rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50",
            isCollapsed && "max-h-96"
          )}
        >
          {children}
        </div>
        <div
          className={clsx(
            "w-full p-4 grid place-items-center",
            !isCollapsed && "sticky bottom-0 "
          )}
        >
          <div
            className="absolute bottom-0 w-full h-48  rounded-b-lg bg-gradient-to-t from-background pointer-events-none"
          />
          <Button onClick={handleOnClick} variant="ghost" className="z-20">
            {isCollapsed ? "Show More" : "Collapse"}{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CodeMinimizer;
