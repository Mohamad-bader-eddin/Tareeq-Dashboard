import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    image: File | undefined | string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    image: unknown;
}, Yup.AnyObject, {
    image: undefined
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddSlideFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType,
}