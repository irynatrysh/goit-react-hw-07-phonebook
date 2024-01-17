import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 1px solid black;
  padding: 20px;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: green;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid black;
  padding-left: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  border-color: black;
  font-size: 20px;
  margin: 0 auto;
`;