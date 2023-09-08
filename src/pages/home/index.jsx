import React from "react";
import { UsersIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import "../../assets/scss/home.scss"
function Home() {
  return (
    <div className="main">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h1 className="heading flex flex-col"><span className="company-name">ASTUDIO</span> Agency Test</h1>
      
      <div className="flex flex-col md:flex-row justify-between">
        <a href="users" className="btn-base btn-primary mt-5">
            <span className="button-icon">
            <UsersIcon class="h-5 w-5" />
            </span>
            <span className="button-text">
            Users
            </span>
        </a>
        <a href="products" className="btn-base btn-primary mt-5">
            <span className="button-icon">
            <ShoppingBagIcon class="h-5 w-5" />
            </span>
            <span className="button-text">
            Products
            </span>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Home;
