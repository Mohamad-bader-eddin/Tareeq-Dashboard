import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  shopperLimit: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    shopperLimit: string;
  },
  Yup.AnyObject,
  {
    shopperLimit: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type ShopperLimitFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
