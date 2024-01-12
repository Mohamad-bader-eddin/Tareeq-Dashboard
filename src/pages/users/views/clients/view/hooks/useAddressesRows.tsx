import { format } from "date-fns";
import { Address, AddressRows } from "../../types/clients";

const useAddressesRows = ({ data }: { data: Address[] }) => {
  const rows: AddressRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      address: el.address,
      dateAdded: format(new Date(el.created_at), "dd/MM/yyyy"),
      isSavedAddress: Boolean(el.is_save),
    })
  );
  return { rows };
};

export default useAddressesRows;
