import { ICompanyData, IPostCompanyData } from "../../types";
import auth from "../../class/Auth/Auth";
import cookie from "../../class/Cookie/Cookie";
import { useEffect, useState } from "react";

interface PostCallDBProps {
    company: ICompanyData
}




const PostCallDB = ({ company }: PostCallDBProps) => {
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        //triggers the PostCall
        setTimeout(() => {
            console.log("start");

            PostToHistory(company);
            console.log("stop");

        }, 2000);
    }, []);
//PostToHistory function will map out the CompanyInfo Array, every object prop from CompanyInfo will be asigned to the epost object.

    const PostToHistory = async (companies: ICompanyData) => {
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
            console.log(4)
            try {
                const response = await fetch('https://localhost:44391/api/history/history', {
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

        /*let epost: IPostCompanyData;
        companies.map(async (e: ICompanyData) => {
            epost = {
                address: e.address,
                companyProfit: e.companyProfit.toString(),
                debt: e.debt.toString(),
                depositDate: e.depositDate?.toString(),
                equitity: e.equitity.toString(),
                name: e.name,
                vat: e.vat

            }
            console.log(epost)
            if (auth.Auth()) {
                try {
                    const response = await fetch('https://localhost:44391/api/history/history', {
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

        })/*


        /*let epost: IPostCompanyData = {
            address: e.address,
            companyProfit: e.companyProfit.toString(),
            debt: e.debt.toString(),
            depositDate: e.depositDate?.toString(),
            equitity: e.equitity.toString(),
            name: e.name,
            vat: e.vat
        }
        if (auth.Auth())

            try {
                const response = await fetch('https://localhost:44391/api/history/history', {
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
            */
    }

    return (<div></div>);
}

export default PostCallDB;