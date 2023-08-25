'use client';

import '../../docs/styles.css';
import React from 'react';
import { Button, Badge, Badges } from 'ui';

export default function Page(): JSX.Element {
  return (
    <div className='flex rounded-xl justify-center items-center h-screen '>
      <div className='w-[256px] '>
        <Badges length={4}>
          {/* Red Variation */}
          <Badge className='bg-red-200 text-red-800 border-red-800 hover:bg-red-600 hover:text-red-200 border'>
            {'apple'}
          </Badge>

          {/* Green Variation */}
          <Badge className='bg-green-200 text-green-800 border-green-800 hover:bg-green-600 hover:text-green-200 border'>
            {'grape'}
          </Badge>

          {/* Blue Variation */}
          <Badge className='bg-blue-200 text-blue-800 border-blue-800 hover:bg-blue-600 hover:text-blue-200 border'>
            {'cherry'}
          </Badge>

          {/* Yellow Variation */}
          <Badge className='bg-yellow-200 text-yellow-800 border-yellow-800 hover:bg-yellow-600 hover:text-yellow-200 border'>
            {'banana'}
          </Badge>

          {/* Indigo Variation */}
          <Badge className='bg-indigo-200 text-indigo-800 border-indigo-800 hover:bg-indigo-600 hover:text-indigo-200 border'>
            {'pear'}
          </Badge>

          {/* Purple Variation */}
          <Badge className='bg-purple-200 text-purple-800 border-purple-800 hover:bg-purple-600 hover:text-purple-200 border'>
            {'strawberry'}
          </Badge>

          {/* Pink Variation */}
          <Badge className='bg-pink-200 text-pink-800 border-pink-800 hover:bg-pink-600 hover:text-pink-200 border'>
            {'watermelon'}
          </Badge>

          {/* Gray Variation */}
          <Badge className='bg-gray-200 text-gray-800 border-gray-800 hover:bg-gray-600 hover:text-gray-200 border'>
            {'orange'}
          </Badge>
        </Badges>
      </div>
    </div>
  );
}
