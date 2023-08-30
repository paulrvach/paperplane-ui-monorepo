import React, { useLayoutEffect, useRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// applicable variants gap, how many cards fit on screen?, scrub,

const cardShowcaseVariants = cva(
  'inline-flex flex scroll-smooth gap-3 w-full',
  {
    variants: {
      direction: {
        horizontal: 'overflow-x-scroll snap-x snap-mandatory',
        vertical: 'flex flex-col overflow-y-scroll snap-y snap-mandatory',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
    },
  }
);

const cardShowcaseItemVariants = cva('box-content flex flex-none snap-always', {
  variants: {
    align: {
      start: 'snap-start',
      center: 'snap-center',
      end: 'snap-end',
    },
    cardWidth: {
      sm: 'w-full sm:w-1/2 md:w-1/4 lg:w-1/5 2xl:w-1/6',
      md: 'w-full md:w-1/2 lg:w-1/3 2xl:w-1/5',
      lg: 'w-full lg:w-1/2 2xl:w-1/4',
    },
  },
  defaultVariants: {
    align: 'center',
    cardWidth: 'md',
  },
});

export interface CardShowcaseProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardShowcaseVariants>,
    VariantProps<typeof cardShowcaseItemVariants> {
  href?: string;
  scrub?: boolean;
}

const CardShowcase: React.FC<CardShowcaseProps> = ({
  className,
  children,
  direction,
  align,
  scrub = false,
  cardWidth,
  ...props
}) => {
  const parentDiv = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLDivElement[]>([]);

  const combinedClassName = cn(cardShowcaseVariants({ direction, className }));
  let currentSlide = 0;

  const handlePreviousClick = () => {
    if (currentSlide > 0) {
      // Ensure you don't go below the first slide
      currentSlide = currentSlide - 1;
      const element = document.getElementById(`slide${currentSlide}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // or 'center' if you prefer
        inline: 'start',
      });
      console.log(currentSlide);
    }
  };

  const handleNextClick = () => {
    if (currentSlide < elements.current.length - 1) {
      // Ensure you don't go past the last slide
      currentSlide = currentSlide + 1;
      const element = document.getElementById(`slide${currentSlide}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // or 'center' if you prefer
        inline: 'start',
      });
      console.log(currentSlide);
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(elements.current, {
        y: '+=600',
        stagger: 0.2,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: parentDiv?.current,
          start: '-=500',
          end: 'top top',
          scrub: scrub,
        },
      });
    }, elements);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className='flex h-fit gap-2 justify-end align-middle'>
        <div
          className='border-2 border-border cursor-pointer rounded-full flex items-center justify-center p-1'
          onClick={handlePreviousClick}
        >
          <ArrowLeftIcon className='w-4 h-4' />
        </div>
        <div
          className='border-2 border-border cursor-pointer rounded-full flex items-center justify-center p-1'
          onClick={handleNextClick}
        >
          <ArrowRightIcon className='w-4 h-4' />
        </div>
      </div>
      <div
        ref={parentDiv}
        className={combinedClassName}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          overflow: 'hidden',
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={cn(cardShowcaseItemVariants({ align, cardWidth }))}
            ref={(ele) => (elements.current[index] = ele as never)}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
CardShowcase.displayName = 'CardShowcase';

export { CardShowcase, cardShowcaseVariants };
