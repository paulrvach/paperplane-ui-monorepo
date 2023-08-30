import React from 'react';

import { Code, Pre } from 'nextra/components';

type Props = {
  name: string;
  description: string;
  type: string;
};

const propsCard = ({ name, description, type }: Props) => {
  return (
    <div className='flex flex-col md:flex-row border-b border-border py-4 gap-4 md:gap-0'>
      <div className='min-w-[10rem]'>
        <Code className='w-fit h-fit  text-sky-600 border-border'>{name}:</Code>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-mono'>{type}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default propsCard;
