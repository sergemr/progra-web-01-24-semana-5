import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <button>Salude</button>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
