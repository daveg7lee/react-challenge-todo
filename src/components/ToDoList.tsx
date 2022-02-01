import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoriesState, categoryState, toDoSelector } from '../atom';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  border: none;
  margin-bottom: 8px;
  padding: 2px 4px;
  width: 60%;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <Header>
        <Title>To Do List</Title>
        <Select value={category} onInput={onInput}>
          {categories.map((category: string) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Select>
        <CreateCategory />
        <CreateToDo />
      </Header>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
