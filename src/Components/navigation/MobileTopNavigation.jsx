import React from "react";
import SearchBar from "../searchbar/SearchBar";
import '../../UI/assets/scss/MobTopNav.scss';

class MobileTopNavigation extends React.Component{
    render() {
        return(
            <nav className="mob-top-navigation">
                <SearchBar/>
            </nav>
        );
    }
}

export default MobileTopNavigation;