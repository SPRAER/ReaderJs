import React, {useRef} from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

let SideBarOptions = (props) => {
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const sideBarRef = useRef();
    const href = props.href;
    return (
        <Button onClick={()=>{sideBarRef.current.click();}} style={{color: '#000'}} className={className} startIcon={Icon && <Icon/>}>
            <Link ref={sideBarRef} to={href}/>
            {title}
        </Button>
    );
}

export default SideBarOptions;