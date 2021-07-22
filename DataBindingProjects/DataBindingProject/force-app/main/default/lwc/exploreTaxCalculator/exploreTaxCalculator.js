import { LightningElement, track } from 'lwc';

export default class ExploreTaxCalculator extends LightningElement {

    @track totalAmount;
    @track taxPercentage;
    @track totalTaxAmount;

    handleChange(event){
         const field = event.target.name;

         if(field === 'totalAmount'){
               this.totalAmount = event.target.value;
         }
         if(field === 'taxPercentage'){
            this.taxPercentage = event.target.value;
      }
      
      if(this.totalAmount !== undefined && this.taxPercentage !== undefined){
             //to take access to template file and calling child component
    this.totalTaxAmount = this.template.querySelector('c-explore-maths').calculate(this.totalAmount, this.taxPercentage);

      }
     
    }
}