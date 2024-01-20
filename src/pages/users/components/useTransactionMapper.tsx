import { Option } from "../../../share/types";
import { Transaction } from "../types/Transaction";

const useTransactionMapper = ({ data }: { data: Transaction[] }) => {
  const transactionOptions: Option[] = [];
  data?.forEach((el) =>
    transactionOptions.push({
      id: el.id as string,
      name: el.description,
    })
  );
  return { transactionOptions };
};

export default useTransactionMapper;
