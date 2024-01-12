import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  code: string;
  amount: string;
  description: string;
  isActive: string;
  type: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    code: string;
    amount: string;
    description: string;
    type: string;
  },
  Yup.AnyObject,
  {
    code: undefined;
    amount: undefined;
    description: undefined;
    type: undefined;
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

export type AddPromoCodeFormType = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
