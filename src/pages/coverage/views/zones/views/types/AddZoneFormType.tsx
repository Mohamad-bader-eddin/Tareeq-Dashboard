import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  name: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    name: string;
  },
  Yup.AnyObject,
  {
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

export type AddZoneFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
