import { LightningElement, track } from 'lwc';

export default class ExploreToDoList extends LightningElement {

    @track todo;
    @track todoArray = [];

    handleClick(){
        const todoObj = {
             id: null,
             name: ''
        }

        todoObj.id = Math.round(Math.random() * 100);
        todoObj.name = this.todo;

      //  this.todoArray.push(todoObj);
      this.todoArray.unshift(todoObj);
    }
    
    handleChange(event){
       this.todo = event.target.value;
    }
}