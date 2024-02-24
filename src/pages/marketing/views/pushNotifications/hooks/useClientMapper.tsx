import { Option } from "../../../../../share/types";

type Client = {
  created_at: Date;
  id: string;
  image: string;
  name: string;
  phone: string;
  phone_verified_at: Date;
};

const useClientMapper = ({ data }: { data: Client[] }) => {
  const userOptions: Option[] = [];
  data?.forEach((el) =>
    userOptions.push({
      id: el.id,
      name: el.name,
    })
  );
  return { userOptions };
};

export default useClientMapper;
