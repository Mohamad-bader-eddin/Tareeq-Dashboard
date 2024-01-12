import { Form, Formik } from "formik";
import { AddAppVarialbesPeriodsFormType } from "../types/AddAppVarialbesPeriodsFormType";
import TimeInput from "../../../../../../share/components/time/TimeInput";
import { useTranslation } from "react-i18next";
import { Box, Divider } from "@mui/material";
import { MathInfo } from "./AddAppVarialbesPeriodsForm.style";
import Input from "../../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../../share/components/submitButton/SubmitButton";

const AddAppVarialbesPeriodsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddAppVarialbesPeriodsFormType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <TimeInput formik={formik} label={t("from")} name="from" />
            <TimeInput formik={formik} label={t("to")} name="to" />
            <Divider />
            <MathInfo>
              <h3>Taxi Variables:</h3>
              <h4 className="math">
                Total = X + ( Y * pow ( expected_kilometers , power ) ) + ( Z *
                Minutes ) + S
              </h4>
              <p>power variable equals:</p>
              <p>
                Power1 <span>when</span> 15km &lt; expected_kilometers &lt; 20km
              </p>
              <p>
                Power2 <span>when</span> 20km &lt; expected_kilometers
              </p>
              <p>
                1 <span>when</span> elsewhere
              </p>
              <p>
                P value <span>is the minimum value that should </span>Total{" "}
                <span>not lesser than it, So if</span> Total &lt; P then Total=P
              </p>
            </MathInfo>
            <Input formik={formik} label="X" name="X" type="number" />
            <Input formik={formik} label="Y" name="Y" type="number" />
            <Input formik={formik} label="Z" name="Z" type="number" />
            <Input formik={formik} label="S" name="S" type="number" />
            <Input formik={formik} label="P" name="P" type="number" />
            <Input
              formik={formik}
              label="Power 1"
              name="Power1"
              type="number"
            />
            <Input
              formik={formik}
              label="Power 2"
              name="Power2"
              type="number"
            />
            <Divider />
            <MathInfo>
              <h3>P2P Variables:</h3>
              <h4 className="math">
                Total = A + ( B * expected_kilometers ) + ( C * Minutes ) + D
              </h4>
              <p>
                L value <span>is the minimum value that should</span> Total{" "}
                <span>not lesser than it, So if</span> Total &lt; L then Total=L
              </p>
            </MathInfo>
            <Input formik={formik} label="A" name="A" type="number" />
            <Input formik={formik} label="B" name="B" type="number" />
            <Input formik={formik} label="C" name="C" type="number" />
            <Input formik={formik} label="D" name="D" type="number" />
            <Input formik={formik} label="L" name="L" type="number" />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddAppVarialbesPeriodsForm;
