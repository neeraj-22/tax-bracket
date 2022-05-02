import React, {Fragment, useState, useEffect} from 'react'
import Header from '../CommonComponents/Header.js'
import Footer from '../CommonComponents/Footer.js'
import UserData from './UserData.js'
import { getAllUsers } from "../../API/coreAPICalls.js";

const Homepage = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(); 

  const loadAllUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      if (data.error) {
        setLoading(false);
      } else {
        console.log(data);
        setUsers(data.users);
        setLoading(false);
        if(data.usersCount === 0){
          setMessage("No Users Found")
        }
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
        : 
        users.map((user, index) => (
              <div key={index}>
                <UserData name={user.name} salary={user.salary} age={user.age} id={user._id}/>
              </div>
        ))
      }
      <p>{JSON.stringify(message)}</p>
      <Footer/>
    </Fragment>
  )
}

export default Homepage