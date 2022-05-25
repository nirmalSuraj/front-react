import { ChangeEventHandler, MouseEventHandler, useReducer, useState } from "react";
import cookie from "../../class/Cookie/Cookie";
import ILoginUser from "../../interface/ILoginForm/ILoginUser";
import Alert from "../Alert/Alert";
const base =    cookie.GetCookies("base");
interface LoginProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
    loggedin : boolean
}

const Login=({setAuth,loggedin} : LoginProps)=>{

    
    const [user, setUser] = useState<ILoginUser>({
        Email:  "",
        Password:  "",
    });

    const [err,setErr] = useState<boolean>(false);
    const [success,setsuccess] = useState<boolean>(false);
    const [errString,setErrString] = useState<string[]>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
       // console.log(event.target.id);
       type ObjectKey = keyof typeof userHold; // this will dynamically select key position of the js object
        let userHold:ILoginUser = {  Email:  "",
                                        Password: ""
                                    };

         // hold old values                            
        for (const [key, value] of Object.entries(user)) {
            const  p  = key as ObjectKey
            userHold[p] = value;
        }                    
        
        const  x  = event.target.id as ObjectKey
        userHold[x] = event.target.value;
    
        setUser(userHold);
                            
      }

      const send :MouseEventHandler<HTMLButtonElement> = (event)=>{
        
        event.preventDefault()
        console.log(user)
            fetch(base+"/api/Auth/login",{
             
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached,
                   credentials:"same-origin",
                   headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
                    "Access-Control-Allow-Methods": "OPTIONS, GET, POST"

                  },
                    body: JSON.stringify(user)
                    
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
                    cookie.SetCookie("auth","true",1);
                    cookie.SetCookie("token",e.token,1);
                    console.log(e)
                    setsuccess(true)
                    setAuth(true)
                    window.location.replace('home');

                }else{
                    setsuccess(false)
                }
            })
            .catch(err=> console.log(err))
      }







    return(

        <>
                   <div className="row mt-5">
                    <div className="col-md-6 col-sm-12 offset-md-3">
                        <form action="">
                    
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="examplePasssword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={send}>Log In</button>
                       
                     
                            
                        </form>
                      
                    </div>
                    
                    
                </div>
        
        </>
    )

}

export default Login;