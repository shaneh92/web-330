/*
==============================================================================
; Title: theme.js
; Author: Professor Krasso
; Modified by: Shane Hingtgen
; Bellevue University
; Date: 01/02/23
; Description: This is the theme.js file required by the Web 330 HTML, CSS, and JavaScript Requirements document, used for the dark and light themes.
; Work Cited: 
    Web 330 HTML, CSS, and JavaScript Requirements
    W3 Schools https://www.w3schools.com/jsref/prop_win_localstorage.asp
=================================================================================================================
*/
/*if the user doesn't select a theme it's automatically set to light-theme as default*/
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/*the function from the web 330 requirements doc, it uses the users selection on what theme they selected*/
function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

// moved here from html
 /**
         * Function to switch the users selected website theme
         * @param x (this instance) x changed to instance
         */
function toggleMode(instance)
{

let colorTheme = document.body.classList; // get the body's CSS class
let iconMode = instance.classList; // get the current classes assigned to the triggered button
    /**
     * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
     * local storage.
     */
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }
    /**
     * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
     * local storage.
     */
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }

    /**
     * Applies the selection to the HTML page elements
     */
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}
//end toggle
