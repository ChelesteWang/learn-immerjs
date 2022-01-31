import React, { useCallback } from 'react';
import { useImmer } from './use-immer';
import { immerable } from 'immer';
import { v4 as uuidv4 } from 'uuid';

class ComponentTree {
  [immerable] = true;

  name: string;
  children: Array<ComponentTree>;
  key: string;

  constructor() {
    this.name = '';
    this.children = [];
    this.key = uuidv4();
  }

  find() {}
}

export function Test() {
  const [value, setValue] = useImmer<ComponentTree>(new ComponentTree());

  const handleAddNode = useCallback((name) => {
    setValue((draft) => {
      draft.children.push(new ComponentTree());
    });
  }, []);

  const handleUpdateNode = useCallback(() => {

  }, []);

  // const handleRemoveNode = useCallback((key) => {
  //   setValue((draft) => {
  //     const node = draft.find((item) => item.key === key);
  //     console.log(node);
  //   });
  // }, []);

  return (
    <div>
      {JSON.stringify(value)}
      <button
        onClick={() => {
          handleAddNode('button');
        }}
      >
        变更
      </button>
      {/* <button
        onClick={() => {
          handleRemoveNode('1dafc08f-bf35-441f-86d6-da43db64b6af');
        }}
      >
        删除
      </button> */}
    </div>
  );
}
