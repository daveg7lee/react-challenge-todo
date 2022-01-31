import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { categoriesState, categoryState, toDoSelector } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

interface IForm {
  category: string;
}

function ToDoList() {
  const { register, handleSubmit } = useForm<IForm>();
  const setCategories = useSetRecoilState(categoriesState);
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onValid = ({ category }: IForm) => {
    setCategories((prev: string[]) => [...prev, category]);
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
      <form onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register('category')} />
        <button type="submit">Add</button>
      </form>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
