import React, {useContext, useState} from "react";
import '../../UI/assets/scss/BottomNavigation.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../Store/db/Theme";

function BottomNavigationMobile() {
    const useStyle = useContext(ThemeContext);

    const [menuItems, setMenuItem] = useState([
        {
            id: 0,
            icon: <HomeOutlinedIcon/>,
            href: "/home",
            label: "Home"
        },
        {
            id: 1,
            icon: <ExploreOutlinedIcon/>,
            href: "/home/redactor",
            label: "Redactor"
        },
        {
            id: 2,
            icon: <AccountCircleOutlinedIcon/>,
            href: "/home/profile",
            label: "Profile"
        },
        {
            id: 3,
            icon: <MenuBookOutlinedIcon/>,
            href: "/home/book",
            label: "book"
        }
    ]);
    let currPath = window.location.pathname;
    return (
        <div className="bottom-navigation" style={useStyle.sidebarTop}>
            {
                menuItems.map(({id, icon, href, label}) => (
                    <Link className={"bottom-navigation-link"} key={id} to={href} style={useStyle.sidebarRight}>
                        <Button className={`${currPath === href ? "BottomNavAction active" : "BottomNavAction"}`}
                                    style={{borderRadius: 0}}>
                            {icon}
                        </Button>
                        <span className="label">
                                {
                                    label
                                }
                            </span>
                    </Link>
                ))
            }
        </div>
    );
}

export default BottomNavigationMobile;