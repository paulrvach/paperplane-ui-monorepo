import { useState } from "react";
import { Carousel, type CarouselProps } from "../components/carosuel";
import ExampleCard from "./cards/article-card";
import { Radio } from "./controls/controllers";
import ShowcaseWrapper from "./controls/component-showcase-wrapper";

function CardShowcaseVariants(): JSX.Element {
  const [width, setWidth] = useState<CarouselProps["cardWidth"]>("lg");
  const [align, setAlign] = useState<CarouselProps["align"]>("start");

  return (
    <ShowcaseWrapper className="flex-col gap-8 justify-between">
      <ShowcaseWrapper.Component className="">
        <Carousel align={align} cardWidth={width} className="p-4" scrub={false}>
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
        </Carousel>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers className="flex-row justify-around w-full ">
        <Radio
          defaultValue={width as never}
          direction="row"
          items={["sm", "md", "lg"]}
          onValueChange={(val: "sm" | "md" | "lg"): void => setWidth(val)}
          propName="Card Width"
        />
        <Radio
          defaultValue={align as never}
          direction="row"
          items={["start", "center", "end"]}
          onValueChange={(val: "start" | "center" | "end"): void =>
            setAlign(val)
          }
          propName="Alignment"
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
}

export default CardShowcaseVariants;
