import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <p className="mr-2 text-gray">More</p>
      <small className="d-block mt-3 bottom" />

      <div className="text-center small mt-2">
        <p className="text-1">Applications are open for YC Winter 2020</p>

        <p>
          Guidelines | FAQ | Support | API | Security | Lists | Bookmarklet |
          Legal | Apply to YC | Contact
        </p>

        <span>
          <form>
            Search:
            <input />
          </form>
        </span>
      </div>
    </Fragment>
  );
};

export default Footer;
