import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  statType: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    statType: string;
  },
  Yup.AnyObject,
  {
    statType: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type StatTypeFormType = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
