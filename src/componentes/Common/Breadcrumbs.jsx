import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({pageTitle}) {
  return (
   <>
   <ul className="breadcrumbs">
    <li><Link to="/">Home</Link></li>
    <li><span className="divider">/</span></li>
    <li><span className="last-page bg-gradient-to-t from-yellow from-50% to-white to-50%">{pageTitle}</span></li>
   </ul>
   </>
  );
}

export default Breadcrumbs;
