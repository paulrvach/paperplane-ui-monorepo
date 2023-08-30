'use client';

import '../../docs/styles.css';
import React from 'react';
import { CardShowcase } from 'ui';

export default function Page(): JSX.Element {

  return (
    <div className='justify-center items-center h-screen p-8 '>
      <CardShowcase align={'center'} cardWidth={'lg'}>
        <div className='h-96 w-full bg-slate-600 rounded-xl' />
        <div className='h-96 w-full bg-sky-600 rounded-xl' />
        <div className='h-96 w-full bg-red-600 rounded-xl' />
        <div className='h-96 w-full bg-orange-600 rounded-xl' />
        <div className='h-96 w-full bg-lime-600 rounded-xl' />
      </CardShowcase>
    </div>
  );
}
