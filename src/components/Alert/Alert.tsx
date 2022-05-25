import IAlert from "../../interface/IAlert/IAlert";



const Alert = ({type,msg}:IAlert)=>{

   return (<>
        <div className={`alert alert-${type}`} role="alert">
            {msg.map(e=> {
                return (<p>{e}</p>)
            }
                )}
        </div>
    
    </>)

}

export default Alert;