import React, {useContext, useEffect, useState} from 'react';
import '../../UI/assets/scss/LangList.scss';
import Button from "@mui/material/Button";
import {ThemeContext} from "../../Store/db/Theme";

function LangList(props) {
    const [isSelected, setSelected] = useState(false);
    const handleSelected = e => {
        e.stopPropagation();
        props.onClick(props.item,!isSelected);
        setSelected(!isSelected);
    };
    const useStyle = useContext(ThemeContext);
    const [onSelect, setOnSelect] = useState({});
    useEffect(() => {
        if (isSelected) {
            setOnSelect(useStyle.button.onHover)
        } else {
            setOnSelect({})
        }
    }, [isSelected, useStyle.button.onHover])
    return (
        <Button style={onSelect} onClick={handleSelected}>
            {props.item}
        </Button>
    );
}

export default LangList;