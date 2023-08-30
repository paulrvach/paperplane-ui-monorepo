import React, { ChangeEvent } from 'react';
import { Badge, Badges, BadgesProps, BadgeProps } from '../components/Badge';
import { Select, SelectRoot } from '@radix-ui/themes';

interface SelectorTypes extends React.ComponentProps<typeof SelectRoot> {
  propName: string;
  propTypes: string[] | number [];
}

const Selector: React.FC<SelectorTypes> = ({
  propName,
  propTypes,
  onValueChange,
  ...props
}) => {
  return (
    <Select.Root onValueChange={onValueChange} {...props}>
      <Select.Trigger placeholder={propName} />
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

const ColoredBadges = () => {
  const [variant, setVariant] =
    React.useState<BadgeProps['variant']>('outline');
  const [stagger, setStagger] = React.useState<BadgesProps['stagger']>(0.4);
  const [length, setLength] = React.useState<BadgesProps['length']>(4);

  return (
    <div className='w-full flex items-center justify-around  overflow-auto h-[248px] rounded-lg border-2 border-border'>
      <div className='flex flex-col gap-4'>
        <h3>Controlls</h3>
      <Selector
        propName='Variant'
        propTypes={['default', 'secondary', 'destructive', 'outline', 'round']}
        onValueChange={(value) => setVariant(value as never)}
      />
      <Selector
        propName='Stagger'
        propTypes={[0.2, 0.4, 0.5, 1]}
        onValueChange={(value) => setStagger(value as never)}
      />
      </div>
      <Badges stagger={stagger} length={length} className='w-[256px]'>
        {/* Red Variation */}
        <Badge
          variant={variant}
          className='bg-red-200 text-red-800 border-red-800 hover:bg-red-600 hover:text-red-200 '
        >
          {'apple'}
        </Badge>

        {/* Green Variation */}
        <Badge
          variant={variant}
          className='bg-green-200 text-green-800 border-green-800 hover:bg-green-600 hover:text-green-200 '
        >
          {'grape'}
        </Badge>

        {/* Blue Variation */}
        <Badge
          variant={variant}
          className='bg-blue-200 text-blue-800 border-blue-800 hover:bg-blue-600 hover:text-blue-200 '
        >
          {'cherry'}
        </Badge>

        {/* Yellow Variation */}
        <Badge
          variant={variant}
          className='bg-yellow-200 text-yellow-800 border-yellow-800 hover:bg-yellow-600 hover:text-yellow-200'
        >
          {'banana'}
        </Badge>

        {/* Indigo Variation */}
        <Badge
          variant={variant}
          className='bg-indigo-200 text-indigo-800 border-indigo-800 hover:bg-indigo-600 hover:text-indigo-200 '
        >
          {'pear'}
        </Badge>

        {/* Purple Variation */}
        <Badge
          variant={variant}
          className='bg-purple-200 text-purple-800 border-purple-800 hover:bg-purple-600 hover:text-purple-200 '
        >
          {'strawberry'}
        </Badge>

        {/* Pink Variation */}
        <Badge
          variant={variant}
          className='bg-pink-200 text-pink-800 border-pink-800 hover:bg-pink-600 hover:text-pink-200 '
        >
          {'watermelon'}
        </Badge>

        {/* Gray Variation */}
        <Badge
          variant={variant}
          className='bg-gray-200 text-gray-800 border-gray-800 hover:bg-gray-600 hover:text-gray-200 '
        >
          {'orange'}
        </Badge>
      </Badges>
    </div>
  );
};

export { ColoredBadges };
