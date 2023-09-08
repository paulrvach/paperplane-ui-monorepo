import React, {
  useLayoutEffect,
  useRef,
  type ReactElement,
  type HtmlHTMLAttributes,
  useState,
  Children,
} from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { cn } from "../utils";

// applicable variants gap, how many cards fit on screen?, scrub,

const carouselVariants = cva("inline-flex flex scroll-smooth gap-3 w-full", {
  variants: {
    direction: {
      horizontal: "overflow-x-scroll snap-x snap-mandatory",
      vertical: "flex flex-col overflow-y-scroll snap-y snap-mandatory",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

const carouselItemVariants = cva("box-content flex flex-none snap-always", {
  variants: {
    align: {
      start: "snap-start",
      center: "snap-center",
      end: "snap-end",
    },
    cardWidth: {
      sm: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5",
      md: "w-full md:w-1/2 lg:w-1/3 2xl:w-1/4",
      lg: "w-full lg:w-1/2 2xl:w-1/3",
    },
  },
  defaultVariants: {
    align: "center",
    cardWidth: "md",
  },
});

export interface CarouselProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants>,
    VariantProps<typeof carouselItemVariants> {
  href?: string;
  scrub?: boolean;
}

function Carousel({
  className,
  children,
  direction,
  align,
  scrub = false,
  cardWidth,
  ...props
}: CarouselProps): ReactElement {
  const parentDiv = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const combinedClassName = cn(carouselVariants({ direction, className }));

  const handlePreviousClick = (): void => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1; // Calculate the previous slide index
      setCurrentSlide(prevSlide);

      const element = document.getElementById(`slide${prevSlide}`);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // or 'center' if you prefer
        inline: align as never,
      });
    }
  };

  const handleNextClick = (): void => {
    let nextSlide = currentSlide;
    if (currentSlide < elements.current.length - 1) {
      nextSlide += 1;
    } else {
      nextSlide = 0; // Revert to the first card
    }

    setCurrentSlide(nextSlide);

    const element = document.getElementById(`slide${nextSlide}`);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest", // or 'center' if you prefer
      inline: "start",
    });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(elements.current, {
        y: "+=600",
        stagger: 0.2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: parentDiv.current,
          start: "-=500",
          end: "top top",
          scrub,
        },
      });
    }, elements);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flex h-fit gap-2 justify-end align-middle ">
        <button
          className="border-2 border-border cursor-pointer rounded-full flex items-center justify-center p-1"
          onClick={handlePreviousClick}
          onKeyDown={handlePreviousClick}
          type="button"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
        <button
          className="border-2 border-border cursor-pointer rounded-full flex items-center justify-center p-1"
          onClick={handleNextClick}
          onKeyDown={handleNextClick}
          type="button"
        >
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div
        className={combinedClassName}
        ref={parentDiv}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          overflow: "hidden",
        }}
        {...props}
      >
        {Children.map(children, (child, index) => (
          <div
            className={cn(carouselItemVariants({ align, cardWidth }))}
            id={`slide${index}`}
            key={child?.toLocaleString()}
            ref={(ele): void => (elements.current[index] = ele as never)}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}

Carousel.displayName = "Carousel";

export { Carousel, carouselVariants, carouselItemVariants };
