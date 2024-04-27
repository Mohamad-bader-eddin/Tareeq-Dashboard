import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { AddPolygonsFormType } from "../types/AddPolygonsFormType";
// import { Box, Stack, IconButton } from "@mui/material";
// import Input from "../../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../../share/components/submitButton/SubmitButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import useMedeaQueries from "../../../../../../share/utils/useMideaQuery";
// import { AddPolygonsFormError } from "../types/AddPolygonsFormType";
import AutocompleteInput from "../../../../../../share/components/autoComplete/AutocompleteInput";
import useZoneQuery from "../../../../../../share/hooks/useZoneQuery";
import useZoneMaper from "../../../../../../share/hooks/useZoneMaper";
import UploadExcelButton from "../../components/UploadExcelButton";
import { Box } from "@mui/material";
// import PolygonsMap from "../../components/PolygonsMap";

const AddPolygonsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddPolygonsFormType) => {
  const { t } = useTranslation();
  // const { laptop } = useMedeaQueries();
  const { data, isLoading } = useZoneQuery();
  const { options } = useZoneMaper({ data: data?.data.content });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <AutocompleteInput
              formik={formik}
              label={t("zone")}
              name="zone"
              options={options}
              loading={isLoading}
            />
            <UploadExcelButton
              formik={formik}
              name="file"
              title="Upload File"
            />
            {/* <PolygonsMap formik={formik} /> */}
            {/* <FieldArray name="locations">
              {({ push, remove }) => (
                <Box>
                  {formik.values.locations.map((location, index) => (
                    <Stack key={index} direction={laptop ? "column" : "row"}>
                      <Box
                        sx={{
                          flexBasis: "44%",
                          marginInlineEnd: "10px",
                          width: laptop ? "100%" : "",
                        }}
                      >
                        <Input
                          formik={formik}
                          label={t("latitude")}
                          name={`locations[${index}].latitude`}
                          type="number"
                          value={location.latitude}
                          step={0.1}
                          error={Boolean(
                            formik.touched.locations &&
                              formik.touched.locations[index] &&
                              formik.errors.locations &&
                              (formik.errors as AddPolygonsFormError).locations[
                                index
                              ]
                          )}
                          helperText={
                            formik.touched.locations &&
                            formik.touched.locations[index] &&
                            formik.errors.locations &&
                            (formik.errors as AddPolygonsFormError).locations[
                              index
                            ]
                              ? (formik.errors as AddPolygonsFormError)
                                  .locations[index]?.latitude
                              : ""
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          flexBasis: "44%",
                          marginInlineEnd: "10px",
                          width: laptop ? "100%" : "",
                        }}
                      >
                        <Input
                          formik={formik}
                          label={t("longitude")}
                          name={`locations[${index}].longitude`}
                          type="number"
                          value={location.longitude}
                          step={0.1}
                          error={Boolean(
                            formik.touched.locations &&
                              formik.touched.locations[index] &&
                              formik.errors.locations &&
                              (formik.errors as AddPolygonsFormError).locations[
                                index
                              ]
                          )}
                          helperText={
                            formik.touched.locations &&
                            formik.touched.locations[index] &&
                            formik.errors.locations &&
                            (formik.errors as AddPolygonsFormError).locations[
                              index
                            ]
                              ? (formik.errors as AddPolygonsFormError)
                                  .locations[index].longitude
                              : ""
                          }
                        />
                      </Box>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ flexBasis: "12%" }}
                      >
                        {index > 0 && (
                          <IconButton
                            color="error"
                            onClick={() => remove(index)}
                            sx={{ marginBlock: laptop ? "-10px 30px" : "" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                        {index === formik.values.locations.length - 1 && (
                          <IconButton
                            color="info"
                            sx={{ marginBlock: laptop ? "-10px 30px" : "" }}
                            onClick={() => push({} as Location)}
                          >
                            <AddCircleIcon />
                          </IconButton>
                        )}
                      </Stack>
                    </Stack>
                  ))}
                </Box>
              )}
            </FieldArray> */}
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("add")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPolygonsForm;
