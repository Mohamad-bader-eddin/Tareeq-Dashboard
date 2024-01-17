import {
  VarialbesPeriods,
  VarialbesPeriodsRow,
} from "../types/AppVarialbesPeriodsType";

const useAppVarialbesPeriodsRows = ({ data }: { data: VarialbesPeriods[] }) => {
  const rows: VarialbesPeriodsRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      periodTimeFrom: el.from,
      periodTimeTo: el.to,
    })
  );
  return { rows };
};

export default useAppVarialbesPeriodsRows;
