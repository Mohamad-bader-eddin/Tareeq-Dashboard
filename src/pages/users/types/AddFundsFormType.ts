import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    amount: string;
    description: string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    amount: string;
    description: string;
}, Yup.AnyObject, {
    amount: undefined;
    description: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddFundsFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}