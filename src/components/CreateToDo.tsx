import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IToDo } from '../atom';
import { categoryState, toDoState } from '../atom';
import Input from './Input';

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos: IToDo[]) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input register={register} name={'toDo'} />
      <button>Add</button>
    </Form>
  );
}

export default CreateToDo;
