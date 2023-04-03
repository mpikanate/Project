import { destroyCookie, parseCookies, setCookie } from "nookies";
export const COOKIE_NAME = "user-profile";

export const saveProfile = (
    profile,
    option
) => {
    let cookieOption = {
        maxAge: option?.maxAge || 86400,
        path: "/",
    };
    setCookie(null, COOKIE_NAME, JSON.stringify(profile), cookieOption);
};

export const clearToken = () => {
    destroyCookie(null, COOKIE_NAME);
    localStorage.clear();
};

export const retrieveProfile = () => {
    const cookies = parseCookies();
    return JSON.parse(cookies[COOKIE_NAME]);
};