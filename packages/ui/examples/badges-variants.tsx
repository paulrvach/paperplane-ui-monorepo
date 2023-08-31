import React from "react";
import { Badge, Badges, BadgesProps, BadgeProps } from "../components/Badge";
import { Selector, Slider } from "./controls/Controllers";
import ShowcaseWrapper from "./controls/ComponentShowcaseWrapper";

const ColoredBadges = () => {
  const [stagger, setStagger] = React.useState<BadgesProps["stagger"]>(0.4);
  const [length, setLength] = React.useState<BadgesProps["length"]>(4);

  return (
    <ShowcaseWrapper>
      <ShowcaseWrapper.Component>
        <Badges stagger={stagger} length={length} className="w-[256px]">
          {/* Red Variation */}
          <Badge
            variant={'outline'}
            className="bg-red-200 text-red-800 border-red-800 hover:bg-red-600 hover:text-red-200 "
          >
            {"apple"}
          </Badge>

          {/* Green Variation */}
          <Badge
            variant={'outline'}
            className="bg-green-200 text-green-800 border-green-800 hover:bg-green-600 hover:text-green-200 "
          >
            {"grape"}
          </Badge>

          {/* Blue Variation */}
          <Badge
            variant={'outline'}
            className="bg-blue-200 text-blue-800 border-blue-800 hover:bg-blue-600 hover:text-blue-200 "
          >
            {"cherry"}
          </Badge>

          {/* Yellow Variation */}
          <Badge
            variant={'outline'}
            className="bg-yellow-200 text-yellow-800 border-yellow-800 hover:bg-yellow-600 hover:text-yellow-200"
          >
            {"banana"}
          </Badge>

          {/* Indigo Variation */}
          <Badge
            variant={'outline'}
            className="bg-indigo-200 text-indigo-800 border-indigo-800 hover:bg-indigo-600 hover:text-indigo-200 "
          >
            {"pear"}
          </Badge>

          {/* Purple Variation */}
          <Badge
            variant={'outline'}
            className="bg-purple-200 text-purple-800 border-purple-800 hover:bg-purple-600 hover:text-purple-200 "
          >
            {"strawberry"}
          </Badge>

          {/* Pink Variation */}
          <Badge
            variant={'outline'}
            className="bg-pink-200 text-pink-800 border-pink-800 hover:bg-pink-600 hover:text-pink-200 "
          >
            {"watermelon"}
          </Badge>

          {/* Gray Variation */}
          <Badge
            variant={'outline'}
            className="bg-gray-200 text-gray-800 border-gray-800 hover:bg-gray-600 hover:text-gray-200 "
          >
            {"orange"}
          </Badge>
        </Badges>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers>
        <Slider
          propName="Stagger"
          defaultValue={[25]}
          onValueChange={(value) => {
            setStagger((value[0] / 100) as never);
          }}
          placeholder={stagger?.toString()}
        />
        <Selector
          propName="Length"
          propTypes={[2, 4, 6, 8]}
          onValueChange={(value) => setLength(value as never)}
          placeholder={length?.toString()}
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
};

export { ColoredBadges };
