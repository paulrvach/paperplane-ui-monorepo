import React from "react";
import Article from "../components/ArticleSection";
import ShowcaseWrapper from "./controls/ComponentShowcaseWrapper";
import { Heading, Text } from "@radix-ui/themes";

type Props = {};

const ArticleSectionVariants = (props: Props) => {
  const description =
    "React is a popular JavaScript library widely used for building user interfaces in web applications. Developed by Facebook, React allows developers to create reusable UI components that efficiently update and render as data changes. Its declarative approach and Virtual DOM system enhance performance by minimizing direct manipulation of the actual DOM. This makes React a powerful tool for creating interactive, responsive, and maintainable web experiences.";

  return (
    <ShowcaseWrapper className="my-0">
      <ShowcaseWrapper.Component className=" px-4 my-0">
        <Article className="">
          <Article.Header date="August 31, 2023" title="Article Title">
            <img
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
              alt="img"
              style={{ height: "64px", width: "64px" }}
            />
          </Article.Header>
          <Article.Description description={description} className="w-full">
            <div>
              <Heading as="h3" size={"5"} className="pb-2">
                Frontend Team
              </Heading>
              <div className="flex flex-col gap-1">
                <Text size={"1"}>Emily Johnson</Text>
                <Text size={"1"}>Alexander Martinez</Text>
                <Text size={"1"}>Lisa Thompson</Text>
                <Text size={"1"}>Michael Davis</Text>
                <Text size={"1"}>Olivia Rodriguez</Text>
              </div>
            </div>
            <div>
              <Heading as="h3" size={"5"} className="pb-2">
                Backend Team
              </Heading>
              <div className="flex flex-col gap-1">
                <Text size={"1"}>Daniel Williams</Text>
                <Text size={"1"}>Sophia Anderson</Text>
                <Text size={"1"}>David Martinez</Text>
                <Text size={"1"}>Isabella Johnson</Text>
                <Text size={"1"}>Jackson Brown</Text>
              </div>
            </div>
            <div>
              <Heading as="h3" size={"5"} className="pb-2">
                DevOps Team
              </Heading>
              <div className="flex flex-col gap-1">
                <Text size={"1"}>Ethan Smith</Text>
                <Text size={"1"}>Ava Wilson</Text>
                <Text size={"1"}>William Garcia</Text>
                <Text size={"1"}>Emma Davis</Text>
                <Text size={"1"}>Liam Martin</Text>
              </div>
            </div>
            <div>
              <Heading as="h3" size={"5"} className="pb-2">
                Design Team
              </Heading>
              <div className="flex flex-col gap-1">
                <Text size={"1"}>Noah Taylor</Text>
                <Text size={"1"}>Sofia Johnson</Text>
                <Text size={"1"}>James Anderson</Text>
                <Text size={"1"}>Avery Martinez</Text>
                <Text size={"1"}>Charlotte Davis</Text>
              </div>
            </div>
          </Article.Description>
        </Article>
      </ShowcaseWrapper.Component>
    </ShowcaseWrapper>
  );
};

export { ArticleSectionVariants };
