import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    name: string;
    image: File | undefined | string;
    needNote: boolean;
    // priceByTime: number;
    // priceByKm: number;
}

export type validationSchemaType = Yup.ObjectSchema<{
    name: string;
    // priceByTime: number;
    // priceByKm: number;
}, Yup.AnyObject, {
    name: undefined;
    // priceByTime: undefined;
    // priceByKm: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type AddVehicleFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType,
}