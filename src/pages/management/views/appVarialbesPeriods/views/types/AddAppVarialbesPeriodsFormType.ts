import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  from: Date | null;
  to: Date | null;
  X: number;
  Y: number;
  Z: number;
  S: number;
  P: number;
  Power1: number;
  Power2: number;
  A: number;
  B: number;
  C: number;
  D: number;
  L: number;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    from: Date | null;
    to: Date | null;
    X: number;
    Y: number;
    Z: number;
    S: number;
    P: number;
    Power1: number;
    Power2: number;
    A: number;
    B: number;
    C: number;
    D: number;
    L: number;
  },
  Yup.AnyObject,
  {
    from: undefined;
    to: undefined;
    X: undefined;
    Y: undefined;
    Z: undefined;
    S: undefined;
    P: undefined;
    Power1: undefined;
    Power2: undefined;
    A: undefined;
    B: undefined;
    C: undefined;
    D: undefined;
    L: undefined;
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

export type AddAppVarialbesPeriodsFormType = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
