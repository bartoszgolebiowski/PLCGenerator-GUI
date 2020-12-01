import React from "react";
import { makeStyles } from "@material-ui/core";

import { HomeForm } from "../components/home";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "10vh",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <div className={classes.container}>
      <HomeForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
