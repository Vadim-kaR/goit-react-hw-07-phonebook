import styled from 'styled-components';
import { Field } from 'formik';

export const InputTitle = styled.span`
  margin-right: 10px;
  width: 50px;
`;

export const InputField = styled.label`
  margin-bottom: 20px;
  display: flex;
`;

export const AddBtn = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
`;

export const Inpute = styled(Field)`
  border-radius: 5px;
  border: none;
  height: 20px;
  outline: none;
  padding: 3px 10px;
  width: 180px;
`;
