import { ChangeEventHandler, useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SiteContext } from "../../context";
import { ICompanyData } from "../../types";
import UserHistory from '../../components/UserHistory/UserHistory';
import auth from "../../class/Auth/Auth";

interface HistoryScreenProps {
    userSessionHistoryCompanies: ICompanyData[],
    setHistoryCompanies: React.Dispatch<React.SetStateAction<ICompanyData[]>>
    setSearch:Function
}

const HistoryScreen = ({userSessionHistoryCompanies, setHistoryCompanies,setSearch} : HistoryScreenProps) => {

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
       
        setSearch(event.target.value);

        
    }
    


    return (
        
        <>

        <div className="row">
            <div className="col-6">
            <input type="text" className="form-contol mt-5 " onChange={handleChange} />
            </div>
         
         </div>
         <div className="row">
             <div className="col-12 mt-5"> <h1 className="text-center"> History</h1></div>
         </div>
        <div className="row">
        <UserHistory userSessionHistoryCompanies={userSessionHistoryCompanies} setHistoryCompanies= {setHistoryCompanies}></UserHistory>
        </div>
        </>
    )
}

export default HistoryScreen;