import React, { useState, useEffect, useRef } from 'react';

function NestedDropdown() {
  const [subMenu, setSubMenu] = useState(null);
  const [subSubMenu, setSubSubMenu] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSubMenu(null);
        setSubSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseLeave = () => {
    setSubMenu(null);
    setSubSubMenu(null);
  };

  const menuData = [
    { title: "Food" },
    { title: "Cleaning Supplies" },
    { title: "Personal Care" },
    { title: "Health & Wellness" },
    { title: "Baby Care" },
    { title: "Home & Kitchen" },
  ];

  const foodData = [
    {
      text: "Fruits & Vegetables",
      children: [
        { text: "Fresh Fruits" },
        { text: "Fresh Vegetables" },
      ],
    },
    {
      text: "Meat & Fish",
      children: [
        { text: "Chicken" },
        { text: "Beef" },
        { text: "Seafood" },
      ],
    },
    { text: "Sauces and Pickles" },
    { text: "Candy & Chocolates" },
    { text: "Beverages" },
  ];

  const cleanData = [
    { text: "Detergent" },
    { text: "Disinfectant" },
    { text: "Mop" }
  ];

  const personalData = [
    { text: "Shampoo" },
    { text: "Toothpaste" },
    { text: "Soap" }
  ];

  const DropdownMenu = ({ subData, top, onHover, subSubMenu }) => (
    <div className={`absolute left-full z-20 rounded-md ${top || 'top-0'} pr-1 bg-white shadow-md`}>
      {subData.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => onHover && onHover(index)}
          className="relative group"
        >
          <div className="flex border-b items-center hover:text-green-500 border-gray-300 justify-between cursor-pointer">
            <p className="whitespace-nowrap text-sm font-md text-black hover:text-green-400 px-4 py-1 my-2">
              {item.text}
            </p>
            {item.children && <i className="fa-solid fa-chevron-right"></i>}
          </div>

          {item.children && subSubMenu === index && (
            <div className="absolute top-0 left-full z-30 bg-white shadow-md rounded-md whitespace-nowrap">
              {item.children.map((child, childIndex) => (
                <div
                  key={childIndex}
                  className="border-b px-4 py-1 text-sm text-black hover:text-green-400 cursor-pointer"
                >
                  {child.text}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-30" ref={dropdownRef} onMouseLeave={handleMouseLeave}>
      <div className="w-50 p-1 rounded-md border border-gray-300 text-sm bg-white absolute right-0 left-0 shadow-md">
        {menuData.map((item, index) => (
          <div
            onMouseEnter={() => {
              setSubMenu(index);
              setSubSubMenu(null);
            }}
            key={index}
            className={`flex items-center justify-between cursor-pointer hover:text-green-500 
                ${index !== menuData.length - 1 ? "border-b border-gray-300" : ""}`}
          >
            <p className="text-md font-md text-black hover:text-green-400 px-2 py-1 my-2">
              {item.title}
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        ))}

        {subMenu === 0 && (
          <DropdownMenu
            subData={foodData}
            onHover={(index) => setSubSubMenu(index)}
            subSubMenu={subSubMenu}
          />
        )}
        {subMenu === 1 && <DropdownMenu subData={cleanData} top="top-10" />}
        {subMenu === 2 && <DropdownMenu subData={personalData} top="top-20" />}
      </div>
    </div>
  );
}

export default NestedDropdown;
