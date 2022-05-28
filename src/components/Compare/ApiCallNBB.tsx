import { useEffect, useState } from "react";
import auth from "../../class/Auth/Auth";
import cookie from "../../class/Cookie/Cookie";
import { ICompanyData, IPostCompanyData } from "../../types";
import CompanyCard from "../CompanyCard/CompanyCard";
import PostCallDB from "./PostCallDB";


const base =    cookie.GetCookies("base");



interface APICallNBBProps {
    companyVAT: string[],
    companyInfo: ICompanyData[],
    setCompanyInfo: React.Dispatch<React.SetStateAction<ICompanyData[]>>
}


const ApiCallNBB = ({ companyInfo, companyVAT, setCompanyInfo }: APICallNBBProps) => {
    const [errorState1, setErrorState1] = useState<boolean>(false);
    const [errorState2, setErrorState2] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);


    //arranges the post, will be moved to a component of its own.

    useEffect(() => {
        //for testing purposes please regard changing your localhost port.
        Promise.all([GetCompanyDetails()]);


    }, []);
    //response can only be called per method, this is the reason two API call methodes were made.
    //both calls are in a try catch so the app won't crash, user will be notified if the VAT they've used was valid.

    const GetCompanyDetails = async () => {

        setLoading(true);
        let dataBucket: ICompanyData[] = [];
        let errorcount = 0;
        for (let i = 0; i < companyVAT.length; i++) {
            try {
                errorcount = errorcount + 1;
                let url = `${base}/nbbapi/${companyVAT[i]}`;
                let response = await fetch(`${url}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                let data = await response.json();
                insertHistroy(data.finalCompanyData[0])
                dataBucket = [...dataBucket, ...data.finalCompanyData as ICompanyData[]];
            }

            catch (error) {
                errorState(errorcount);

            }
        }
        setCompanyInfo(dataBucket);
        setLoading(false);
    }

    //errorState method determines which exception needs to be triggered.
    const errorState = (count: number) => {
        console.log(count);

        if (count === 1) {
            setErrorState1(true);
        }
        else if (count === 2) {
            setErrorState2(true);
        }
        else {
            setErrorState1(true);
            setErrorState2(true);
        }
    }


    

    /*const GetCompanyDetailsFirst = async () => {
        try {
            setLoading(true);
            let url = `https://localhost:44391/nbbapi/${vatInput[0]}`;
            let response = await fetch(`${url}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            let data = await response.json();
      
      

            setCompanyInfo(data.finalCompanyData as ICompanyData[]);
           
            setLoading(false);

        } catch (error) {
            setErrorState1(true);
        }

    }
    const GetCompanyDetailsSecond = async () => {

        try {
            setLoading(true);
            let url = `https://localhost:44391/nbbapi/${vatInput[1]}`;
            let response = await fetch(`${url}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            let data = await response.json();
            const hold = data;
            
            setCompanyInfo(data.finalCompanyData as ICompanyData[]);
            PostToHistory(data.finalCompanyData .pop())
            setLoading(false);

        } catch (error) {
            setErrorState2(true);
        }

    }*/

    //renders that the user will see when they've provide the data, condition statements make sure the user will be notified when wrong inputs have been made.


    const insertHistroy = async (company: ICompanyData)=>{
        setLoading(true);

        let epost: IPostCompanyData = {
            address: company.address,
            companyProfit: company.companyProfit.toString(),
            debt: company.debt.toString(),
            depositDate: company.depositDate?.toString(),
            equitity: company.equitity.toString(),
            name: company.name,
            vat: company.vat
        }
        console.log(epost)
        if (auth.Auth()) {

            try {
                const response = await fetch(base+'/api/history/history', {
                    method: 'POST',
                    body: JSON.stringify(epost),
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true",
                        "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
                        "Access-Control-Allow-Methods": "POST",
                        'Authorization': `Bearer ${cookie.GetCookies("token")}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = (await response.json());

                console.log('result is: ', JSON.stringify(result));

                return result;
            } catch (error) {
                if (error instanceof Error) {
                    console.log('error message: ', error.message);
                    return error.message;
                } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                }
            }

        }



        setLoading(false);
    }



    if (errorState1 === false && errorState2 === false) {
        return (
            <div className="d-flex justify-content-around">
                <CompanyCard companyInfo={companyInfo} />
            </div>
        )
    }
    else if (errorState1 === true && errorState2 === false) {
        return (
            <div >
                <div className="alert alert-danger" role="alert">
                    Failed to find the first result, please try again with a valid VAT number!
                </div>
                <CompanyCard companyInfo={companyInfo} />
            </div>
        )
    }

    else if (errorState1 === false && errorState2 === true) {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    Failed to find the second result, please try again with a valid VAT number!
                </div>
                <CompanyCard companyInfo={companyInfo} />
            </div>
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

export default ApiCallNBB;