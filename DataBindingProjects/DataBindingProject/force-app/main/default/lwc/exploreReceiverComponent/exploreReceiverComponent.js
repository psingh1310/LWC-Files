import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';
export default class ExploreReceiverComponent extends LightningElement {

   @wire (CurrentPageReference) pageRef;

    connectedCallback(){
      registerListener("sendData", this.handleCallback, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);   
    }

    handleCallback(data){
       console.log(data);
    }
}