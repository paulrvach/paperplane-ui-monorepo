import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';
import gsap from 'gsap';

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

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export interface BadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  length: number;
}

const Badges = React.forwardRef<HTMLDivElement, BadgesProps>(
  ({ children, className, length, ...props }, ref) => {
    const [opened, setOpened] = React.useState(false);
    const [shortened, setShortened] = React.useState<React.ReactNode[]>(
      React.Children.toArray(children)
    );

    const elements = React.useRef<HTMLDivElement[]>([]);

    const animateChildren = () => {
      const animations = gsap.timeline({
        defaults: {
          duration: 0.1,
          scaleY: 0.1,
        },
      });
      elements.current.slice(length).forEach((element, index) => {
        animations.from(element, {
          stagger: 0.3,
          opacity: 0,
          y: '+=15',
          ease: 'circ',
        });
      });
    };

    // iterates through the children and displays all of them plus show less badge
    const handleShowMore = () => {
      if (Array.isArray(children)) setShortened([...children]);
      setOpened(true);
    };

    const shortenChildren = () => {
      if (Array.isArray(children) && children.length > length) {
        const reactNodeArray = children.slice(0, length);
        setShortened([...reactNodeArray]);
      } else if (Array.isArray(children) && children.length < length) {
        setShortened(React.Children.toArray(children));
      }
      setOpened(false);
    };

    React.useEffect(() => {
      shortenChildren();
    }, [children, length]);

    React.useEffect(() => {
      opened && animateChildren();
    }, [shortened]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(className, 'flex gap-2 flex-wrap')}
      >
        {shortened.map((node, index) => (
          <div key={index} ref={(el) => (elements.current[index] = el)}>
            {node}
          </div>
        ))}
        {shortened.length === React.Children.toArray(children).length ? (
          <Badge
            children='Show Less'
            variant={'outline'}
            onClick={shortenChildren}
          />
        ) : (
          <Badge
            children='Show More'
            variant={'outline'}
            onClick={handleShowMore}
          />
        )}
      </div>
    );
  }
);

export { Badge, Badges, badgeVariants };
