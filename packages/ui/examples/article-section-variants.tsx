import { useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";
import { Heading, Text } from "@radix-ui/themes";
import Article from "../components/article-section";
import ShowcaseWrapper from "./controls/component-showcase-wrapper";

function ArticleSectionVariants(): JSX.Element {
  const title = useRef(null);
  const icon = useRef(null);
  const descriptionRefs = useRef<HTMLDivElement[] | null[]>([]);
  const animInRefs = useRef<HTMLDivElement[] | null[]>([]);
  const description =
    "React is a popular JavaScript library widely used for building user interfaces in web applications. Developed by Facebook, React allows developers to create reusable UI components that efficiently update and render as data changes. Its declarative approach and Virtual DOM system enhance performance by minimizing direct manipulation of the actual DOM. This makes React a powerful tool for creating interactive, responsive, and maintainable web experiences.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(title.current, {
        x: "-=200",
      });
      gsap.from(icon.current, {
        y: "+=200",
        opacity: 0,
        delay: 0.3,
      });

      gsap.from(
        descriptionRefs.current.map((ref) => ref),
        {
          stagger: 0.1,
          y: "+=50",
          opacity: 0,
          delay: 0.3,
        }
      );
      gsap.from(
        animInRefs.current.map((ref) => ref),
        {
          stagger: 0.1,
          x: "-=50",
          opacity: 0,
        }
      );
    });

    return () => ctx.revert();
  });

  return (
    <ShowcaseWrapper className="my-0">
      <ShowcaseWrapper.Component className=" px-4 my-0">
        <Article className="">
          <Article.Header
            date="August 31, 2023"
            ref={title}
            title="Article Title"
          >
            <div className=" overflow-hidden">
              <img
                alt="img"
                ref={icon}
                src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
                style={{ height: "64px", width: "64px" }}
              />
            </div>
          </Article.Header>
          <Article.Description
            className="w-full"
            description={description}
            ref={(el): void => {
              animInRefs.current[0] = el;
            }}
          >
            <div>
              <Heading as="h3" className="pb-2" size="5">
                Frontend Team
              </Heading>
              <div
                className="flex flex-col gap-1"
                ref={(el): void => {
                  descriptionRefs.current[0] = el;
                }}
              >
                <Text size="1">Emily Johnson</Text>
                <Text size="1">Alexander Martinez</Text>
                <Text size="1">Lisa Thompson</Text>
                <Text size="1">Michael Davis</Text>
                <Text size="1">Olivia Rodriguez</Text>
              </div>
            </div>
            <div>
              <Heading
                as="h3"
                className="pb-2"
                ref={(el): void => {
                  animInRefs.current[1] = el;
                }}
                size="5"
              >
                Backend Team
              </Heading>
              <div
                className="flex flex-col gap-1"
                ref={(el): void => {
                  descriptionRefs.current[1] = el;
                }}
              >
                <Text size="1">Daniel Williams</Text>
                <Text size="1">Sophia Anderson</Text>
                <Text size="1">David Martinez</Text>
                <Text size="1">Isabella Johnson</Text>
                <Text size="1">Jackson Brown</Text>
              </div>
            </div>
            <div>
              <Heading
                as="h3"
                className="pb-2"
                ref={(el): void => {
                  animInRefs.current[2] = el;
                }}
                size="5"
              >
                DevOps Team
              </Heading>
              <div
                className="flex flex-col gap-1"
                ref={(el): void => {
                  descriptionRefs.current[2] = el;
                }}
              >
                <Text size="1">Ethan Smith</Text>
                <Text size="1">Ava Wilson</Text>
                <Text size="1">William Garcia</Text>
                <Text size="1">Emma Davis</Text>
                <Text size="1">Liam Martin</Text>
              </div>
            </div>
            <div>
              <Heading
                as="h3"
                className="pb-2"
                ref={(el): void => {
                  animInRefs.current[3] = el;
                }}
                size="5"
              >
                Design Team
              </Heading>
              <div
                className="flex flex-col gap-1"
                ref={(el): void => {
                  descriptionRefs.current[3] = el;
                }}
              >
                <Text size="1">Noah Taylor</Text>
                <Text size="1">Sofia Johnson</Text>
                <Text size="1">James Anderson</Text>
                <Text size="1">Avery Martinez</Text>
                <Text size="1">Charlotte Davis</Text>
              </div>
            </div>
          </Article.Description>
        </Article>
      </ShowcaseWrapper.Component>
    </ShowcaseWrapper>
  );
}

export { ArticleSectionVariants };
