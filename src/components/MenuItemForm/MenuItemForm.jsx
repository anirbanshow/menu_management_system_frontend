import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { removeInfo } from '../../store/AddMenuSlice';

const MenuItemForm = ({ onAdd, menuItems, childMenus }) => {

    const { VITE_URL } = import.meta.env;

    const dispatch = useDispatch();

    const selector = useSelector((state) => state.addMenu);

    const [name, setName] = useState('');
    const [parentID, setParentID] = useState("");

    useEffect(() => {
        setParentID(selector?.id)
    }, [selector]);


    const handleSubmit = () => {

        if (name == "") {
            alert("Please add Menu name");
            return;
        }

        if (menuItems.length == 0) {
            console.log("Send API request for Root Parent");
            onAdd({ name });
            return;
        }

        if (parentID == "") {
            alert("Please Select A Menu");
            return;
        }

        onAdd({ name, parent_id: parentID });

        setName("");
        setParentID("");

        dispatch(removeInfo({}));
    };

    return (
        <div>

            {
                menuItems.length > 0 && (
                    <div className="mb-3">
                        <label>Parent Data:</label>
                        <select className="form-select"
                            onChange={(e) => setParentID(e.target.value)}
                        >
                            <option value="">--Select--</option>
                            {
                                childMenus.map((item, index) => {
                                    return <option
                                        key={item.id}
                                        defaultValue={item.id}
                                        selected={item.id == parentID}
                                    >
                                        {item.id} - {item.name} - {parentID}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                )
            }

            <div className="mb-3">
                <label>Name:</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <button type="submit" className='btn btn-primary' onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
};

export default MenuItemForm;
