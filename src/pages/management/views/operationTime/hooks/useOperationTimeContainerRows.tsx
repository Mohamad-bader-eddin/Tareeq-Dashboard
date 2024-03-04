import { OperationTime, OperationTimeRows } from "../types/OperationTime";

const useOperationTimeContainerRows = ({ data }: { data: OperationTime[] }) => {
  const rows: OperationTimeRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      fromTime: el.from,
      toTime: el.to,
    })
  );
  return { rows };
};

export default useOperationTimeContainerRows;
