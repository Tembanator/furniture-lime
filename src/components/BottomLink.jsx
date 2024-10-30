import { NavLink } from "react-router-dom";

export default function BottomLink({ icon, destination }) {
    return (
        <NavLink
            className='bg-green-300 p-3 rounded-full'
            to={destination}>
            {icon}
        </NavLink>
    )
}
