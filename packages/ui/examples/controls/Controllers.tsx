import { type ComponentProps } from "react";
import {
  Select,
  type SelectRoot,
  Slider as RadixSlider,
  RadioGroup,
  type RadioGroupRoot,
  Flex,
  Text,
} from "@radix-ui/themes";
import { cn } from "../../utils";

interface SelectorProps extends ComponentProps<typeof SelectRoot> {
  propName: string;
  propTypes: string[] | number[];
  placeholder?: string;
}

function Selector({
  propName,
  propTypes,
  onValueChange,
  placeholder,
  ...props
}: SelectorProps): JSX.Element {
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
}

interface SliderProps extends ComponentProps<typeof RadixSlider> {
  propName: string;
}

function Slider({
  onValueChange,
  size,
  variant,
  color,
  highContrast,
  radius,
  className,
  propName,
  defaultValue,
}: SliderProps): JSX.Element {
  return (
    <>
      <Text>{propName}</Text>
      <div className={cn(className)}>
        <RadixSlider
          color={color}
          defaultValue={defaultValue ? defaultValue : [50]}
          highContrast={highContrast}
          onValueChange={onValueChange}
          radius={radius ? radius : "full"}
          size={size ? size : "1"}
          variant={variant}
        />
      </div>
    </>
  );
}

interface RadioProps extends ComponentProps<typeof RadioGroupRoot> {
  items: string[];
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  propName: string;
}

function Radio({
  items,
  defaultValue,
  onValueChange,
  direction = "column",
  className,
  propName,
  ...props
}: RadioProps): JSX.Element {
  return (
    <RadioGroup.Root
      className={cn(className, "flex flex-col gap-2")}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      <Text>{propName}</Text>
      <Flex direction={direction} gap="2">
        {items.map((item) => (
          <label htmlFor={item} key={item}>
            <Flex align="center" gap="2">
              <RadioGroup.Item id={item} value={item} />
              <Text size="2">{item}</Text>
            </Flex>
          </label>
        ))}
      </Flex>
    </RadioGroup.Root>
  );
}

export { Selector, Slider, Radio };
