type darkThemeTypes = {
    backgroundColor?: string;
    highlightColor?: string;
    textColor?: string;
    lightTextColor?: string;
    navbar?: string;
    font_family_one?: string;
    font_family_two?: string;
    buttonColor?: string;
    boxShadow?: string;
    navLinkColor?: string;
    hoverColor?:string;
}


const darkTheme: darkThemeTypes = {
    backgroundColor: "#0a192f",
    highlightColor: "#64ffda",
    textColor: "#ccd6f6",
    lightTextColor: "#8892b0",
    navbar: "#0a192f",
    font_family_one: 'Montserrat,sans-serif',
    font_family_two: 'Reddit Sans,sans-serif',
    buttonColor: "#64ffda",
}

export const lightTheme: darkThemeTypes = {

    navbar: "#ffffff",
    highlightColor: "#7843e9",
    buttonColor: "#7843e9",
    backgroundColor: "#e7e7e7",
    textColor: "#111111",
    lightTextColor: "#555555",
    font_family_one: 'Montserrat,sans-serif',
    font_family_two: 'Reddit Sans,sans-serif',
    boxShadow:"0 10px 100px rgba(0,0,0,0.1)",
    navLinkColor: "#333333",
    hoverColor:"#e4d9fb"





}

export default darkTheme;

