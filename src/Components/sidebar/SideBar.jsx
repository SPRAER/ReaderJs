import React, {useContext} from "react";
import "../../UI/assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../Store/db/Theme";
import {Home, Folder, AccountCircle, MenuBook, NoteAdd} from "@material-ui/icons";

let SideBar = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>Меню</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Home} href={"/home"} title={"Главная"} />
                <SideBarOptions className={"lib-sub"} Icon={AccountCircle} href={"/home/profile"}  title={"Профиль"}/>
                <SideBarOptions className={"lib-sub"} Icon={MenuBook} href={"/home/book"}  title={"Манга"}/>
                <SideBarOptions className={"lib-sub"} Icon={NoteAdd} href={"/home/redactor"}  title={"Редактор"}/>
            </div>

            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>Моя подборка</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/classic"}  title={"Класика"}/>
                <SideBarOptions className={"lib-sub"} Icon={Folder} href={"/home/playlist/senen"}  title={"Сёнен"}/>
            </div>
        </aside>
    );
}

export default SideBar;