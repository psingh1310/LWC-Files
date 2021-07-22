import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    message = 'Hey!!Salesforce'

    handleUpdate(event){
         this.message = event.target.value
         console.log(this.message);
    }
}