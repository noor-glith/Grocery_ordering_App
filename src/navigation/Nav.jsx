import React, { useState } from "react";
import NestedDropdown from "../components/NestedDropdown";
import { Link } from "react-router-dom";

function Nav() {
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-center px-2 py-4">
      <div className="flex items-center">
        <div className="relative">
          <button
            onClick={() => setMenu(!menu)}
            className="bg-slate-900 p-3 rounded-md text-white text-sm font-semibold"
          >
            <i className="fa-solid fa-table-cells-large mr-2"></i>
            Browser Category <i className="ml-1 fa-solid fa-angle-down"></i>
          </button>

          {menu && <NestedDropdown />}
        </div>

        
<ul className="flex ml-6 space-x-6">
  <li>
    <Link to="/" className="text-sm text-gray-700 hover:text-green-500">
      Home
    </Link>
  </li>
  <li>
    <Link to="/offers" className="text-sm text-gray-700 hover:text-green-500">
      Offer
    </Link>
  </li>
  <li>
    <Link to="/daily-deals" className="text-sm text-gray-700 hover:text-green-500">
      Daily Deal
    </Link>
  </li>
  <li>
    <Link to="/flat-sale" className="text-sm text-gray-700 hover:text-green-500">
      Flat Sale
    </Link>
  </li>
</ul>
      </div>

      <div>
        <button
          className="text-blue-500 text-sm mr-4 font-semi-bold"
          onClick={() => alert("contact us")}
        >
          <i className="fa-solid fa-headset"></i> +92 300 1234567
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 font-semibold py-2 px-3 text-white rounded-lg"
        >
          <i className="fa-solid fa-bag-shopping mr-2"></i> My Cart ({count})
        </button>
      </div>
    </div>
  );
}

export default Nav; 