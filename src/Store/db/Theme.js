import React from "react";

export const themes = {
    light: {
        theme: "#07689f",
        subTheme: "#f6f6f6",
        component:{
            backgroundColor: "#f6f6f6",
            color: "#2b2024",
        },
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
        },
        volume:{
            color:"#07689f"
        }
    },
    dark: {
        theme:"#4e6ecc",
        subTheme: "#292929",
        component:{
            backgroundColor: "#191919",
            color: "#eeeeee",
        },
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"#fafafa"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#fafafa"
            }
        },
        volume:{
            color:"#07689f"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);

