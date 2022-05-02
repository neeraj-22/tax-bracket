import React, {Fragment, useState, useEffect} from 'react'
import Header from '../CommonComponents/Header.js'
import Footer from '../CommonComponents/Footer.js'
import UserData from './UserData.js'
import { getAllUsers } from "../../API/userAPICalls.js";

const Homepage = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      if (data.error) {
        setLoading(false);
      } else {
        console.log(data);
        setUsers(data.users);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <Fragment>
      <Header/>
        {loading
        ? "Loading.."
        : users.map((user, index) => (
              <div key={index}>
                <UserData name={user.name} salary={user.salary} age={user.age} id={user._id}/>
              </div>
        ))
      }
      <Footer/>
    </Fragment>
  )
}

export default Homepage