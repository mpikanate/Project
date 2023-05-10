import { destroyCookie, parseCookies, setCookie } from "nookies";
export const COOKIE_NAME = "user-profile";
export const COOKIE_TEMP_KID_DATA = "temp-kid-data";
export const COOKIE_SELECTED_TEMP_KID_DATA = "temp-selected-kid-data";

export const saveProfile = (
    profile,
    option
) => {
    let cookieOption = {
        // maxAge: option?.maxAge || 86400,
        path: "/",
    };
    setCookie(null, COOKIE_NAME, JSON.stringify(profile), cookieOption);
};

export const clearToken = () => {
    destroyCookie(null, COOKIE_NAME);
    clearTempKidData()
    clearSelectedTempKidData()
    localStorage.clear();
};

export const retrieveProfile = () => {
    const cookies = parseCookies();
    return cookies[COOKIE_NAME] ? JSON.parse(cookies[COOKIE_NAME]) : {};
};

export const saveTempKidData = (
    data,
    option
) => {
    let cookieOption = {
        maxAge: option?.maxAge || 86400,
        path: "/",
    };
    setCookie(null, COOKIE_TEMP_KID_DATA, JSON.stringify(data), cookieOption);
};

export const retrieveTempKidData = () => {
    const cookies = parseCookies();
    return cookies[COOKIE_TEMP_KID_DATA] ? JSON.parse(cookies[COOKIE_TEMP_KID_DATA]) : {};
};

export const clearTempKidData = () => {
    destroyCookie(null, COOKIE_TEMP_KID_DATA);
    localStorage.clear();
};

export const saveSelectedTempKidData = (
    data,
    option
) => {
    let cookieOption = {
        // maxAge: option?.maxAge || 86400,
        path: "/",
    };
    setCookie(null, COOKIE_SELECTED_TEMP_KID_DATA, JSON.stringify(data), cookieOption);
};

export const retrieveSelectedTempKidData = () => {
    const cookies = parseCookies();
    return cookies[COOKIE_SELECTED_TEMP_KID_DATA] ? JSON.parse(cookies[COOKIE_SELECTED_TEMP_KID_DATA]) : {};
};

export const clearSelectedTempKidData = () => {
    destroyCookie(null, COOKIE_SELECTED_TEMP_KID_DATA);
    localStorage.clear();
};