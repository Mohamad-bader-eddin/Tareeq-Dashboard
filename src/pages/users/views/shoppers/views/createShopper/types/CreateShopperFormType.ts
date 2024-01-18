import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../../../../../share/types";

export type initialValuesType = {
    name: string;
    // email: string;
    password: string;
    phone: string;
    zone: Option | null;
    modelNumber: string;
    brand: string;
    platNumber: string;
    minifactureYear: string;
    color: string;
    description: string;
    vehicleType: Option | null;
    shopperPicture: File | undefined | string;
    vehiclePicture: File | undefined | string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    name: string;
    // email: string;
    password: string;
    phone: string;
    zone: {
        name: string;
        id: string;
    };
    modelNumber: string;
    brand: string;
    platNumber: string;
    minifactureYear: string;
    color: string;
    description: string;
    vehicleType: {
        name: string;
        id: string;
    };
}, Yup.AnyObject, {
    name: undefined;
    // email: undefined;
    password: undefined;
    phone: undefined;
    zone: {
        id: undefined;
        name: undefined;
    };
    modelNumber: undefined;
    brand: undefined;
    platNumber: undefined;
    minifactureYear: undefined;
    color: undefined;
    description: undefined;
    vehicleType: {
        id: undefined;
        name: undefined;
    };
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type CreateShopperFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}