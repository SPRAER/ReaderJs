import React, {useContext} from "react";
import "../../UI/assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../Store/db/Theme";
import {Home, Folder, AccountCircle, MenuBook, NoteAdd} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import cn from "classnames";

let SideBar = () => {
    const {isDark} = useContext(ThemeContext);
    const {t} = useTranslation();

    return (
        <aside className={cn('aside-bar sidebarRight', {Dark: isDark === true})}>
            <div className="aside-bar-container">
                <p className={cn('p1 sidebarBottom', {Dark: isDark === true})}>
                    <span>{t("Menu")}</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Home} href={"/home"} title={t("Home")} />
                <SideBarOptions className={"lib-sub"} Icon={AccountCircle} href={"/home/profile"}  title={t("Profile")}/>
                <SideBarOptions className={"lib-sub"} Icon={MenuBook} href={"/home/book"}  title={t("Manga")}/>
                <SideBarOptions className={"lib-sub"} Icon={NoteAdd} href={"/home/redactor"}  title={t("Redactor")}/>
            </div>

            <div className="aside-bar-container playlist">
                <p className={cn('p1 sidebarTop', {Dark: isDark === true})}>
                    <span>{t("MySelection")}</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/classic"}  title={t("Classic")}/>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/senen"}  title={t("Shonen")}/>
            </div>
        </aside>
    );
}

export default SideBar;