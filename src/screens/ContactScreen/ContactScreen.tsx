import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import auth from "../../class/Auth/Auth";
import { ICompanyData, HistoryResponse } from "../../types";


interface ContactScreenProps {userSessionHistoryCompanies : ICompanyData[]

}

const ContactScreen = ({userSessionHistoryCompanies} : ContactScreenProps) => {
    const [loading, setLoading] = useState<boolean>(false);



       if (loading === false) {return (
        <div>
            <div className="col d-flex justify-content-center">
              { userSessionHistoryCompanies?.map((c: ICompanyData) => {
                    return (
                      <Card style={{ width: '60%' }}>
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
                    )
                  }
                  )
              }
            </div>
            </div>
            )}
            else { return (
        <div>
            <h1>Contact</h1>
            <p>
                This is the Contact screen. You can contact me at <a href="mailto:test@test.com"></a>. 
            </p>
            <form>
                <label>Email</label><br/>
                <input type="email" name="email" /><br/>
                <label>Message</label><br/>
                <textarea name="message"></textarea><br/>
                <button type="submit">Send</button>
            </form>
        </div>
        )
}}

export default ContactScreen;