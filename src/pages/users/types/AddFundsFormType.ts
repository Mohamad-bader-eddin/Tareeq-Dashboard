import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../share/types";

export type initialValuesType = {
    amount: string;
    transactionType: Option | null;
}

export type validationSchemaType = Yup.ObjectSchema<{
    amount: string;
    transactionType: {
        name: string;
        id: string;
    };
}, Yup.AnyObject, {
    amount: undefined;
    transactionType: {
        id: undefined;
        name: undefined;
    };
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddFundsFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}