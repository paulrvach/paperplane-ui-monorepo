import React from "react";
import {
  Select,
  SelectRoot,
  Slider as RadixSlider,
  RadioGroup,
  RadioGroupRoot,
  Flex,
  Text,
} from "@radix-ui/themes";
import { cn } from "../../utils";

interface SelectorTypes extends React.ComponentProps<typeof SelectRoot> {
  propName: string;
  propTypes: string[] | number[];
  placeholder?: string;
}

const Selector: React.FC<SelectorTypes> = ({
  propName,
  propTypes,
  onValueChange,
  placeholder,

  ...props
}) => {
  return (
    <Select.Root onValueChange={onValueChange} {...props}>
      <Text>{propName}</Text>
      <Select.Trigger placeholder={placeholder} />
      <Select.Content>
        <Select.Group>
          <Select.Label>{propName}</Select.Label>
          {propTypes.map((type, index) => (
            <Select.Item value={type.toString()} key={index}>
              {type}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

interface SliderTypes extends React.ComponentProps<typeof RadixSlider> {
  propName: string;
}

const Slider: React.FC<SliderTypes> = ({
  onValueChange,
  size,
  variant,
  color,
  highContrast,
  radius,
  className,
  propName,
  defaultValue,
}) => {
  return (
    <>
      <Text>{propName}</Text>
      <div className={cn(className)}>
        <RadixSlider
          onValueChange={onValueChange}
          size={size ? size : "1"}
          variant={variant}
          color={color}
          highContrast={highContrast}
          radius={radius ? radius : "full"}
          defaultValue={defaultValue ? defaultValue : [50]}
        />
      </div>
    </>
  );
};

interface RadioTypes extends React.ComponentProps<typeof RadioGroupRoot> {
  items: string[];
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  propName: string;
}

const Radio: React.FC<RadioTypes> = ({
  items,
  defaultValue,
  onValueChange,
  direction = "column",
  className,
  propName,
  ...props
}) => {
  return (
    <RadioGroup.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={cn(className, "flex flex-col gap-2")}
      {...props}
    >
      <Text>{propName}</Text>
      <Flex gap="2" direction={direction}>
        {items.map((item, index) => (
          <label key={index}>
            <Flex gap="2" align="center">
              <RadioGroup.Item value={item} />
              <Text size="2">{item}</Text>
            </Flex>
          </label>
        ))}
      </Flex>
    </RadioGroup.Root>
  );
};

export { Selector, Slider, Radio };
