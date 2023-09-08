import React from "react";
import { Badge, BadgeProps } from "../components/badge";
import { Selector } from "./controls/controllers";
import ShowcaseWrapper from "./controls/component-showcase-wrapper";

const BadgeVariants = () => {
  const [variant, setVariant] =
    React.useState<BadgeProps["variant"]>("outline");
  return (
    <ShowcaseWrapper>
      <ShowcaseWrapper.Component>
        <Badge variant={variant}>badge</Badge>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers>
        <Selector
          propName="Variant"
          placeholder={variant as never}
          propTypes={[
            "default",
            "secondary",
            "destructive",
            "outline",
            "round",
          ]}
          onValueChange={(val) => setVariant(val as never)}
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
};

export default BadgeVariants;
