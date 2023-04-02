import React, {useContext, useRef} from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../Store/db/Theme";
import cn from "classnames";

let SideBarOptions = (props) => {
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const sideBarRef = useRef();
    const href = props.href;
    const {isDark} = useContext(ThemeContext);

    return (
        <Button onClick={()=>{sideBarRef.current.click();}} className={cn(className + " " + "component", {Dark: isDark === true})} startIcon={Icon && <Icon/>}>
            <Link ref={sideBarRef} to={href}/>
            {title}
        </Button>
    );
}

export default SideBarOptions;