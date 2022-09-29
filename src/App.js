import './App.css';
import React, { useReducer, createContext } from 'react';
import Header from "./layout/Header";
import Home from "./components/Home";
import DatVe from "./components/DatVe";
import TuyenDuong from "./components/TuyenDuong";
import Footer from "./layout/Footer";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import myReducer from './reducers/MyReducer';
import AboutUs from './components/AboutUs';


export const UserContext = createContext()

function App() {
  const [user, dispatch] = useReducer(myReducer)

  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, dispatch]}>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/ticketbookings/:routesID"  element={<DatVe />} />
          <Route path="/routes"  element={<TuyenDuong />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/aboutus"  element={<AboutUs />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
