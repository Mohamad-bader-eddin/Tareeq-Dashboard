import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    note: string;
};

export type validationSchemaType = Yup.ObjectSchema<
    {
        note: string;
    },
    Yup.AnyObject,
    {
        note: undefined;
    },
    ""
>;

export type onSubmitType = (
    // eslint-disable-next-line no-unused-vars
    values: initialValuesType,
    // eslint-disable-next-line no-unused-vars
    formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type AdminNoteFormType = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType;
};
