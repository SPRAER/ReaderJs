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
    const useStyle = {
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                    color:"#191919"
            },
            contained:{
                backgroundColor: "#07689f",
                    color:"#fafafa"
            },
            outlined:{
                backgroundColor:"transparent",
                    color:"#191919"
            }
        }
};
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