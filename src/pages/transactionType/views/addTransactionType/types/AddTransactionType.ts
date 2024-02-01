import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    type: string;
    description: string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    type: string;
    description: string;
}, Yup.AnyObject, {
    type: undefined;
    description: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddTransactionType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType,
}