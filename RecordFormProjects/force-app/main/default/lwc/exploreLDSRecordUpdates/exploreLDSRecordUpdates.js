import { LightningElement, wire } from 'lwc';
import getRandomContact from '@salesforce/apex/exploreContactController.getRandomContact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import Last_NAME from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';

export default class ExploreLDSRecordUpdates extends LightningElement {

@wire(getRandomContact) contact;

handleClick(){
    const fields = {};

    fields[ID_FIELD.fieldApiName] = this.contact.data.Id;
    fields[FIRST_NAME.fieldApiName] = this.template.querySelector("[ data-field='FirstName']").values;
    fields[Last_NAME.fieldApiName] = this.template.querySelector("[ data-field='LastName']").values;

    const recordInput = {fields};

    updateRecord(recordInput)
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