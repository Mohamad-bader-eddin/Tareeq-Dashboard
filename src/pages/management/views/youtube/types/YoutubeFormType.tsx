import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
  youtube: string;
};

export type validationSchemaType = Yup.ObjectSchema<
  {
    youtube: string;
  },
  Yup.AnyObject,
  {
    youtube: undefined;
  },
  ""
>;

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type YoutubeFormTypesProps = {
  initialValues: initialValuesType;
  validationSchema: validationSchemaType;
  onSubmit: onSubmitType;
};
