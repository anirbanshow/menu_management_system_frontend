import React from 'react'

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#"><i className="fa-solid fa-folder" /></a>
                </li>
                <li className="breadcrumb-item active">Menu</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb