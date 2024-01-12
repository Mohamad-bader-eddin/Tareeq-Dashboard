import { format } from "date-fns";
import { Slider, SliderRow } from "../types/sliderType";

const useSliderRows = ({ data }: { data: Slider[] }) => {
  const rows: SliderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      image: el.image,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useSliderRows;
