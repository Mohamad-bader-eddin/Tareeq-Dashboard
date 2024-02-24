import { Option } from "../../../../../share/types";
import { UserType } from "../types";

const useUserTypeMapper = ({ data }: { data: UserType[] }) => {
  const options: Option[] = [];
  data?.forEach((el) =>
    options.push({
      id: el.id,
      name: el.type,
    })
  );
  return { options };
};

export default useUserTypeMapper;
