import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountControllerClass.getAccountList';

export default class ExploreWireServiceApexMethod extends LightningElement {

    @track accounts;
    @track error;

    //1. Wiring an adaptor(getRecord) to a [property]
    //2. Wiring a Apex method to a property
    //3. Wiring an apex method back to a function

    /* Invoking an apex method Imperatively */

    //Using a lifeCycle hook

    renderedCallback(){
        getAccountList()
        .then(result => {
            this.accounts = result
        })
        .catch(error => {
            this.error = errpr;
        });
    }

  /*  @wire(getAccountList)
      wiredAccounts({error, data}){
          if(data){
              this.accounts = data,
              this.error = error;
          } else if(error){
              this.error = error,
              this.accounts = undefined;
          }
      } */



}