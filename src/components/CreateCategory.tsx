import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoriesState } from '../atom';
import Input from './Input';

interface IForm {
  category: string;
}

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

const CreateCategory = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCategories = useSetRecoilState(categoriesState);

  const onValid = ({ category }: IForm) => {
    setCategories((prev: string[]) => [...prev, category]);
    setValue('category', '');
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input register={register} name={'category'} />
      <button type="submit">Add</button>
    </Form>
  );
};

export default CreateCategory;
