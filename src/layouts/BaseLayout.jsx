import Sidebar from '../components/Sidebar/Sidebar';

const BaseLayout = ({ children }) => {
    return (
        <div className="container_wrapper">
            <Sidebar />
            {children}
        </div>
    )
}

export default BaseLayout;