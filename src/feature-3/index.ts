import produce from 'immer';

function toggleTodo(state, id) {
  return produce(state, (draft) => {
    const todo = draft.find((todo) => todo.id === id);
    todo.done = !todo.done;
  });
}

const baseState = [
  {
    id: 'JavaScript',
    title: 'Learn TypeScript',
    done: true,
  },
  {
    id: 'Immer',
    title: 'Try Immer',
    done: false,
  },
];

const nextState = toggleTodo(baseState, 'Immer');
