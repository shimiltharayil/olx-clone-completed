import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Signup from './Components/Signup/Signup';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from "./Components/Create/Create"
import View from "./Pages/ViewPost"
import Post from "./store/PostContext"
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebaseApp} = useContext(FirebaseContext)
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => {
      
    };
  }, []);
  return (
    <div>
<Post>

      <Router>
      <Route exact path="/">
      <Home />
      </Route>
     
      <Route path="/signup">

      <Signup />
      </Route>
      <Route  path="/login">
      <Login />
      </Route>
      <Route  path="/create">
      <Create />
      </Route> 
      <Route  path="/view">
      <View />
      </Route>
      </Router>
  </Post>
    </div>
  );
}

export default App;
