import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/img/brand/UnderConstruction.png'

import "./404.scss";

const UnderConstruction = props => {
  return (
    // <div className="not-found">
    //   <Link to="/home">
    //     <b>404</b>
    //   </Link>
    //   <br />
    //   <p>The requested page was not found on our server.</p>
    //   <p>
    //     Either you the url you typed in is incorrect, you do not have access
    //     privileges to the page, or the page you are looking for has been
    //     removed.
    //   </p>
    // </div>
    <div style={{ marginTop: '10%', marginLeft: '30%' }}>
      <img src={img} alt="404" />
    </div>
  );
};

export default UnderConstruction;
