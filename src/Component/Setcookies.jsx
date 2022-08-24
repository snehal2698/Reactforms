
import cookies from "js-cookie";
function Setcookies(cookiename, userin){
    cookies.set(cookiename,userin,{
        expiers :1,
        secure :true,
        sameSite :'strict',
        path:"/"

    })

    }

export default Setcookies;