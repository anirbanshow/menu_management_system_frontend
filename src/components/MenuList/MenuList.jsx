import { useState } from 'react';
import MenuItem from './../MenuItem/MenuItem';

const MenuList = ({ menuItems, onDelete }) => {

    const [toggle, setToggle] = useState({
        expand: true,
        collaspe: false
    });

    function buttonToggleHandler(option) {
        console.log(option);
        setToggle(option)
    }

    function toggleFromParentExpandButton() {
        console.log('toggleFromParentExpandButton');
        setToggle({
            expand: true,
            collaspe: false
        })
    }

    return (
        <>
            <div className='menu_controll_area'>
                <button
                    className={toggle?.expand ? 'active' : ''}
                    onClick={() => buttonToggleHandler({ expand: true, collaspe: false })}
                >
                    Expand All
                </button>

                <button
                    className={toggle?.collaspe ? 'active' : ''}
                    onClick={() => buttonToggleHandler({ expand: false, collaspe: true })}
                >
                    Collapse All
                </button>
            </div>


            <div className='listing_wrapper'>
                {menuItems?.map(item => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        depth={0}
                        onDelete={onDelete}
                        toggle={toggle}
                        parentExpand={toggleFromParentExpandButton}
                    />
                ))}
            </div>
        </>
    );
};

export default MenuList;