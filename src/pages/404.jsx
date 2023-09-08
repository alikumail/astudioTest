import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
    
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="text-slate-900 mb-4">
          Page not found
        </h4>
        <div className="text-base font-normal mb-10">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <Link
          to="/"
          className="btn btn-dark block text-center"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
