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
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant="h6" sx={{ marginBottom: "15px" }}>
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
              direction: "ltr",
              ".css-wop1k0-MuiDataGrid-footerContainer,.css-128fb87-MuiDataGrid-toolbarContainer":
                { direction: "ltr" },
            }}
            {...props}
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