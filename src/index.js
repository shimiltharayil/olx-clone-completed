import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./store/Context";
import  Context  from "./store/Context";
import firebaseApp from "./firebase/config2";

ReactDOM.render(
    
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
