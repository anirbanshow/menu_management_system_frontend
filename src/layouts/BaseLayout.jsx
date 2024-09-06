import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const BaseLayout = ({ children }) => {

    const [toggle, setToggle] = useState(false);

    function menuToggleHandler() {
        setToggle(!toggle);
    }

    return (
        <div className="container_wrapper">

            <Sidebar toggle={toggle} setToggle={setToggle} />

            <div class="menu_toggle">
                <img src="./assets/images/openSidebar.svg" class="menu_toggle" alt="Menu Toggle" onClick={menuToggleHandler} />
            </div>

            {children}
        </div>
    )
}

export default BaseLayout;