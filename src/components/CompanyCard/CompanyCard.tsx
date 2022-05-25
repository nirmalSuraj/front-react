import { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SiteContext } from "../../context";
import { ICompanyData } from "../../types";

interface CompanyCardProps {
  companyInfo: ICompanyData[]
// text-danger , text-success 
}
/**
 *  
 *
 */

const CompanyCard = ({ companyInfo }: CompanyCardProps) => {
  return (
      
      <>
      { companyInfo?.map((c: ICompanyData,i:number) => {
            return (
              <div className="col-md-3  mt-5 ml-5">
              <Card style={{ width: '100%',minHeight:"400px" }}>
                <Card.Body>
                  <Card.Title>{c.name}</Card.Title>
                  <Card.Text>VAT : {c.vat} </Card.Text>
                  <Card.Text>Adress: {c.address}</Card.Text>
                  <Card.Text>Publishing Date: {c.depositDate}</Card.Text>
                  <Card.Text>Equity: {c.equitity}</Card.Text>
                  <Card.Text>Debts: {c.debt}</Card.Text>
                  <Card.Text>Profit: {c.companyProfit}</Card.Text>
                </Card.Body>
              </Card>
              </div>
            )
          }
          )
      }
 
 </>

  )
}

export default CompanyCard;