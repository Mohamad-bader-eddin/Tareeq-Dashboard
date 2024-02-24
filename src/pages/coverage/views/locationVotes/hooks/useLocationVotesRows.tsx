import { format } from "date-fns";
import { LocationVotes, LocationVotesRows } from "../types/LocationVotes";

const useLocationVotesRows = ({ data }: { data: LocationVotes[] }) => {
  const rows: LocationVotesRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      client: el.user.name,
      clientId: el.user_id,
      createdAt: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useLocationVotesRows;
