import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Icon,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TheatersIcon from "@material-ui/icons/Theaters";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import { useHistory } from "react-router";

export const Appbar = ({ search, setSearch, details = false }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {details && (
            <IconButton
              style={{ color: "#fff", marginRight: 8 }}
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Link to="/" className={classes.link}>
            <Icon style={{ color: "#fff" }}>
              <TheatersIcon />
            </Icon>
            <Typography className={classes.title} variant="h6" noWrap>
              my imdb
            </Typography>
          </Link>
          <div className={classes.grow} />
          {!details && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
