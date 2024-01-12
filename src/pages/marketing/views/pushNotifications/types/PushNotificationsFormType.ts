import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    userType: string;
    title: string;
    message: string;
    user: string;
};

export type validationSchemaType = Yup.ObjectSchema<
    {
        userType: string;
        title: string;
        message: string;
    },
    Yup.AnyObject,
    {
        userType: undefined;
        title: undefined;
        message: undefined;
    },
    ""
>;

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (
    // eslint-disable-next-line no-unused-vars
    values: initialValuesType,
    // eslint-disable-next-line no-unused-vars
    formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type PushNotificationsFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType;
};
