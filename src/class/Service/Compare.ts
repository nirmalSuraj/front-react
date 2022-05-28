
import { ICompanyData } from "../../types";




class Compare{


private arrayCompany:ICompanyData[] | undefined;

private fieldOfcompanyObject:string | undefined;


private input1:number|undefined ;
private input2:number|undefined ;



constructor(getCompaniesArray:ICompanyData[],fieldOfcompanyObject:string){
  this.arrayCompany = getCompaniesArray;
  this.fieldOfcompanyObject = fieldOfcompanyObject;

}



public static Company(getCompaniesArray:ICompanyData[],fieldOfcompanyObject:string){


  return new Compare(getCompaniesArray,fieldOfcompanyObject);

}

  private compareInputsAndReturnColor (input1:number,input2:number):string{
    if( input1 > input2){
        return "text-success";
    }
    
    if(input1 == input2){
      return "";

    }else{
      return "text-danger";
    }

    return "";

}






public ByIndex (index:number):this|null{
  if(this.arrayCompany != undefined && this.arrayCompany != undefined){
            type ObjectKey1 = keyof typeof companyInfo1; 
            type ObjectKey2 = keyof typeof companyInfo2;
           const  field = this.fieldOfcompanyObject
      
            let companyInfo1:ICompanyData =  this.arrayCompany[index == 0 ?0:1];
            let companyInfo2:ICompanyData =  this.arrayCompany[index == 0 ?1:0];
            let field1 = field as ObjectKey1;
            let field2 = field as ObjectKey2;
            let wait:string ; 

              if(typeof companyInfo1[field1]  != undefined && typeof companyInfo2[field2]  != undefined ){
                let input1 = companyInfo1[field1] ?? 0 ;
                let input2 = companyInfo2[field2] ?? 0 ;
                this.input1 = +input1;
                this.input2 = +input2;
             
                

              }
       return this

      }

      return null;
    }



    public Compare():string{
      if(this.input1 != undefined  && this.input2 != undefined  ){
        let input1 = this.input1  ;
        let input2 = this.input2 ;

        switch(this.fieldOfcompanyObject){
          case "companyProfit":
            return this.compareInputsAndReturnColor(+input1, +input2)  ;
          break
          case "debt":
            return this.compareInputsAndReturnColor(+input1, +input2)  ;
          break
          case "equitity":
            return this.compareInputsAndReturnColor(+input1, +input2)  ;
          break
          case "depositDate":
            return this.compareInputsAndReturnColor(+input1, +input2)  ;
          break
          default :
  
            return "black"
          break
  
        }

      }

      return "black"
    
    }


}


export default Compare;