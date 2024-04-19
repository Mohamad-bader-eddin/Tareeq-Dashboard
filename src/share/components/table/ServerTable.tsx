import { Box, ThemeProvider, createTheme, Typography } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  // GridToolbarContainer,
  // GridToolbarExport,
} from "@mui/x-data-grid";
import LoadingSkeleton from "./LoadingSkeleton";
import { Dispatch, SetStateAction } from "react";
import useMedeaQueries from "../../utils/useMideaQuery";

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

const ServerTable = ({
  rows,
  columns,
  loading,
  title,
  totalCount,
  paginationModel,
  setPaginationModel,
  rowCount,
  ...props
}: TableType) => {
  const { darkMode } = useDarkMode();
  const { laptop } = useMedeaQueries();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant="body1" sx={{ marginBottom: "12px" }}>
        {title ? title : ""} {totalCount ? ` - ${totalCount}` : ""}
      </Typography>
      <Box
        sx={{
          height: "450px",
        }}
      >
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            initialState={{
              pagination: { paginationModel: paginationModel },
            }}
            pageSizeOptions={[10, 50, 100]}
            pagination
            paginationMode="server"
            rowCount={rowCount ? rowCount : totalCount}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            slots={{
              // toolbar: CustomToolbar,
              loadingOverlay: LoadingSkeleton,
            }}
            sx={{
              fontSize: laptop ? "9px" : "14px",
              direction: "ltr",
              ".css-wop1k0-MuiDataGrid-footerContainer,.css-128fb87-MuiDataGrid-toolbarContainer":
                { direction: "ltr" },
            }}
            {...props}
            disableColumnMenu={laptop ? true : false}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

type HeadType = {
  title?: string;
  totalCount?: number;
};

export type TableType = HeadType & {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
  rowCount: number;
  paginationModel: {
    page: number;
    pageSize: number;
  };
  setPaginationModel: Dispatch<
    SetStateAction<{
      page: number;
      pageSize: number;
    }>
  >;
};

export default ServerTable;
