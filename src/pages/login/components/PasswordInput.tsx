import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { FormikProps } from "formik";
import { initialValuesType } from "../types/LoginType";
import { InputMargin } from "../../../share/constants";

const PasswordInput = ({ formik, label, name }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ mb: InputMargin }}>
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        label={label}
        name={name}
        type={showPassword ? "text" : "password"}
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""
        }
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

type PasswordInputProps = {
  formik: FormikProps<initialValuesType>;
  label: string;
  name: string;
};

export default PasswordInput;
