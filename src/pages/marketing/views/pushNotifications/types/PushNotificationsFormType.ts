import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Option } from "../../../../../share/types";

export type initialValuesType = {
    userType: Option | null;
    notification: Option | null;
    user?: Option | null;
    driver?: Option | null;
};

export type validationSchemaType = Yup.ObjectSchema<
    {
        userType: {
            name: string;
            id: string;
        };
        notification: {
            name: string;
            id: string;
        };
    },
    Yup.AnyObject,
    {
        userType: {
            id: undefined;
            name: undefined;
        };
        notification: {
            id: undefined;
            name: undefined;
        };
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
