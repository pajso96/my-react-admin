import * as React from "react";
import Navbar from "../navbar/Navbar";

export class Header extends React.Component{
    render(): any{
        return(
        <div>
            <nav>
                <Navbar />
            </nav>
        </div>
        );
    }
}

export default Header;