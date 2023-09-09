import { type VariantProps, cva } from "class-variance-authority";
// import { cn } from "../utils";

const toolTipVariants = cva({});

export interface ToolTipProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolTipVariants> {
  // href?: string;
}

function Tooltip({...props}: ToolTipProps): JSX.Element {
  return <div {...props}>Tooltip</div>;
}

export { Tooltip, toolTipVariants };
