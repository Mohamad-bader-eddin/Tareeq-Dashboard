import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  appPhoneNumber: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    appPhoneNumber: string;
  },
  Yup.AnyObject,
  {
    appPhoneNumber: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type AppPhoneNumberFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
