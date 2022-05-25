import { createContext } from "react";
import { ICompanyData } from "./types";

export interface SiteContext { 
    companies: ICompanyData[];
}

export const SiteContext = createContext<SiteContext>({ 
    companies: [],
});