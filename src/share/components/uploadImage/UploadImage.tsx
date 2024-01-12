import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Stack, Avatar, Typography, Box } from "@mui/material";
import { FormikProps } from "formik";
// import { useMemo, useState } from "react";
import { InputMargin } from "../../constants";
import useMedeaQueries from "../../utils/useMideaQuery";

const UploadImage = <T extends Record<string, unknown>>({
  formik,
  name,
  title,
}: UploadImageProps<T>) => {
  const { tablet } = useMedeaQueries();
  // const [click, setClick] = useState(false);
  // const error = useMemo(() => {
  //   if ((formik.isSubmitting || click) && formik.errors[name])
  //     return formik.errors[name];
  //   else return "";
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formik.errors, name]);

  return (
    <Box sx={{ mb: InputMargin }}>
      <Stack
        direction={tablet ? "column" : "row"}
        alignItems={tablet ? "center" : "flex-end"}
      >
        <Avatar
          variant="rounded"
          src={
            formik.values[name]
              ? (formik.values[name] as string).toString().startsWith("http")
                ? (formik.values[name] as string)
                : URL.createObjectURL(formik.values[name] as Blob | MediaSource)
              : ""
          }
          sx={{
            width: "150px",
            height: "150px",
            marginInlineEnd: tablet ? "" : "20px",
            mb: tablet ? "20px" : "",
          }}
        />
        <Button
          component="label"
          variant="outlined"
          endIcon={<CloudUploadIcon />}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
          }}
        >
          {title}
          <input
            type="file"
            style={{ display: "none" }}
            name={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.currentTarget.files) {
                formik.setFieldValue(name, event.currentTarget.files[0]);
              }
              // setClick((prev) => !prev);
            }}
            accept=".jpeg, .jpg, .png"
          />
        </Button>
      </Stack>
      <Typography
        variant="body2"
        color="#d32f2f"
        sx={{
          marginInlineStart: "15px",
          mt: "10px",
          textAlign: tablet ? "center" : "start",
        }}
      >
        {<>{formik.errors[name]}</>}
      </Typography>
    </Box>
  );
};

type UploadImageProps<T> = {
  formik: FormikProps<T>;
  name: string;
  title: string;
};

export default UploadImage;
