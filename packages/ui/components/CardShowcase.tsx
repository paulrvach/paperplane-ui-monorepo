import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const cardShowcaseVariants = cva('inline-flex scroll-smooth gap-3 ', {
  variants: {
    direction: {
      horizontal: 'overflow-x-scroll snap-x snap-mandatory',
      vertical: 'flex flex-col overflow-y-scroll snap-y snap-mandatory',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});

const cardShowcaseItemVariants = cva('box-content flex flex-none snap-always', {
  variants: {
    align: {
      start: 'snap-start',
      center: 'snap-center',
      end: 'snap-end',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

export interface CardShowcaseProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardShowcaseVariants>,
    VariantProps<typeof cardShowcaseItemVariants> {
  href?: string;
}

const CardShowcase = React.forwardRef<HTMLDivElement, CardShowcaseProps>(
  // Destructure props and extract ref
  (
    {
      className,
      children,
      direction = 'horizontal',
      align = 'start',
      ...props
    },
    ref
  ) => {
    // Apply the 'cn' function if you intend to use it
    const combinedClassName = cn(
      cardShowcaseVariants({ direction, className })
    );

    return (
      <div
        ref={ref}
        className={combinedClassName}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          overflow: 'hidden',
        }}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <div className={cn(cardShowcaseItemVariants({ align }))}>{child}</div>
        ))}
      </div>
    );
  }
);
CardShowcase.displayName = 'CardShowcase';

export { CardShowcase, cardShowcaseVariants };
