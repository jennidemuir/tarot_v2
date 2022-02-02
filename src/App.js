
import React, { useState } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import LogIn from "./Pages/LandingPage/LogIn/LogIn"
import SignUp from "./Pages/LandingPage/SignUp/SignUp";
import TarotLibrary from './Pages/TarotLibrary/TarotLibrary';
import TarotReading from "./Pages/TarotReading/TarotReading";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import LandingPage from "./Pages/LandingPage/LandingPage";
import { app } from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignUpAction = () => {
     const authentication = getAuth();
       createUserWithEmailAndPassword(authentication, email, password).then(
         (response) => {
           console.log(response);
         }
       );

   };


  return (
      <HashRouter>
        <Header/>
      <Routes>
        <Route path="/" >
          <Route path="TarotLibrary" element={<TarotLibrary />} />
          <Route path="TarotReading" element={<TarotReading />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp setEmail={setEmail} setPassword={setPassword} handleSignUpAction={() => handleSignUpAction()} />} />
        </Route>
      </Routes>
      </HashRouter>


  );
}

export default App;
