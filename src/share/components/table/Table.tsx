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
import { useState } from "react";
import useMedeaQueries from "../../utils/useMideaQuery";

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

const Table = ({
  rows,
  columns,
  loading,
  title,
  totalCount,
  ...props
}: TableType) => {
  const { darkMode } = useDarkMode();
  const { laptop } = useMedeaQueries();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        {title ? title : ""} {totalCount ? ` - ${totalCount}` : ""}
      </Typography>
      <Box
        sx={{
          height: "450px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: { paginationModel: paginationModel },
          }}
          pageSizeOptions={[10, 50, 100]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          slots={{
            // toolbar: CustomToolbar,
            loadingOverlay: LoadingSkeleton,
          }}
          sx={{
            fontSize: laptop ? "11px" : "14px",
            direction: "ltr",
            ".css-wop1k0-MuiDataGrid-footerContainer,.css-128fb87-MuiDataGrid-toolbarContainer":
              { direction: "ltr" },
          }}
          {...props}
        />
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
};

export default Table;
