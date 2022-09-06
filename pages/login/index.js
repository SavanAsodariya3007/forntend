import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import {
  DetailContainer,
  GridContainer,
  HorizontalLine,
  Paper,
  Spacer,
  StyledTextInput,
} from "./styles";
import { useLoginForm } from "./useLoginForm";

function Login() {
  const { formik } = useLoginForm();

  const { values, errors, handleSubmit, setFieldValue } = formik;

  const onChange = (e) => {
    const { id, value } = e.target;
    setFieldValue(id, value);
  };

  const avatarStyle = {
    backgroundColor: "#556cd6",
  };

  const textInputStyles = {
    width: "100%",
    marginBottom: 10,
  };

  const buttonStyle = { margin: "8px 0" };

  return (
    <GridContainer>
      <Paper>
        <DetailContainer>
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign in</h2>
          <HorizontalLine />
          <Spacer v={20} />
          <StyledTextInput
            id="email"
            label="Email address"
            value={values.email}
            error={errors.email}
            onChange={onChange}
          />
          <Spacer v={10} />
          <StyledTextInput
            id="password"
            label="Password"
            type="password"
            value={values.password}
            error={errors.password}
            onChange={onChange}
          />
          <Spacer v={20} />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={buttonStyle}
            fullWidth
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </DetailContainer>
      </Paper>
    </GridContainer>
  );
}

export default Login;
