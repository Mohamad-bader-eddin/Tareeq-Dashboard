import { Zone } from "../types";

type Option = {
  id: string;
  name: string;
};

const useZoneMaper = ({ data }: { data: Zone[] }) => {
  const options: Option[] = [];
  data?.forEach((el) => options.push({ id: el.id, name: el.name }));
  return { options };
};

export default useZoneMaper;
