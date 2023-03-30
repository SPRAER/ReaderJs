import React, {useContext, useEffect, useRef, useState} from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import '../../UI/assets/scss/SearchBar.scss';
import {useDispatch} from "react-redux";
import {setSearch} from "../../Store/actions/actions";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../Store/db/Theme";
import {useTranslation} from "react-i18next";

const SearchBar = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false);
    const handleSearchBarOpen = () => {
        setSearchBarOpen(!isSearchBarOpen);
    };
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };
    const searchRef = useRef();
    useEffect(() => {
        if (isSearchBarOpen === true) {
            searchRef.current.focus();
        }
    });

    const useStyle = useContext(ThemeContext);
    const {t} = useTranslation();

    const dispatch = useDispatch();
    const searchLink = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchQuery.toLowerCase()));
        if (searchQuery !== "")
            searchLink.current.click();
    };

    return (
        <div className={`${isSearchBarOpen ? "SearchBar  open" : "SearchBar"}`}>
            <form onSubmit={handleSearch} className={"search-container"} style={useStyle.searchBar}>
                {
                    isSearchBarOpen &&
                    <>
                        <Link to={"/home/search"} ref={searchLink}/>
                        <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                        <input id={"search-input"}
                               name={"searchQuery"}
                               value={searchQuery}
                               onChange={handleSearchQuery}
                               placeholder={t("SearchPlaceholder")}
                               type="text"
                               ref={searchRef}
                        />
                    </>
                }
            </form>
            {
                !isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderOpen"}
                     onClick={handleSearchBarOpen}>
                    <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                    <p className={"hide"}>&nbsp;{t("Search")}</p>
                </div>
            }
            {
                isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderClose"}
                     onClick={handleSearchBarOpen}>
                    {/*
                    <p>Close&nbsp;</p>*/}
                    <CancelIcon style={{color: "grey"}} className="cancel hide" fontSize="small"/>
                </div>
            }


        </div>
    );
};

export default SearchBar;