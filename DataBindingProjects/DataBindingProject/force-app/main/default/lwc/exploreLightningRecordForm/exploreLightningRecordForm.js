import { api, LightningElement } from 'lwc';
import Name_Field from '@salesforce/schema/Account.Name';
import Industry_Field from '@salesforce/schema/Account.Industry';
import Website_Field from '@salesforce/schema/Account.Website';
import Rating_Field from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ExploreLightningRecordForm extends LightningElement {

   @api recordId
   fields = [Name_Field, Industry_Field, Website_Field, Rating_Field];

   handleSuccess(event) {
    const evt = new ShowToastEvent({
        title: "Account created",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(evt);
}
}