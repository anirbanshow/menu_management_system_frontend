import rootMenu from "../../data/rootMenu.json";

function RootMenu() {

    return (
        <div className='col-8'>
            <div className="mb-3">
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
        </div>
    )
}

export default RootMenu;
