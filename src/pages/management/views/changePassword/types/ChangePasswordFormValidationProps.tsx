import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  password: string;
  password_confirmation: string;
  old_password: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    password: string;
    password_confirmation: string;
    old_password: string;
  },
  Yup.AnyObject,
  {
    password: undefined;
    password_confirmation: undefined;
    old_password: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type ChangePasswordFormValidationProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
