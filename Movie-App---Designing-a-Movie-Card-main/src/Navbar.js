import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="title">MovieFlix</div>
                <div className="cart">
                    <img className="cart-item-icon" alt="cart-icon" />
                    <span className="cart-item-count"></span>
                </div>
            </div>
        )
    }
}

export default Navbar;