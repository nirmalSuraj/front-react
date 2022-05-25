export interface ICompanyData {
    id?: number;
    address: string;
    companyProfit: number;
    debt: number;
    depositDate?: Date;
    equitity: number;
    name: string;
    vat: string;
}

export interface IPostCompanyData {
    address: string;
    companyProfit: string;
    debt: string;
    depositDate?: string;
    equitity: string;
    name: string;
    vat: string;
}


       
export interface SendOBJ {
    id: number,
    lastName: string,
    firstName: string,
    history : ICompanyData[],      
 
    }
export interface HistoryResponse{
    dberror: boolean,
    error: string,
    success: boolean|string,
    hasError : boolean,
    sendOBJ: SendOBJ
}