import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    fromTime: Date | null;
    toTime: Date | null;
    isAlwaysRun: boolean;

};

export type validationSchemaType = Yup.ObjectSchema<
    {
        fromTime: Date | null;
        toTime: Date | null;
    },
    Yup.AnyObject,
    {
        fromTime: undefined;
        toTime: undefined;
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

export type OperationTimeFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType;
};
