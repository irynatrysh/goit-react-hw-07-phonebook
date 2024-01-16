import styled from 'styled-components';

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 auto;
  margin-bottom: 12px;
`;
const Label = styled.label`
  text-align: center;
  font-size: 20px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid black;
`;

export { Form, Label, Input };
