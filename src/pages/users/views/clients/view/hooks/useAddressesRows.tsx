import { format } from "date-fns";
import { Address, AddressRows } from "../../types/clients";

const useAddressesRows = ({ data }: { data: Address[] }) => {
  const rows: AddressRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el?.id,
      address: el?.address,
      dateAdded: format(new Date(el?.updated_at), "dd/MM/yyyy"),
      lat: el?.lat,
      long: el?.long,
    })
  );
  return { rows };
};

export default useAddressesRows;
