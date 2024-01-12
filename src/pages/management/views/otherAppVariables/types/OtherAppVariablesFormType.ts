import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  offersTimeOutSeconds: string;
  androidAppVersion: string;
  iPhoneAppVersion: string;
  theRadius: number;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    offersTimeOutSeconds: string;
    androidAppVersion: string;
    iPhoneAppVersion: string;
    theRadius: number;
  },
  Yup.AnyObject,
  {
    offersTimeOutSeconds: undefined;
    androidAppVersion: undefined;
    iPhoneAppVersion: undefined;
    theRadius: undefined;
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

export type OtherAppVariablesFormType = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
