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
      vehicleType: el?.vehicle_type?.name as string,
    })
  );
  return { rows };
};

export default useAppVarialbesPeriodsRows;
