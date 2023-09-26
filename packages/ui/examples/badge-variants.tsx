import { useState } from "react";
import type { BadgeProps } from "../components/badge";
import { Badge } from "@ui";
import { Selector } from "./controls/controllers";
import { ShowcaseWrapper } from "@controls";

function BadgeVariants(): JSX.Element {
  const [variant, setVariant] = useState<BadgeProps["variant"]>("outline");
  return (
    <ShowcaseWrapper>
      <ShowcaseWrapper.Component>
        <Badge variant={variant}>badge</Badge>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers>
        <Selector
          direction="column"
          onValueChange={(
            val: "default" | "secondary" | "destructive" | "outline" | "round"
          ): void => setVariant(val)}
          placeholder={variant as never}
          propName="Variant"
          propTypes={[
            "default",
            "secondary",
            "destructive",
            "outline",
            "round",
          ]}
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
}

export { BadgeVariants };
