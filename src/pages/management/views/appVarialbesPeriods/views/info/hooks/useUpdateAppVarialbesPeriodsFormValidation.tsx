import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../../add/types/AddAppVarialbesPeriodsFormType";
import useUpdateVarialbesPeriodQuery from "./useUpdateVarialbesPeriodQuery";
import { VarialbesPeriods } from "../../../types/AppVarialbesPeriodsType";
import { convertToTime } from "../../../../../../../share/utils/convertToTime";

const useAddAppVarialbesPeriodsFormValidation = ({
  data,
}: {
  data: VarialbesPeriods;
}) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useUpdateVarialbesPeriodQuery();

  const initialValues = {
    from: convertToTime(data?.from) || null,
    to: convertToTime(data?.to) || null,
    price_by_minute: data?.price_by_minute || 0,
    price_by_km: data?.price_by_km || 0,
    minimum_value: data?.minimum_value || 0,
    extra_value: data?.extra_value || 0,
    initial_value: data?.initial_value || 0,
    waiting_value: data?.waiting_value || 0,
    vehicleType: {
      id: data?.vehicle_type?.id as string,
      name: data?.vehicle_type?.name as string,
    },
  };

  const validationSchema = Yup.object({
    from: Yup.date().required(t("required")),
    to: Yup.date().required(t("required")),
    price_by_minute: Yup.number().required(t("required")),
    price_by_km: Yup.number().required(t("required")),
    minimum_value: Yup.number().required(t("required")),
    extra_value: Yup.number().required(t("required")),
    initial_value: Yup.number().required(t("required")),
    waiting_value: Yup.number().required(t("required")),
    vehicleType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        id: data.id,
        from: values.from?.toLocaleTimeString("en-uk", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          // hourCycle: "h11",
        }) as string,
        to: values.to?.toLocaleTimeString("en-uk", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          // hourCycle: "h11",
        }) as string,
        extra_value: values.extra_value,
        initial_value: values.initial_value,
        minimum_value: values.minimum_value,
        price_by_km: values.price_by_km,
        price_by_minute: values.price_by_minute,
        waiting_value: values.waiting_value,
        vehicle_type_id: values.vehicleType?.id as string,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          // formikHelpers.resetForm();
        },
        onError: (error) => {
          const err = error as Error;
          setOpenError(true);
          setErrorMsg(err.message);
          formikHelpers.setSubmitting(false);
        },
      }
    );
    // console.log("Form Data :", values);
  };
  return {
    initialValues,
    onSubmit,
    validationSchema,
    msg,
    openSucsses,
    setOpenSucsses,
    openError,
    errorMsg,
    setOpenError,
  };
};

export default useAddAppVarialbesPeriodsFormValidation;
