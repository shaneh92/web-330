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