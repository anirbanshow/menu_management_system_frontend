import { useDispatch } from 'react-redux';
import { addInfo } from '../../store/AddMenuSlice';
import "./MenuItem-Style.css";

const calculateMenuDepth = (menuItems) => {
    if (!menuItems || menuItems.length === 0) {
        return 0;
    }

    return 1 + Math.max(...menuItems.map(item => calculateMenuDepth(item.children || [])));
};

const MenuItem = ({ item, depth, onDelete }) => {

    const { MODE } = import.meta.env;

    const dispatch = useDispatch();

    const itemDepth = depth + 1;

    function addMenuHandler(item) { dispatch(addInfo(item)); }

    return (
        <>
            <div className="relative">

                {item?.parent_id && (<div className="left_v_border" />)}

                <div className="ms-3">

                    <div className="d-flex justify-content-start align-items-center">

                        {item?.parent_id && (<div className="mini_gap" />)}

                        {
                            item.children && item.children.length > 0 && (
                                <button><i class="fa-solid fa-angle-down"></i></button>
                            )
                        }

                        <div class="action_area">
                            <span>{item.name}</span>

                            <button onClick={() => addMenuHandler(item)}>
                                <i class="fa-solid fa-plus"></i>
                            </button>

                            <button onClick={() => onDelete(item.id)}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>


                    </div>

                    {item.children && item.children.length > 0 && (
                        <div className="nested_childs">
                            {item.children.map((child) => (
                                <MenuItem key={child.id} item={child} depth={itemDepth} onDelete={onDelete} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuItem;
