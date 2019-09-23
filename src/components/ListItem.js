import React, { Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import extractHostName from "./../core/getHostName";
import arrow from "./../../public/asset/grayarrow2x.gif";

const ListItem = props => {
  const num = ind => {
    return (ind += 1);
  };
  if (props.detail) {
    const { title, score, url, by, descendants } = props.detail;
    const { id, createdISO } = by;
    const { index } = props;
    const hostname = extractHostName(url);

    return (
      <Fragment>
        <div key={index} className="media text-muted">
          <p className="index">{num(index)}.</p>
          <img src={arrow} className="arrow" alt="upvote" />
          <p className="mb-0 small text-dark lh-125 mt-1 ml-1">
            {title} <span className="text-gray small">({hostname})</span>
            <p className=" text-gray small">
              <span className="">
                {score} points by {id}{" "}
                <Link to="/">
                  <Moment fromNow>{createdISO}</Moment>
                </Link>{" "}
                | hide | {descendants} comments
              </span>
            </p>
          </p>
        </div>
      </Fragment>
    );
  }
};

export default ListItem;
