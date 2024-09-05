import React from 'react';
import MenuItem from './../MenuItem/MenuItem';

const MenuList = ({ menuItems }) => {

    return (
        <>
            <div className='listing_wrapper'>
                {menuItems?.map(item => (
                    <MenuItem key={item.id} item={item} depth={0} />
                ))}
            </div>
        </>
    );
};

export default MenuList;