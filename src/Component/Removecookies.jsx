import Cookies from "js-cookie";
function Removecookies(cookiename){
    return Cookies.remove(cookiename);
}
export default Removecookies;