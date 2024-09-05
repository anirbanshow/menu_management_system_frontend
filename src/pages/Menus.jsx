import axios from 'axios';
import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

import MenuList from './../components/MenuList/MenuList';
import MenuItemForm from '../components/MenuItemForm/MenuItemForm';
import RootMenu from '../components/RootMenu/RootMenu';

const Menus = () => {

    const rootMenuSelector = useSelector(state => state.RootMenu);

    const { VITE_URL } = import.meta.env;

    const [menuItems, setMenuItems] = useState([]);

    const [childMenus, setChildMenus] = useState([]);

    async function fetchMenus() {
        let response = await fetch(`${VITE_URL}/menus`);
        response = await response.json();
        setMenuItems(response);
    }

    useEffect(() => {
        fetchMenus();
    }, []);

    async function fetchChildMenus() {
        try {
            let response = await fetch(`${VITE_URL}/children-menus`);
            response = await response.json();
            setChildMenus(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchChildMenus();
    }, []);

    const addMenuItem = async (data) => {

        try {
            const response = await axios.post(`${VITE_URL}/menus`, data)
            fetchMenus();
            fetchChildMenus();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">

            <h1 className="text-center">Menu Management System</h1>

            <div className='row'>

                <div className='col-md-7'>

                    <RootMenu />

                    {
                        rootMenuSelector === "systemmanagement" && (
                            <MenuList menuItems={menuItems} />
                        )

                    }
                </div>

                <div className='col-md-5'>
                    {
                        rootMenuSelector === "systemmanagement" && (
                            <MenuItemForm
                                onAdd={addMenuItem}
                                menuItems={menuItems}
                                childMenus={childMenus}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Menus;
