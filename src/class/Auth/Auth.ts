
import { type } from "os";
import cookie from "../Cookie/Cookie";
import utility from "../Utility/Utility";

class Auth{

    /**
     * 
     * @returns bool 
     * this function will return true if the user is authenticated else false
     */

    public Auth():boolean{
        
        
        return utility.AuthSession("auth");
    }

    /**
     * this function will kill auth cookie
     */

    public destroy(status:number):void{
       
        if(typeof status !== "undefined"){
            if(status >= 400 && status != 404){
                cookie.DeleteCookie("auth");
            }
        }

      
    }


  

    
}

const auth = new Auth();
export  default auth;