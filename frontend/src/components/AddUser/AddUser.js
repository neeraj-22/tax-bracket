import React, { Fragment} from "react";
// import { Link } from "react-router-dom";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";

const Signup = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState();

  return (
    <Fragment>
      <Header />
      <div className="formContainer">
        <h3>Register your account</h3>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputName"
              required
              // onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInputName">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingInputEmail"
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInputEmail">Date of Birth</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInputEmail1"
              required
            />
            <label htmlFor="floatingInputEmail1">Age</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInputPassword"
              required
            />
            <label htmlFor="floatingInputPassword">Salary</label>
          </div>
          <button className="btn btn-primary mt-3" type="submit">Add User</button>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Signup;
