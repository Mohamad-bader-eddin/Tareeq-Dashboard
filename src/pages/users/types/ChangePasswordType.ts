import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    newPassword: string
}

export type validationSchemaType = Yup.ObjectSchema<{
    newPassword: string;
}, Yup.AnyObject, {
    newPassword: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type ChangePasswordType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}