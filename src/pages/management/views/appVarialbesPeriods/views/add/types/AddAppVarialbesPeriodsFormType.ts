import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../../../../../share/types";

export type initialValuesType = {
  from: Date | null;
  to: Date | null;
  price_by_minute: number;
  price_by_km: number;
  minimum_value: number;
  extra_value: number;
  initial_value: number;
  waiting_value: number;
  vehicleType: Option | null;
  // Power1: number;
  // Power2: number;
  // A: number;
  // B: number;
  // C: number;
  // D: number;
  // L: number;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    from: Date | null;
    to: Date | null;
    price_by_minute: number;
    price_by_km: number;
    minimum_value: number;
    extra_value: number;
    initial_value: number;
    waiting_value: number;
    vehicleType: {
      name: string;
      id: string;
    };
    // Power1: number;
    // Power2: number;
    // A: number;
    // B: number;
    // C: number;
    // D: number;
    // L: number;
  },
  Yup.AnyObject,
  {
    from: undefined;
    to: undefined;
    price_by_minute: undefined;
    price_by_km: undefined;
    minimum_value: undefined;
    extra_value: undefined;
    initial_value: undefined;
    waiting_value: undefined;
    vehicleType: {
      id: undefined;
      name: undefined;
    };
    // Power1: undefined;
    // Power2: undefined;
    // A: undefined;
    // B: undefined;
    // C: undefined;
    // D: undefined;
    // L: undefined;
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
