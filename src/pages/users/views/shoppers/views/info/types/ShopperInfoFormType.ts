import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../../../../../share/types";

export type initialValuesType = {
    registerDate: Date
    name: string;
    last_name: string;
    phone: string;
    zone: Option | null;
    modelNumber: string;
    brand: string;
    platNumber: string;
    driverProfit: string;
    minifactureYear: string;
    color: string;
    vehicleType: Option | null;
    // isOnline: boolean;
    carPicture: File | undefined | string;
    shopperPicture?: File | undefined | string;
}

export type validationSchemaType = Yup.ObjectSchema<{
    name: string;
    last_name: string;
    phone: string;
    zone: {
        name: string;
        id: string;
    };
    modelNumber: string;
    brand: string;
    platNumber: string;
    driverProfit: string;
    minifactureYear: string;
    color: string;
    vehicleType: {
        name: string;
        id: string;
    };
}, Yup.AnyObject, {
    name: undefined;
    last_name: undefined;
    phone: undefined;
    zone: {
        id: undefined;
        name: undefined;
    };
    modelNumber: undefined;
    brand: undefined;
    platNumber: undefined;
    driverProfit: undefined;
    minifactureYear: undefined;
    color: undefined;
    vehicleType: {
        id: undefined;
        name: undefined;
    };
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type ShopperInfoFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType;
    zoneOptions: Option[];
    zoneLoading: boolean;
    vehicleOptions: Option[];
    vehicleLoading: boolean;
}