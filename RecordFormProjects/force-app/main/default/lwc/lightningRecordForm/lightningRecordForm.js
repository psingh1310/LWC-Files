import { api, LightningElement } from 'lwc';
import Name_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating'


export default class LightningRecordForm extends LightningElement {
    @api recodId
    fields = [Name_FIELD, INDUSTRY_FIELD, RATING_FIELD];
}