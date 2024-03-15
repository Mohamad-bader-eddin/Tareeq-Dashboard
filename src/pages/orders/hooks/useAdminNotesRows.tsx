import { format } from "date-fns";

const useAdminNotesRows = ({ data }: { data: AdminNotes[] }) => {
  const rows: AdminNotesRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el?.id,
      note: el?.title,
      createdAt: format(new Date(el?.created_at), "dd/MM/yyyy"),
      admin: el.admin,
    })
  );
  return { rows };
};

type AdminNotes = {
  id: string;
  title: string;
  order_id: string;
  created_at: Date;
  admin: string;
};

type AdminNotesRows = {
  id: string;
  admin: string;
  note: string;
  createdAt: string;
};

export default useAdminNotesRows;
