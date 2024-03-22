import { Option } from "../../../../../share/types";

export type Drivers = {
  id: string;
  name: string;
  phone: string;
  last_name: string;
  current_lat: number;
  current_long: number;
};

const useDriverMapper = ({ data }: { data: Drivers[] }) => {
  const driversOptions: Option[] = [];
  data?.forEach((el) =>
    driversOptions.push({
      id: el.id,
      name: el.last_name
        ? el.name + " " + el.last_name + " - " + el.phone
        : el.name + " - " + el.phone,
    })
  );
  return { driversOptions };
};

export default useDriverMapper;
