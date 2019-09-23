import React, { Fragment } from "react";
import ListItem from "./ListItem";

const NewsList = ({ details }) => {
  return (
    <Fragment>
      {details &&
        details.map((detail, index) => (
          <ListItem key={index} detail={detail} index={index} />
        ))}
    </Fragment>
  );
};

export default NewsList;
