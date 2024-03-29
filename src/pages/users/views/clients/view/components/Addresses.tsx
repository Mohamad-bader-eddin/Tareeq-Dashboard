import { useState } from "react";
import useAddressesColumns from "../hooks/useAddressesColumns";
import useAddressesRows from "../hooks/useAddressesRows";
import { Box, Stack } from "@mui/material";
import Table from "../../../../../../share/components/table/Table";
import { useTranslation } from "react-i18next";
import GenericDialog from "../../../../../../share/components/Dialog/GenericDialog";
// import DeleteIcon from "@mui/icons-material/Delete";
// import useMedeaQueries from "../../../../../../share/utils/useMideaQuery";
import { Address } from "../../types/clients";
import GenericEmbededMap from "../../../../../../share/components/map/GenericEmbededMap";
// import useDeleteAllAdresses from "../hooks/useDeleteAllAdresses";

const Addresses = ({
  data,
  isLoading,
}: {
  data: Address[];
  isLoading: boolean;
}) => {
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const { t } = useTranslation();
  const handleInfoAdress = ({ data }: { data: Address }) => {
    setOpenInfoDialog(true);
    setLat(data.lat);
    setLong(data.long);
  };
  const { rows } = useAddressesRows({ data: data });
  const { columns } = useAddressesColumns({
    handleInfoAdress,
  });

  // const { mutate, isLoading: deleteLoading } = useDeleteAllAdresses();
  // const handleDeleteAllAddresses = () => {
  //   mutate(id);
  // };
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        {/* <Button
          variant="outlined"
          color={"error"}
          endIcon={<DeleteIcon />}
          onClick={handleDeleteAllAddresses}
          sx={{
            fontSize: "14px",
            mt: "15px",
            mb: tablet ? "15px" : "",
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
          }}
        >
          {t("delete_all_addresses_for_this_user")}
        </Button> */}
      </Stack>
      <Table
        columns={columns}
        rows={rows}
        title={t("addresses")}
        loading={isLoading}
      />
      <GenericDialog
        open={openInfoDialog}
        setOpen={setOpenInfoDialog}
        elementContent={
          <GenericEmbededMap lat={lat || 33.513674} long={long || 36.276526} />
        }
        handleAgree={() => {}}
        hideAgreeBtn={true}
      />
    </Box>
  );
};

export default Addresses;
