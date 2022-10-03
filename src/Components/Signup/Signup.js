import Logo from '../../olx-logo.png';
import React, {useState, useContext} from 'react';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import { auth, db } from "../../firebase/config"
export default function Signup() {
 const history = useHistory();
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");
 const {firebaseApp} = useContext(FirebaseContext)
 const handleSubmit = (e) => {
   e.preventDefault()
  firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((result) => {
    result.user.updateProfile( {displayName:username} ).then(() => {
      db.collection("user").add({
        id:result.user.uid,
        name:username,
        phone:phone,
        }).then(() => {
             history.push("/")
        })

    })
  })
 }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value = {username}
            onChange = { (e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange = { (e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={ (e) => setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => {
          history.push("/login")
        }} >Login</a>
      </div>
    </div>
  );
}
