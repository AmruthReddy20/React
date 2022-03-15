import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
const StyledInputBaseEle = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function StyledInputBase() {
  return (
    <div>
      <StyledInputBaseEle
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}

export default StyledInputBase;
