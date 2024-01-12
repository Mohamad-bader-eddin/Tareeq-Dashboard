import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    id: string;
    fullName: string;
    phone: string;
    sourceLocation: string;
    destinationLocation: string;
    sendToActiveOrders?: boolean;
}

export type validationSchemaType = Yup.ObjectSchema<{
    id: string;
    fullName: string;
    phone: string;
    sourceLocation: string;
    destinationLocation: string;
}, Yup.AnyObject, {
    id: undefined;
    fullName: undefined;
    phone: undefined;
    sourceLocation: undefined;
    destinationLocation: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type P2pFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}