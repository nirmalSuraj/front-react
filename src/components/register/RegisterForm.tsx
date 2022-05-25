import { ChangeEventHandler, MouseEventHandler, useReducer, useState } from "react";
import cookie from "../../class/Cookie/Cookie";
import ICreateUser from "../../interface/IRegisterForm/ICreateUser";
import Alert from "../Alert/Alert";

const base =    cookie.GetCookies("base");

const RegisterForm = ()=>{

    const [user, setUser] = useState<ICreateUser>({
        Email:  "",
        LastName:  "",
        Password:  "",
        FristName:  "",
        ConfirmPassword: ""
    });

    const [err,setErr] = useState<boolean>(false);
    const [success,setsuccess] = useState<boolean>(false);
    const [errString,setErrString] = useState<string[]>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
       // console.log(event.target.id);
       type ObjectKey = keyof typeof userHold; // this will dynamically select key position of the js object
        let userHold:ICreateUser = {  Email:  "user",
                                        LastName:  "",
                                        Password:  "",
                                        FristName:  "",
                                        ConfirmPassword: ""
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
            fetch(base+"/api/register",{
             
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                      'Content-Type': 'application/json',
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Credentials": "true",
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
                    
                    setsuccess(true)
                }else{
                    setsuccess(false)
                }
            })
            .catch(err=> console.log(err))
      }







    return (
        <>
          {err&&<Alert type="danger mt-5 col-6 offset-md-3" msg={errString}></Alert>}
          {success&&<Alert type="success text-center mt-5 col-6 offset-md-3" msg={["Done"]}></Alert>}
               
                <div className="row mt-5">
                    <div className="col-md-6 col-sm-12 offset-md-3">
                        <form action="">
                    
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Achter naam</label>
                            <input type="email" className="form-control" id="LastName" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Voornaam</label>
                            <input type="email" className="form-control" id="FristName" aria-describedby="emailHelp"  onChange={handleChange} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Paswoord</label>
                            <input type="email" className="form-control" id="Password" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Herhaal</label>
                            <input type="email" className="form-control" id="ConfirmPassword" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                       
                        <button type="submit" className="btn btn-primary" onClick={send}>Submit</button>
                            
                        </form>
                      
                    </div>
                    
                    
                </div>
       
        
     
        </>

    )
}


export default RegisterForm;