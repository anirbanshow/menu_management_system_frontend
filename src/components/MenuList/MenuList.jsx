import React from 'react';
import MenuItem from './../MenuItem/MenuItem';

const MenuList = ({ menuItems }) => {
    return (
        <>
            <ul>
                {menuItems?.map(item => (
                    <MenuItem key={item.id} item={item} depth={0} />
                ))}
            </ul>
        </>
    );
};

export default MenuList;