import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  englishTitle: string;
  aribicTitle: string;
  englishDescription: string;
  arabicDescription: string;
  priority: number;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    englishTitle: string;
    aribicTitle: string;
    englishDescription: string;
    arabicDescription: string;
    priority: number;
  },
  Yup.AnyObject,
  {
    englishTitle: undefined;
    aribicTitle: undefined;
    englishDescription: undefined;
    arabicDescription: undefined;
    priority: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type AddFAQsFormProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
