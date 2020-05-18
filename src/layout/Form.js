import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/FormStyles";
import { obj } from "../helper/langObj";
import { LangContext } from "../context/LangContext";

class Form extends Component {
  static contextType = LangContext;
  render() {
    const { classes } = this.props;
    const { lang, changeLang } = this.context;
    const { email, pass, remember, text } = obj[lang];

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{text}</Typography>
          <Select value={lang} onChange={changeLang}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="bosnian">Bosnian</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{pass}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {text}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
