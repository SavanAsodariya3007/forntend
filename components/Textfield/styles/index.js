import styled from "styled-components";

export const TextFieldContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #495057;
  align-self: flex-start;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  width: 100%;
  height: 2.75rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  color: black;
  padding: 0.375rem 0.75rem;
  &:focus {
    border: 2px solid #348fe9;
    box-shadow: 0 0 0px 3px #d3def2;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    outline: 0;
  }
`;

export const ErrorText = styled.div`
  color: #cd201f;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  margin-top: 0.2rem;
`;
