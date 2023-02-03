import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, Box, Button } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%" justifyContent="space-between">
        <Box width="100%">
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
        <Box width= "15rem" >
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "100%" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
           </Box>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;