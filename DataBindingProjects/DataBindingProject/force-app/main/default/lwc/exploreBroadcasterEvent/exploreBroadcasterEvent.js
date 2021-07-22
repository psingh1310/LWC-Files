import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';
export default class ExploreBroadcasterEvent extends LightningElement {

    @wire(CurrentPageReference) CurrentPageReference;
    message = 'Hey!! Prashant'

    handleClick(){
        fireEvent(this.CurrentPageReference, "sendData", this.message);
    }
}