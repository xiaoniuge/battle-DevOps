import { useState } from 'react';
import { Tree } from '@/component';

export default (props) => {
  return (
    <>
      <Tree data={data} />
    </>
  );
};

const data = [
  { label: '根1', value: 1, children: null },
  {
    label: '根2',
    value: 2,
    children: [
      { label: '子1', value: 3, children: null },
      {
        label: '子2',
        value: 4,
        children: [
          { label: '孙1', value: 5, children: null },
          { label: '孙2', value: 6, children: null },
        ],
      },
    ],
  },
];
