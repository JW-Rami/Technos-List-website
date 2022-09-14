import { NavLink } from "react-router-dom";
export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/add" className={({isActive}) => (isActive ? "activeLink" : undefined)} >Add Technos</NavLink></li>
                <li><NavLink to="/list">All Technos</NavLink></li>
            </ul>
        </div>
    )
}