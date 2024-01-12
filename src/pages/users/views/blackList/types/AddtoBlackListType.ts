import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    phone: string
}

export type validationSchemaType = Yup.ObjectSchema<{
    phone: string;
}, Yup.AnyObject, {
    phone: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddtoBlackListType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}