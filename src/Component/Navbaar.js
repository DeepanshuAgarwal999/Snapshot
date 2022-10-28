import React from "react";

const snapshotlogo = "http://www.kaleida.co.uk/app/uploads/2017/03/Logo-Colour-Snapshot.jpg";

const Navbaar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark " >
      <img 
        src={snapshotlogo}
        
        style={{
          width: "7rem",
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
