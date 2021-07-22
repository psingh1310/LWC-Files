import { LightningElement, api, track } from 'lwc';

export default class ExploreDecorators extends LightningElement {

  //  @track greeting = 'Hey Prashant';  //@track track all the changes and re-render the properties
  @api greeting = 'Hey Prashant';  //@api -> pumpin values from parent component to the child component
    /* passing values from the parent component to the child component */

    name;

   /* hadnleChage(event){
        this.greeting = event.target.value;
        console.log(this.greeting);
    } */

    /* object properties are not reactive by default */
  @track  person = {
        name: 'Kumar',  //to make reactive when the value of keys are updated we have to use @track
        skill: 'Salesforce development cycle',
        profession: 'programmer'
    };
    
    //lifecycle hook
    renderedCallback(){
        console.log('--Am rendered--');
    }

    handleClick(){
        //In this case object become the reactive
       /* this.person = {
            name: 'Singh',
            skill: 'Salesforce development cycle',
            profession: 'programmer'
        }; */ 
        this.person.name = 'PKumar';
       
    }
}