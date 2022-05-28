import React, { ChangeEventHandler, MouseEventHandler, useState, useEffect} from 'react';
import styles from './App.module.css';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import HistoryScreen from './screens/HistoryScreen/HistoryScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { ICompanyData, HistoryResponse } from './types';
import { SiteContext } from './context';
import { Form } from 'react-bootstrap/lib/Navbar';
import Register from './screens/Register/Register';
import { Container } from 'react-bootstrap';
import auth from "./class/Auth/Auth";
import cookie from "./class/Cookie/Cookie";
const base =    cookie.GetCookies("base");

function App() {
  const [userSessionHistoryCompanies, setHistoryCompanies] = useState<ICompanyData[]>([]);
  const [companies, setCompanies] = useState<ICompanyData[]>([]);
  const [companyVAT, SetInputVat] = useState<string[]>([]);
  const [vatArray, setVatArray] = useState<string[]>([]);
  const [companyInfo, setCompanyInfo] = useState<ICompanyData[]>([]);
  const [loggedin, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const setSearchHistory = (search:string)=>{
  
      setSearch(search);
  }

  const submitButtonCompareForm: MouseEventHandler<HTMLButtonElement> = (event)=>{
    event.preventDefault();
    SetInputVat(vatArray);
    setVatArray([]);
  }



  const HistoryCall= async () => {
    
   
    try {
      setLoading(true)
    
    
      let url = `${base}/api/history/history/all`;
    
      if(search.length > 0 ) url = `${base}/api/history/${search}/history`;
     
      let response = await fetch(url, {
          method: 'GET',
          headers: {
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': `Bearer ${cookie.GetCookies("token")}`
          }
      });

      auth.destroy(response.status);
 
      const data  =  await response.json();
      return data

      
  } catch (error) {
      console.log(error)  
    
    
    }
   }

   useEffect(() => {

  if(cookie.GetCookies("base") == ""){

    cookie.SetCookie("base","https://localhost:44391",2)
    cookie.SetCookie("checkBase","flase",2);
    cookie.DeleteCookie("auth")
    cookie.DeleteCookie("token")

  }



if(auth.Auth()){
  
  HistoryCall().then((e:HistoryResponse)=>{
    if(e.sendOBJ != null){
     setHistoryCompanies(e.sendOBJ.history);
            setLoading(false)
            console.log(loading);
    }}
    
    )

}

  
  }, [loggedin,search]);

let vat = '123' 



  return (
    <SiteContext.Provider value={{companies:companies}}>
      <div className={`${styles.App}`}>
        <BrowserRouter>

        <NavBar/>
        <Container>
            <Switch>
              <Route path="/home" exact >
                <HomeScreen  vatArray = {vatArray} setVatArray = {setVatArray} submit = {submitButtonCompareForm} companyVAT = {companyVAT} companyInfo = {companyInfo} setCompanyInfo = {setCompanyInfo} userSessionHistoryCompanies = {userSessionHistoryCompanies} />
              </Route>
              <Route path="/contact" exact>
                <ContactScreen userSessionHistoryCompanies={userSessionHistoryCompanies} />
              </Route>
              <Route path="/UserHistory" exact>
                <HistoryScreen userSessionHistoryCompanies={userSessionHistoryCompanies} setHistoryCompanies= {setHistoryCompanies} setSearch={setSearchHistory}/>
              </Route>
              <Route path="/Login" exact>
                <LoginScreen setAuth={setAuth} loggedin = {loggedin} />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            </Switch>
          </Container>
        </BrowserRouter>

      </div>
    </SiteContext.Provider>
  );
}
//commentje

export default App;
