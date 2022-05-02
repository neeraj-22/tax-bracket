import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { findUserTax } from "../../API/coreAPICalls.js";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";

const UserTax = () => {

  const {id} = useParams();

  const [userData, setUserData] = useState([]);
  const [userTaxData, setUserTaxData] = useState({
    taxAmount : 0,
    taxPercentage : 0
  });

  const [loading, setLoading] = useState(false);

  const { taxAmount, taxPercentage } = userTaxData;

  const loadUserTaxDetails = (id) => {
    setLoading(true);
    findUserTax(id).then((data) => {
      if (data.error) {
        setLoading(false);
      } else {
        setUserData(data.user);
        setUserTaxData({...userTaxData, taxAmount : data.taxAmount, taxPercentage:data.taxPercentage} );
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    loadUserTaxDetails(id);
    //eslint-disable-next-line
  }, [id]);

  return (
    <Fragment>
      <Header />
      {loading 
      ? "Loading..." 
      : (<div
        className="card text-center"
        style={{
          width: "50%",
          marginBottom: "4rem",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div className="card-header">{userData.name}</div>
        <div className="card-body">
          <h5 className="card-title">{`Salary : ${userData.salary}`}</h5>
          <p className="card-text">{`Age : ${userData.age}`}</p>
          <p className="card-text">{`Tax Percentage : ${taxPercentage}`}</p>
          <p className="card-text">{`Tax Amount : ${taxAmount}`}</p>
          <Link to={`/`}>
            <button type="button" className="btn btn-primary">
              Back To Homepage
            </button>
          </Link>
        </div>
      </div>)}
      <Footer />
    </Fragment>
  );
};

export default UserTax;
