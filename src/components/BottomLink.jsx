import { NavLink } from "react-router-dom";

export default function BottomLink({ icon, destination }) {
    return (
        <NavLink
            className='bg-lime-300 p-3 rounded-full hover:bg-lime-400'
            to={destination}>
            {icon}
        </NavLink>
    )
}
