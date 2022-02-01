import styled from 'styled-components';

interface IProps {
  register: any;
  name: string;
}

const SInput = styled.input`
  width: 60%;
  border: none;
  padding: 4px 6px;
  margin-right: 4px;
`;

const Input = ({ register, name }: IProps) => {
  return (
    <SInput
      {...register(name, {
        required: 'Please write a' + name,
      })}
      placeholder={'Write a ' + name}
    />
  );
};

export default Input;
