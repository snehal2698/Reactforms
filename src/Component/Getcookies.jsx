import Cookies from "js-cookie";

function Getcookies(cookiename){
    return Cookies.get(cookiename);
};

export default Getcookies;