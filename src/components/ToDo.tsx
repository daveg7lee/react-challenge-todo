import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoriesState, IToDo, toDoState } from '../atom';

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <List>
      <span>{text}</span>
      {categories.map(
        (item: string) =>
          category !== item && (
            <button name={item} onClick={onClick} key={item}>
              {item}
            </button>
          )
      )}
    </List>
  );
}

export default ToDo;
