import React, { Fragment, useState, useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { createUser } from "../../API/authAPICalls";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  
  const navigate = useNavigate()
  
  const [values, setValues] = useState({
    name: "",
    salary: "",
    age: "",
    DOB: "",
  });

  const [message, setMessage] = useState("");

  const { name, salary, age, DOB, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    createUser({ name, salary, age, DOB })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if(success){
      navigate(`/`);
    }
    if(error){
      setMessage("Error in adding user")
    }
  }, [success, navigate, error])

  return (
    <Fragment>
      <Header />
      <div className="formContainer">
        <h3>Add User</h3>
        <form onSubmit={handleCreateUser}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputName"
              required
              placeholder="John Doe"
              onChange={handleChange("name")}
            />
            <label htmlFor="floatingInputName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingInputDOB"
              required
              onChange={handleChange("DOB")}
            />
            <label htmlFor="floatingInputDOB">Date of Birth</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInputAge"
              required
              onChange={handleChange("age")}
            />
            <label htmlFor="floatingInputAge">Age</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInputSalary"
              required
              onChange={handleChange("salary")}
            />
            <label htmlFor="floatingInputPassword">Salary</label>
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Add User
          </button>
        </form>
        {error ? <p>{JSON.stringify(message)}</p> : <p></p>}
      </div>
      <Footer/>
    </Fragment>
  );
};

export default AddUser;
