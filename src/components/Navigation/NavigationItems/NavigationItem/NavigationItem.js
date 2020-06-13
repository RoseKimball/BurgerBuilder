import React from "react";
import classes from "./NavigationItem.css";

const navigationItem = props => (
  <li className={classes.navigationItem}>
    <a href={props.link} className={classes.NavigationItem}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
