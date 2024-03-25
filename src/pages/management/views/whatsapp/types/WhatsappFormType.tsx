import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  whatsapp: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    whatsapp: string;
  },
  Yup.AnyObject,
  {
    whatsapp: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type WhatsappFormTypesProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
