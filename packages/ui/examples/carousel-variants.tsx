import React, { useState } from "react";
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
        <Carousel cardWidth={width} className="p-4" align={align} scrub={false}>
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
          onValueChange={(val) => setWidth(val as never)}
          propName="Card Width"
        />
        <Radio
          defaultValue={align as never}
          direction="row"
          items={["start", "center", "end"]}
          onValueChange={(val) => setAlign(val as never)}
          propName="Alignment"
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
}

export default CardShowcaseVariants;
