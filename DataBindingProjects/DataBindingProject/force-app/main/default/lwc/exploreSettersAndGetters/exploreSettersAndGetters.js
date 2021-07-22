import { LightningElement, track } from 'lwc';

export default class ExploreSettersAndGetters extends LightningElement {
    welcomeMessage = 'Hello!! Salesfroce';
   @track finalMessage;

    get message(){
        return this.welcomeMessage;
    }

    set message(value){
        this.finalMessage = value.toUpperCase();
    }

    handleChange(event){
        this.message = event.target.value;
    }
}