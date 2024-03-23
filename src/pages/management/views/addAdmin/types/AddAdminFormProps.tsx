import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  email: string;
  password: string;
  name: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    email: string;
    password: string;
    name: string;
  },
  Yup.AnyObject,
  {
    email: undefined;
    password: undefined;
    name: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type AddAdminFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
