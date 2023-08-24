import React from 'react';

const tableData = [
  { propName: 'size', propType: '"sm" | "md" | "lg"', propDefault: '"md"' },
  {
    propName: 'variant',
    propType: '"default" | "secondary" | "destructive" | "outline" | "round"',
    propDefault: '"default"',
  },
  // Add more data items as needed
];

const CustomTable = ({ data }) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-xl border'>
            <table className='min-w-full text-center text-sm font-light'>
              <thead className='border-b bg-neutral-800 font-medium text-primary dark:border-neutral-500 dark:bg-secondary-foreground/5'>
                <tr>
                  <th scope='col' className='px-6 py-4'>
                    Prop
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Type
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Default
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? 'border-b dark:border-neutral-500'
                        : 'dark:border-neutral-500'
                    }
                  >
                    <td className='whitespace-nowrap text-sky-600 px-6 py-4 font-medium'>
                      {item.propName}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {item.propType}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {item.propDefault}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
