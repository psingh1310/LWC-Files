import { api, wire, LightningElement } from 'lwc';
import fetchContact from '@salesforce/apex/newCustomContactController.fetchContact';
export default class ExploreWireApexMethodsWithTheParams extends LightningElement {
    @api recordId;

    @wire(fetchContact, {accountId: '$recordId'}) contacts
}