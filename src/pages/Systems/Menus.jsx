import axios from 'axios';

import { useEffect, useState } from 'react';

import BaseLayout from '../../layouts/BaseLayout'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ContentHeader from '../../components/ContentHeader/ContentHeader';

import RootMenu from '../../components/RootMenu/RootMenu';
import MenuList from './../../components/MenuList/MenuList';
import MenuItemForm from '../../components/MenuItemForm/MenuItemForm';

const Menus = () => {

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
        <BaseLayout>

            <div className="content_area">
                <div className="inner_wrapper">

                    <Breadcrumb />

                    <ContentHeader />

                    <div className="row menu_listing">

                        <div className="col-md-6">

                            <RootMenu />

                            <MenuList menuItems={menuItems} />

                        </div>

                        <div className="col-md-6">
                            <MenuItemForm
                                onAdd={addMenuItem}
                                menuItems={menuItems}
                                childMenus={childMenus}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </BaseLayout>
    )
}

export default Menus;