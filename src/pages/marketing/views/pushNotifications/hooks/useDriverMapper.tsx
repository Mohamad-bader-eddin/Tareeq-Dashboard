import { Option } from "../../../../../share/types";

export type Drivers = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  password: string;
  driver_profit?: string;
  zone_id: string;
  image?: string;
  vehicle?: {
    id: string;
    model_number: string;
    brand: string;
    plat_number: string;
    minifacture_year: string;
    color: string;
    image: string;
    description: string;
    vehicle_type_id: string;
    created_at: Date;
  };
  model_number: string;
  brand: string;
  plat_number: string;
  minifacture_year: string;
  color: string;
  description: string;
  vehicle_type_id: string;
  created_at?: Date;
  vehicle_image?: File | undefined | string;
  driver_image?: File | undefined | string;
};

const useDriverMapper = ({ data }: { data: Drivers[] }) => {
  const driversOptions: Option[] = [];
  data?.forEach((el) =>
    driversOptions.push({
      id: el.id,
      name: el.name,
    })
  );
  return { driversOptions };
};

export default useDriverMapper;
