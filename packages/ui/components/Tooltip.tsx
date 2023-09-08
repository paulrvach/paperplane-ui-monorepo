import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const toolTipVariants = cva({});

export interface ToolTipProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolTipVariants> {
  // href?: string;
}

const Tooltip = (props: ToolTipProps) => {
  return <div>Tooltip</div>;
};

export { Tooltip, toolTipVariants };
