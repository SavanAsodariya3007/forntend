import styled from "styled-components";
import { Textfield } from "../../../components/Textfield";

export const GridContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

export const Paper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 3px;
  padding: 1.5rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  align-items: center;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  opacity: 0.2;
`;

export const StyledTextInput = styled(Textfield)``;

export const Spacer = styled.div`
  height: ${({ v }) => v || 0}px;
  width: ${({ h }) => h || 0}px;
`;
