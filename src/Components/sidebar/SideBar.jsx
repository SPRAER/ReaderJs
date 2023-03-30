import React, {useContext} from "react";
import "../../UI/assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../Store/db/Theme";
import {Home, Folder, AccountCircle, MenuBook, NoteAdd} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

let SideBar = () => {
    const useStyle = useContext(ThemeContext);
    const {t} = useTranslation();

    return (
        <aside style={useStyle.sidebarRight} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"} style={useStyle.sidebarBottom}>
                    <span>{t("Menu")}</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Home} href={"/home"} title={t("Home")} />
                <SideBarOptions className={"lib-sub"} Icon={AccountCircle} href={"/home/profile"}  title={t("Profile")}/>
                <SideBarOptions className={"lib-sub"} Icon={MenuBook} href={"/home/book"}  title={t("Manga")}/>
                <SideBarOptions className={"lib-sub"} Icon={NoteAdd} href={"/home/redactor"}  title={t("Redactor")}/>
            </div>

            <div className="aside-bar-container playlist">
                <p className={"p1"} style={useStyle.sidebarTop}>
                    <span>{t("MySelection")}</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/classic"}  title={t("Classic")}/>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/senen"}  title={t("Shonen")}/>
            </div>
        </aside>
    );
}

export default SideBar;