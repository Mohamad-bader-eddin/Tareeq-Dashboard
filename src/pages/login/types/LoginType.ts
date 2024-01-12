import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    email: string;
    password: string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    email: string;
    password: string;
}, Yup.AnyObject, {
    email: undefined;
    password: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type LoginUiProps = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}