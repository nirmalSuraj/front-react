import { ChangeEventHandler, MouseEventHandler, useReducer, useState } from "react";
import cookie from "../../class/Cookie/Cookie";
import ILoginUser from "../../interface/ILoginForm/ILoginUser";
import Alert from "../Alert/Alert";
import auth from "../../class/Auth/Auth";
const base =    cookie.GetCookies("base");
const Logout=()=>{

    const [err,setErr] = useState<boolean>(false);
    const [success,setsuccess] = useState<boolean>(false);
    const [errString,setErrString] = useState<string[]>([]);



      const send :MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.preventDefault()
        console.log()
            fetch(base+"/api/Auth/loginout",{
             
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached,
                   credentials:"same-origin",
                   headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
                    "Access-Control-Allow-Methods": "OPTIONS, GET, POST"

                  },
                    
            }).then(e=>e.json())
            .then(e => {
                
                console.log(e)
                if(e.hasError || typeof e.errors == "object"){

                    let hold = [];
                    if(typeof e.errors == "object"){
                    for (const [key, value] of Object.entries(e.errors)) {
                       hold.push("-"+key+": "+value);
                    }                   
                 }else{
                    hold.push(e.error );
                 }
                    
                    setErr(true)

                    setErrString(hold);
                    


                }else{
                    setErr(false)
                }

                if(!e.hasError && e.errors === undefined){
                    //auth.destroy();
                    cookie.DeleteCookie("auth")
                    cookie.DeleteCookie("token")
                    setsuccess(true)
                    window.location.reload();
                }else{
                    setsuccess(false)
                }
            })
            .catch(err=> console.log(err))
      }







    return(

        <>

                        <button type="submit" className="btn btn-primary" onClick={send}>Log out</button>

        
        </>
    )

}

export default Logout;