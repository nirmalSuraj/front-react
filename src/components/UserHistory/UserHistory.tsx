import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import auth from "../../class/Auth/Auth";
import { ICompanyData, HistoryResponse } from "../../types";
import CompanyCard from "../CompanyCard/CompanyCard";
import HistoryCall from "../../App";
import UserHistoryCard from "./userHistoryCard";


interface UserHistoryProps {

    userSessionHistoryCompanies: ICompanyData[],
    setHistoryCompanies: React.Dispatch<React.SetStateAction<ICompanyData[]>>

}


const UserHistory = ({ userSessionHistoryCompanies, setHistoryCompanies }: UserHistoryProps) => {
    let history = userSessionHistoryCompanies;

    //renders that the user will see when they've provide the data, condition statements make sure the user will be notified when wrong inputs have been made.
    //companyCard has been replaced so the component will only render the userHistory without triggering the PostCallNBB component.
    if (history.length > 0) {

        return (
            <>
                <UserHistoryCard companyInfo={history} />
            </>
        )
    }
    else {
        return (
            <div className="alert alert-danger" role="alert">
                Failed to find any results, please try again using valid VAT numbers!
            </div>
        )
    }
}
export default UserHistory