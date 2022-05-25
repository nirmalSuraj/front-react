import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useState, ChangeEventHandler, MouseEventHandler } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ICompanyData } from "../../types";
import CompanyCard from "../CompanyCard/CompanyCard";
import ApiCallNBB from './ApiCallNBB';

interface CompareProps {
  companyVAT: string[],
  companyInfo: ICompanyData[],
  vatArray: string[],
  setCompanyInfo: React.Dispatch<React.SetStateAction<ICompanyData[]>>,
  submit: React.MouseEventHandler<HTMLButtonElement>,
  setVatArray: React.Dispatch<React.SetStateAction<string[]>>
  userSessionHistoryCompanies: ICompanyData[]
}

const CompareForm = ({ companyInfo, companyVAT, vatArray, submit, setCompanyInfo, setVatArray,userSessionHistoryCompanies }: CompareProps) => {

  const handleVat: ChangeEventHandler<HTMLInputElement> = (event) => {
    //checksum that makes sure only relevant data can be used to make the API call to the NBB.
    const re = /^[0-9\b]+$/;

    var count: string[] = (event.target.value).split("");
    if (count.length === 10 && re.test(event.target.value)) {
      setVatArray([...vatArray, event.target.value]);
    }
    
  }
  const clearHandler: MouseEventHandler<HTMLButtonElement> = (event)=>{
    window.location.reload();

  }
  let history = userSessionHistoryCompanies
  //if data has entered the APICALLNBB will be called upon to make the fetch calls.
  if (companyVAT.length !== 0) {

    return (
      <main>
        <h1>NBB Company Comparison</h1>
        <p>
          Welcome to the Company Comparison Project.<br></br>
          Enter two company VAT numbers to compare both key figures.
        </p>


        <Form>
          <Form.Group className="mb-3" controlId="formCompany1" onChange={handleVat} >
            <Form.Label>Company1VAT</Form.Label>
            <Form.Control type="VAT" placeholder="Enter VATNumber"  />
            <Form.Text className="text-muted" >
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCompany2" onChange={handleVat}>
            <Form.Label>Company2VAT</Form.Label>
            <Form.Control type="VAT" placeholder="Enter VATNumber" />
            <Form.Text className="text-muted" >
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={clearHandler}>
            Clear
          </Button>
        </Form>

        <ApiCallNBB companyVAT={companyVAT} companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} />
  
      </main>
    )
  }

  else {

    return (
      <main>
        <h1>NBB Company Comparison</h1>
        <p>
          Welcome to the Company Comparison Project.<br></br>
          Enter two company VAT numbers to compare both key figures.
        </p>

        <Form>
          <Form.Group className="mb-3" controlId="formCompany1" onChange={handleVat} >
            <Form.Label>Company1VAT</Form.Label>
            <Form.Control type="text" placeholder="Enter VATNumber" />
            <Form.Text className="text-muted" >
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCompany2" onChange={handleVat}>
            <Form.Label>Company2VAT</Form.Label>
            <Form.Control type="text" placeholder="Enter VATNumber" pattern="[0-9]" required />
            <Form.Text className="text-muted" >
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>

      </main>


    )

  }
}




export default CompareForm;