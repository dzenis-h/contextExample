import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDark } = this.context;
    const style = {
      height: "100vh",
      width: "100vw",
      backgroundColor: isDark ? "black" : "white",
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
