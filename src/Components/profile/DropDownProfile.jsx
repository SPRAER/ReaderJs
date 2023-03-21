import React, {useContext} from "react";
import '../../UI/assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../Store/db/Theme";
import HoverButton from "../HoverButton";
import {AccountBox} from "@mui/icons-material";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
            {/*<HoverButton Icon={Explore} variant={"text"} text={"Redactor"}/>*/}
        </div>
    );
}
export default DropDownProfile;