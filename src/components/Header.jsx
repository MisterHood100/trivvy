import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <NavLink to="/"><i className="fa-solid fa-house" title="Home"></i></NavLink>
            <h1 className="headerTitle">TRIVVY!</h1>
        </div>
    )
}

export default Header;