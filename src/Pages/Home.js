import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center " style={{ height: "70vh" }}>
          <div className="col-md 6 text-center">
            <Link to="/appointment">
              <button className="btn btn-info ">GET APPOINTMENT</button>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <Link to="/dashboard">
              <button className="btn btn-warning">DOCTOR`S</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
