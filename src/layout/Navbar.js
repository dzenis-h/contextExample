import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavBarStyles";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { obj } from "../helper/langObj";

const Navbar = (props) => {
  const { lang } = useContext(LangContext);
  const { toggle, isDark } = useContext(ThemeContext);
  const { classes } = props;
  const { name, search } = obj[lang];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            {lang === "english" ? (
              <span role="img" aria-label="Language">
                🇺🇸
              </span>
            ) : (
              <span role="img" aria-label="Language">
                🇧🇦
              </span>
            )}
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            {name}
          </Typography>
          <div className={classes.grow}>
            <Switch onChange={toggle} />{" "}
            <IconButton className={classes.menuButton} color="inherit">
              {isDark === true ? (
                <span role="img" aria-label="Language">
                  ☾
                </span>
              ) : (
                <span role="img" aria-label="Language">
                  ☀
                </span>
              )}
            </IconButton>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);
