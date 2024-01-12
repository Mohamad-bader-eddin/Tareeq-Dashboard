import { Box } from "@mui/material";
import { ImageContainer, InputContainer } from "../style/LoginUI.style";
import { useDarkMode } from "../../../context/DarkMode";
import { Form, Formik } from "formik";
import { LoginUiProps } from "../types/LoginType";
import PasswordInput from "./PasswordInput";
import Input from "../../../share/components/Input/Input";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";

const LoginUI = ({
  initialValues,
  validationSchema,
  onSubmit,
}: LoginUiProps) => {
  const { darkMode } = useDarkMode();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <ImageContainer>
        <img src="/images/login-image.png" alt="" />
      </ImageContainer>
      <InputContainer $darkMode={darkMode}>
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <h2 className="text">welcome to tareeq</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <Input
                  formik={formik}
                  label="Email"
                  name="email"
                  type="email"
                />
                <PasswordInput
                  formik={formik}
                  label="Password"
                  name="password"
                />
                <SubmitButton name="Sign In" disabled={!formik.isValid} />
              </Form>
            );
          }}
        </Formik>
      </InputContainer>
    </Box>
  );
};

export default LoginUI;
