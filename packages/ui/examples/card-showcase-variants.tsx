import React, { useState } from "react";
import { CardShowcase, CardShowcaseProps } from "../components/CardShowcase";
import { ExampleCard } from "./Cards/article-card";
import { Selector, Radio } from "./controls/Controllers";
import ShowcaseWrapper from "./controls/ComponentShowcaseWrapper";

const CardShowcaseVariants = () => {
  const [width, setWidth] = useState<CardShowcaseProps["cardWidth"]>("lg");
  const [align, setAlign] = useState<CardShowcaseProps["align"]>("start");

  return (
    <ShowcaseWrapper className="flex-col gap-8 justify-between">
      <ShowcaseWrapper.Component className="">
        <CardShowcase cardWidth={width} className="p-4" align={align} scrub={false}>
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
        </CardShowcase>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers className="flex-row justify-around w-full ">
        <Radio
          items={["sm", "md", "lg"]}
          defaultValue={width as never}
          onValueChange={(val) => setWidth(val as never)}
          direction="row"
          propName="Card Width"
        />
        <Radio
          items={["start", "center", "end"]}
          defaultValue={align as never}
          onValueChange={(val) => setAlign(val as never)}
          direction="row"
          propName="Alignment"
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
};

export default CardShowcaseVariants;
