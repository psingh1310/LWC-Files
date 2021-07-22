import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ExploreLDSHandlers extends LightningElement {
    @api recordId

    handleSubmit(event){
      //1. Handle the default behaviour
      event.preventDefault();

      //2. Get all the fields of the record
      const fields = event.detail.fields;

      //3. Modify a field
      fields.Name = 'Testing Salesforce Casts';

      //4. Submit the form
      this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){
           console.log(event.detail);

           const toast= new ShowToastEvent({
               title: 'Success',
               message: 'Record is Updated!!'
           });

           this.dispatchEvent(toast);
    }
     
    handleError(event){
        console.log("Error!!");
    }
}