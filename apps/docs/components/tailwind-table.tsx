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
        <div className='overflow-hidden rounded-xl border border-border'>
            <table className='min-w-full text-center text-sm font-light table-fixed'>
            <thead className='border-b border-border  font-medium text-primary dark:bg-secondary-foreground/5'>
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
                      index === data.length - 2
                        ? 'border-b  border-border'
                        : ''
                    }
                  >
                    <td className='whitespace-nowrap text-sky-600 px-6 py-4 font-medium'>
                     <code className='border rounded-lg bg-secondary-foreground/5 p-1 border-border text-xs'>{item.propName}</code>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <code className='border rounded-lg bg-secondary-foreground/5 p-1 border-border text-xs'>{item.propType}</code>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <code className='border rounded-lg bg-secondary-foreground/5 p-1 border-border text-xs'>{item.propDefault}</code>
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
