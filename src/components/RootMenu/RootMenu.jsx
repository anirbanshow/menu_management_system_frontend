import { useDispatch } from "react-redux";
import rootMenu from "../../data/rootMenu.json";
import { addRootMenu } from "../../store/RootMenuSlice";

function RootMenu() {

    const dispatch = useDispatch();

    function selectHandler(event) {
        const value = event.target.value
        dispatch(addRootMenu(value))
    }

    return (
        <div className='col-8'>
            <div className="mb-3">
                <label htmlFor="rootMenu" className="form-label">Menu</label>
                <select className="form-select" id='rootMenu' onChange={selectHandler}>
                    <option value="">--Select Menu--</option>
                    {
                        rootMenu?.map((item) => {
                            return <option value={item?.name} key={item?.id}>
                                {item?.name}
                            </option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default RootMenu;
