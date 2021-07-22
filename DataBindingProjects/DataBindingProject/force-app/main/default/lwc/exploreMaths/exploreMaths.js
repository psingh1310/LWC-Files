import { api, LightningElement, track } from 'lwc';

export default class ExploreMaths extends LightningElement {

    @track totalTaxableAmount;

    @api calculate(totalAmount, totalPercentage){
              this.totalTaxableAmount = (totalAmount * totalPercentage) / 100;
              //return to parent component
             return this.totalTaxableAmount;
    }
}