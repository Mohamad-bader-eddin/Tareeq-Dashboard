import { Vehicle } from "../../../../../../vehicles/types/Vehicles";

type Option = {
  id: string;
  name: string;
};

const useVehiclesMapper = ({ data }: { data: Vehicle[] }) => {
  const vehiclesOptions: Option[] = [];
  data?.forEach((el) =>
    vehiclesOptions.push({
      id: el.id as string,
      name: el.name,
    })
  );
  return { vehiclesOptions };
};

export default useVehiclesMapper;
