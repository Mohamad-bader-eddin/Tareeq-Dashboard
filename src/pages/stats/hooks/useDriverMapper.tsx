import { Option } from "../../../share/types";

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
  driversOptions.push({ id: "0", name: "All" });
  data?.forEach((el) =>
    driversOptions.push({
      id: el.id,
      name: el.last_name ? el.name + " " + el.last_name : el.name,
    })
  );
  return { driversOptions };
};

export default useDriverMapper;
