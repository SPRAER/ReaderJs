import React from "react";

export const themes = {
    light: {
        theme: "#07689f",
        subTheme: "#f6f6f6",
        sidebarRight: {
            borderRight: '1px solid #e0e0e0',
            backgroundColor: "#f6f6f6",
            color: "#2b2024",
        },
        sidebarTop: {
            borderTop: '1px solid #e0e0e0',
            backgroundColor: "#f6f6f6",
            color: "#2b2024",
        },
        sidebarBottom: {
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: "#f6f6f6",
            color: "#2b2024",
        },
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
        sidebarRight: {
            borderRight: '1px solid #343434',
            backgroundColor: "#1b1b1b",
            color: "#eeeeee"
        },
        sidebarTop: {
            borderTop: '1px solid #343434',
            backgroundColor: "#1b1b1b",
            color: "#eeeeee"
        },
        sidebarBottom: {
            borderBottom: '1px solid #343434',
            backgroundColor: "#1b1b1b",
            color: "#eeeeee"
        },
        component:{
            backgroundColor: "#1b1b1b",
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

