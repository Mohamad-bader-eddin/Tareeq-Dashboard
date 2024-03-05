import LoginUI from "../components/LoginUI";
import * as Yup from "yup";
import { initialValuesType } from "../types/LoginType";
import { FormikHelpers } from "formik";
import { useAuth } from "../../../context/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import jsCookie from "js-cookie";
import { useState } from "react";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import useLoginQuery from "../hooks/useLoginQuery";
import { Backdrop } from "@mui/material";
import Spinner from "../../../share/components/Spinner";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import { useFcmToken } from "../../../context/FcmToken";

const Login = () => {
  const { setUser } = useAuth();
  const { fcmToken } = useFcmToken();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { mutate, isLoading } = useLoginQuery();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const redirectPath = location.state?.path || "/";
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log(fcmToken);

    mutate(
      {
        email: values.email,
        password: values.password,
        fcm_token: fcmToken,
      },
      {
        onSuccess: (response) => {
          const user = {
            email: response.data.content.email,
            id: response.data.content.id,
            name: response.data.content.name,
          };
          jsCookie.set("accessToken", response.data.content.accessToken);
          jsCookie.set("user", JSON.stringify(user));
          setUser({ ...user, roles: ["admin"] });
          formikHelpers.resetForm();
          navigate(redirectPath, { replace: true });
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
        },
      }
    );
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <Spinner />
      </Backdrop>
      <LoginUI
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      />
      <GenericAlert
        open={openError}
        setOpen={setOpenError}
        type="error"
        msg={errorMsg}
      />
    </>
  );
};

export default Login;
