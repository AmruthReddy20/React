import React from "react";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIconWrapper from "../Atoms/SearchIconWrapper";
import StyledInputBase from "../Atoms/StyledInputBase";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

function SearchIcons() {
  return (
    <div>
      <Search>
        <SearchIconWrapper />
        <StyledInputBase />
      </Search>
    </div>
  );
}

export default SearchIcons;
