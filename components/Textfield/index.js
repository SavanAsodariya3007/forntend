import React from "react";
import { ErrorText, InputText, Label, TextFieldContainer } from "./styles";

export function Textfield(props) {
  const { label = "", style, error, ...rest } = props;

  const isLabel = label !== "";
  const isError = Boolean(error);
  return (
    <TextFieldContainer style={style}>
      {isLabel && <Label>{label}</Label>}
      <InputText type="text" {...rest} />
      {isError && <ErrorText>{error}</ErrorText>}
    </TextFieldContainer>
  );
}
