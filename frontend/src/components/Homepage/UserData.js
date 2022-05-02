import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserData = ({ name, age, salary, id }) => {
  return (
    <Fragment>
      <div
        className="card text-center"
        style={{
          width: "50%",
          marginBottom: "4rem",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div className="card-header">{name}</div>
        <div className="card-body">
          <h5 className="card-title">{`Salary : ${salary}`}</h5>
          <p className="card-text">{`Age : ${age}`}</p>
          <p className="card-text">{`id : ${id}`}</p>
          <Link to={`/user/${id}/tax`}>
          <button
            type="button"
            className="btn btn-primary"
          >
            Calculate Tax
          </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UserData;
