import { FormikHelpers } from "formik";
import { initialValuesType } from "../types/NotificationsFormType";

const useNotificationsFormValidation = () => {
  const initialValues = {
    messsages: false,
    pendingOrders: false,
    scheduledOrders: false,
  };

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, onSubmit };
};

export default useNotificationsFormValidation;
