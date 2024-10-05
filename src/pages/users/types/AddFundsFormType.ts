import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../share/types";

export type initialValuesType = {
    amount: string;
    order_id:string|number|null;
    transactionType: Option | null;
}

export type validationSchemaType = Yup.ObjectSchema<{
    amount: string;
    // order_id:any;
    // order_id:number|null;

    transactionType: {
        name: string;
        id: string;
    };
}, Yup.AnyObject, {
    amount: undefined;
    order_id:undefined;
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

export type TransactionType = {
    amount: string;
    order_id:string;
    transaction_type_id: string;
    driver_id: string;
}