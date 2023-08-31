import React from "react";
import {
  Select,
  SelectRoot,
  Slider as RadixSlider,
  Tabs,
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
      <p>{propName}</p>
      <Select.Trigger placeholder={placeholder} />
      <Select.Content>
        <Select.Group>
          <Select.Label>{propName}</Select.Label>
          {propTypes.map((type) => (
            <Select.Item value={type.toString()}>{type}</Select.Item>
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
      <p>{propName}</p>
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

const aaa = () => {
  return (
    <Tabs.Root defaultValue="preview">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="preview">{/* <BadgeVariants /> */}</Tabs.Content>

      <Tabs.Content value="code">
        ```jsx copy filename="variants"
        {/* <Badge variant='default' children={'default'} />
        <Badge variant='secondary' children={'secondary'} />
        <Badge variant='destructive' children={'destructive'} />
        <Badge variant='outline' children={'outline'} />
        <Badge variant='round' children={'round'} /> */}
        ````
      </Tabs.Content>
    </Tabs.Root>
  );
};

export { Selector, Slider };
