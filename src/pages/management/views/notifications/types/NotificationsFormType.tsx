import { FormikHelpers } from "formik";

export type initialValuesType = {
  messsages: boolean;
  pendingOrders: boolean;
  scheduledOrders: boolean;
};

export type onSubmitType = (
  // eslint-disable-next-line no-unused-vars
  values: initialValuesType,
  // eslint-disable-next-line no-unused-vars
  formikHelpers: FormikHelpers<initialValuesType>
) => void;

export type NotificationsFormType = {
  initialValues: initialValuesType;
  onSubmit: onSubmitType;
};
