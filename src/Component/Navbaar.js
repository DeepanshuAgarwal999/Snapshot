import React from "react";
import { useNavigate } from 'react-router-dom'
const snapshotlogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLThgYhUmEzeq8lAu40bRXKYKwy0rplxUJyw&usqp=CAU";

const Navbaar = () => {
  const navigate=useNavigate();
  const ReverseBack =()=>{
    navigate('/users')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark " style={{position:"sticky",top:-1}} >
      <img 
        src={snapshotlogo}
        onClick={ReverseBack}
        style={{
          width: "8rem",
          position: "relative",
          left: "3%",
          cursor: "pointer",
        }}
        alt=""
      />
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
    </nav>
  );
};
export default Navbaar;
