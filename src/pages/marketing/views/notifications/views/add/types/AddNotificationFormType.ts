import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  title: string;
  message: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    title: string;
    message: string;
  },
  Yup.AnyObject,
  {
    title: undefined;
    message: undefined;
  },
  ""
>;

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type AddNotificationFormType = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
