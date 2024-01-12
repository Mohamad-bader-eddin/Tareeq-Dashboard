import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  phone: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    phone: string;
  },
  Yup.AnyObject,
  {
    phone: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type PhoneFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
