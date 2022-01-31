import React from 'react';
import { useImmer } from './use-immer';

export function Test() {
  const [value, setValue] = useImmer(0);

  return <div>{value}</div>;
}
