'use client';

import '../../docs/styles.css';
import { Button, Badge, Badges } from 'ui';

export default function Page(): JSX.Element {
  return (
    <div className='flex rounded-xl justify-center items-center h-screen gap-3'>
      <div className='w-[256px] h-fit'>
        <Badges length={5}>
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
          <Badge children='badge' />
        </Badges>
      </div>
    </div>
  );
}
