import { useDispatch } from 'react-redux';
import { addInfo } from '../../store/AddMenuSlice';
import "./MenuItem-Style.css";

const calculateMenuDepth = (menuItems) => {
    if (!menuItems || menuItems.length === 0) {
        return 0;
    }

    return 1 + Math.max(...menuItems.map(item => calculateMenuDepth(item.children || [])));
};


const MenuItem = ({ item, depth }) => {

    const { MODE } = import.meta.env;

    const dispatch = useDispatch();

    const itemDepth = depth + 1; // Calculate depth for current 

    function buttonEventHandler(item) {
        dispatch(addInfo(item));
    }

    return (
        <li>
            <div>
                {
                    MODE === "development"
                        ? <span>{item.id} - {item.name} (Depth: {itemDepth})</span>
                        : <span>{item.name} (Depth: {itemDepth})</span>
                }

                <button className='addBtn' onClick={() => buttonEventHandler(item)}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            {item.children && item.children.length > 0 && (
                <ul>
                    {item.children.map((child) => (
                        <MenuItem key={child.id} item={child} depth={itemDepth} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
