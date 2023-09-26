import {
  forwardRef,
  useState,
  type HTMLAttributes,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils";

const Tags = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn("flex gap-2 py-2 flex-wrap", className)}
      ref={ref}
      {...props}
    />
  )
);

Tags.displayName = "Tags";

const Title = forwardRef<HTMLDivElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => (
    <h3
      className={cn(
        "text-lg text-primary font-semibold leading-none tracking-tight my-2",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  )
);

Title.displayName = "Title";

const Description = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn("text-xs", className)} ref={ref} {...props} />
));

Description.displayName = "Description";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  href?: string;
  buttonText?: string;
  asChild?: boolean;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
  ({ asChild, href, className, buttonText, ...props }, ref) => {
    const [demo, setDemo] = useState(false);
    const Comp = asChild ? Slot : "img";

    const onHoverHandler = (): void => {
      setDemo(true);
    };

    const onLeaveHandler = (): void => {
      setDemo(false);
    };

    return (
      <div
        className={cn(
          "relative rounded-md transition-all overflow-hidden duration-200 hover:-translate-y-2 select-none ",
          className
        )}
        onFocus={onHoverHandler}
        onMouseLeave={onLeaveHandler}
        onMouseOver={onHoverHandler}
        ref={ref}
      >
        <Comp className="shadow hover:shadow-lg select-none" {...props} />
        {demo && href ? (
          <a
            className="absolute bottom-3 transition-all duration-100 right-1"
            href={href}
          >
            <button
              className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow  h-8 rounded-md px-3 text-xs"
              type="button"
            >
              {buttonText}
            </button>
          </a>
        ) : null}
      </div>
    );
  }
);

Image.displayName = "Image";

interface ArticleCardType
  extends ForwardRefExoticComponent<
    HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
  > {
  Tags: typeof Tags;
  Title: typeof Title;
  Description: typeof Description;
  Image: typeof Image;
}

const ArticleCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn("text-card-foreground w-full", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
) as ArticleCardType;

ArticleCard.displayName = "ArticleCard";
ArticleCard.Tags = Tags;
ArticleCard.Title = Title;
ArticleCard.Description = Description;
ArticleCard.Image = Image;
export { ArticleCard, Description, Image, Tags, Title };
export type { ArticleCardType, ImageProps };
