import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addInfo } from '../../store/AddMenuSlice';
import "./MenuItem-Style.css";

const calculateMenuDepth = (menuItems) => {
    if (!menuItems || menuItems.length === 0) {
        return 0;
    }

    return 1 + Math.max(...menuItems.map(item => calculateMenuDepth(item.children || [])));
};

const MenuItem = ({ item, depth, onDelete, toggle, parentExpand }) => {

    const [isExpanded, setIsExpanded] = useState(true);

    const dispatch = useDispatch();

    const itemDepth = depth + 1;

    function addMenuHandler(item) {
        dispatch(addInfo(item));
    }

    const toggleExpand = () => {
        parentExpand();
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="relative">

                {item?.parent_id && (<div className="left_v_border" />)}

                <div className="ms-3">

                    <div className="d-flex justify-content-start align-items-center">

                        {item?.parent_id && (<div className="mini_gap" />)}

                        {
                            item?.children && item?.children?.length > 0 && (
                                <button
                                    style={{ marginLeft: (!item?.parent_id) && '12px' }}
                                    onClick={toggleExpand}
                                >
                                    {
                                        toggle.expand && isExpanded
                                            ? <i className="fa-solid fa-angle-down"></i>
                                            : <i className="fa-solid fa-angle-up"></i>
                                    }
                                </button>
                            )
                        }

                        <div className="action_area">
                            <span>{item.name}</span>

                            <button onClick={() => addMenuHandler(item)}>
                                <i className="fa-solid fa-plus"></i>
                            </button>

                            <button onClick={() => onDelete(item.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>

                    </div>

                    {toggle.expand && isExpanded && item?.children && item?.children?.length > 0 && (
                        <div className="nested_childs">
                            {item.children.map((child) => (
                                <MenuItem
                                    key={child.id}
                                    item={child}
                                    depth={itemDepth}
                                    onDelete={onDelete}
                                    toggle={toggle}
                                    parentExpand={parentExpand}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuItem;
