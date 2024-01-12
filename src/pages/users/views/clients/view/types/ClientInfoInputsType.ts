import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    joinDate: Date | null;
    name: string;
    email: string;
    phone: string;
    birthDate?: Date | null;
    isVerified?: boolean
}

export type validationSchemaType = Yup.ObjectSchema<{
    joinDate: Date | null;
    name: string;
    email: string;
    phone: string;
    // birthDate: Date | null;
}, Yup.AnyObject, {
    joinDate: undefined;
    name: undefined;
    email: undefined;
    phone: undefined;
    // birthDate: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type ClientInfoInputsProps = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}