import rootMenu from "../../data/rootMenu.json";

function RootMenu() {

    return (
        <div className="mb-3 w-50">
            <label htmlFor="rootMenu" className="form-label">Menu</label>
            <select className="form-select" id='rootMenu'>
                {
                    rootMenu?.map((item) => {
                        return <option value={item?.name} key={item?.id}>
                            {item?.name}
                        </option>
                    })
                }
            </select>
        </div>
    )
}

export default RootMenu;
