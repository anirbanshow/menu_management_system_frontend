import React from 'react';
import MenuItem from './../MenuItem/MenuItem';

const MenuList = ({ menuItems, onDelete }) => {

    return (
        <>
            <div className='listing_wrapper'>
                {menuItems?.map(item => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        depth={0}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </>
    );
};

export default MenuList;