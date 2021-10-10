import React from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    zIndex: 200,
    backgroundColor: "yellow",
    padding: "10px 80px",

    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

export const AppPagination = ({ setPage, pageNumber }) => {
  const classes = useStyles();

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          sx={{ display: "flex", justifyContent: "center" }}
          variant="outlined"
          count={pageNumber}
        />
      </div>
    </div>
  );
};
