import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
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
  stagger?: number;
}

const Badges = forwardRef<HTMLDivElement, BadgesProps>(
  ({ children, className, length, stagger, ...props }, ref) => {
    const [opened, setOpened] = useState(false);
    const [shortened, setShortened] = useState<React.ReactNode[]>([]);
    const elements = useRef<HTMLDivElement[] >([]);

    const animateChildren = () => {
      const animations = gsap.timeline({
        defaults: {
          duration: 0.1,
          scaleY: 0.1,
        },
      });
      elements.current.slice(length).forEach((element, index) => {
        animations.from(element, {
          stagger: stagger,
          opacity: 0,
          y: '+=15',
          ease: 'circ',
        });
      });
    };

    const handleShowMore = () => {
      setShortened(React.Children.toArray(children));
      setOpened(true);
    };

    const shortenChildren = () => {
      const reactNodeArray = React.Children.toArray(children);
      if (reactNodeArray.length > length) {
        setShortened(reactNodeArray.slice(0, length));
      } else {
        setShortened(reactNodeArray);
      }
      setOpened(false);
    };

    useEffect(() => {
      shortenChildren();
    }, [children, length]);

    useEffect(() => {
      if (opened) {
        animateChildren();
      }
    }, [opened]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(className, 'flex gap-1 flex-wrap')}
      >
        {shortened.map((node, index) => (
          <div key={index} ref={(el) => (elements.current[index] = el as never)}>
            {node}
          </div>
        ))}
        {shortened.length === React.Children.toArray(children).length ? (
          shortened.length <= length ? null : (
            <Badge variant={'outline'} onClick={shortenChildren}   className="relative group"
            >
              {' '}
              {'Show Less'} <ChevronUpIcon className='w-4 h-4 transform group-hover:rotate-180 transition duration-300'/>
            </Badge>
          )
        ) : (
          <Badge variant={'outline'} onClick={handleShowMore} className='relative group'>
            {'Show More'}<ChevronDownIcon className='w-4 h-4'/>
          </Badge>
        )}
      </div>
    );
  }
);

export { Badge, Badges, badgeVariants };
