import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useState, ChangeEventHandler, MouseEventHandler } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ICompanyData } from "../../types";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import CompareForm from '../../components/Compare/CompareForm';


interface HomeScreenProps {
  companyVAT: string[],
  companyInfo: ICompanyData[],
  vatArray: string[],
  setCompanyInfo: React.Dispatch<React.SetStateAction<ICompanyData[]>>,
  submit: React.MouseEventHandler<HTMLButtonElement>,
  setVatArray: React.Dispatch<React.SetStateAction<string[]>>
  userSessionHistoryCompanies: ICompanyData[]
}

const HomeScreen = ({companyInfo, companyVAT,vatArray,setVatArray, submit, setCompanyInfo,userSessionHistoryCompanies }: HomeScreenProps) => {

  return (
    <main>
      <CompareForm companyVAT={companyVAT} submit={submit} vatArray = {vatArray} setVatArray={setVatArray} companyInfo={companyInfo}  setCompanyInfo = {setCompanyInfo} userSessionHistoryCompanies = {userSessionHistoryCompanies}/>
    </main>
  );
}
export default HomeScreen;