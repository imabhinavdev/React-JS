import React, { useState } from 'react'
import "./style.css";
import Menu from "./MenuApi"
import MenuCard from './menuCard';
const Restaurant = () => {

    const [menuData, setmenuData] = useState(Menu)
    console.log(menuData);

    const filterItem = (category) => {
        const updateList = Menu.filter((curElement) => {
            return curElement.category === category;
        })
        setmenuData(updateList);
    }
    return (
        <>

            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setmenuData(Menu)}>All</button>
                </div>
            </nav>
            <MenuCard menuData={menuData} />

        </>

    )
}

export default Restaurant
