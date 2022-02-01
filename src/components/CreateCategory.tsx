import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../atom';

interface IForm {
  category: string;
}

const CreateCategory = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCategories = useSetRecoilState(categoriesState);

  const onValid = ({ category }: IForm) => {
    setCategories((prev: string[]) => [...prev, category]);
    setValue('category', '');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        {...register('category', { required: 'Please write a Category' })}
        placeholder="Write a Category"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateCategory;
