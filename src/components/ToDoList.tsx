import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoriesState, categoryState, toDoSelector } from '../atom';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h2>To Do</h2>
      <hr />
      <select value={category} onInput={onInput}>
        {categories.map((category: string) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
