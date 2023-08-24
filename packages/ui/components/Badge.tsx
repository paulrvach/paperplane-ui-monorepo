import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const badgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 rounded-md',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 rounded-md',
        outline: 'text-foreground rounded-md border-2',
        round:
          'bg-primary text-primary-foreground rounded-full hover:bg-primary/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// TODO: multiple badges animted in

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface BadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  length: number;
}

const Badges = React.forwardRef<HTMLDivElement, BadgesProps>(
  ({ children, className, length, ...props }, ref) => {
    const [shortend, setShortend] = React.useState<
      React.ReactNode[] | React.ReactNode
    >(children);

    // iterates through the children and displays all of them plus show less badge
    const handleShowMore = () => {
      if (Array.isArray(children))
        setShortend([
          ...children,
          <Badge
            children='Show Less'
            variant={'outline'}
            onClick={shortenChildren}
          />,
        ]);
    };

    // iterate through the len
    const shortenChildren = () => {
      if (Array.isArray(children) && children.length > length) {
        const reactNodeArray = [];
        // iterate to the length of the children
        for (let i = 0; i < length; i++) {
          reactNodeArray.push(children[i]);
        }
        // render to the dom only those badges + show more badge
        setShortend([
          ...reactNodeArray,
          <Badge
            children='Show More'
            variant={'outline'}
            onClick={handleShowMore}
          />,
        ]);
      } else if (Array.isArray(children) && children.length < length) {
        setShortend(children);
      }
    };

    React.useEffect(() => {
      shortenChildren();
    }, [children, length]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(className, 'flex gap-2 flex-wrap')}
      >
        {shortend}
      </div>
    );
  }
);

export { Badge, Badges, badgeVariants };
