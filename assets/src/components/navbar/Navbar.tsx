import * as React from "react";
import { Link } from "react-router-dom";


export class Navbar extends React.Component{
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/users/'>Users</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;