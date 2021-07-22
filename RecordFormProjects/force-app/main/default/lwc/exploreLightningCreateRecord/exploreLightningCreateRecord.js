import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ExploreLightningCreateRecord extends LightningElement {
    
   name = '';

    handleChange(event){
         this.name = event.target.value;
    }

    handleClick(){
     //1. Assign the Value to the fields
     const fields = {};

     fields[NAME_FIELD.fieldApiName] = this.name;

     //2. Configure the Object and the fields
     const recordInput ={
         apiName: ACCOUNT_OBJECT.objectApiName,
         fields
     }

     //3 create records
     createRecord(recordInput)
      .then(account => {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: 'Success',
                  message: account.id,
                  variant: 'success'
              })
          );
      })

      .cach(error => {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: 'Error',
                  message: error.body.message,
                  variant: 'error'
              })
          );
      });
    }
}